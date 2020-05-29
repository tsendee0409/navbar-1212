# === CLEAR DOCKER ============================================================================
Function Delete-Docker($img, $tag, $con) {
   if (docker ps -a | Select-String -Pattern $con) {
      Write-Host " [Warning] Removing docker container: $con " -ForegroundColor Black -BackgroundColor Yellow
      docker stop $con
      docker rm $con
   }
   
   if (docker images -a | Select-String -Pattern $img) {
      Write-Host " [Warning] Removing docker image: $img " -ForegroundColor Black -BackgroundColor Yellow
      docker image rmi $img$tag
   }
}


# === NETWORK ============================================================================
$network = "navbar1212"

If (-Not (docker network ls | Select-String -Pattern $network)) {
   Write-Host " Creating docker network ($network) " -ForegroundColor White -BackgroundColor Blue
   docker network create --driver bridge $network
}


# === MSSQL2019 ============================================================================
$image = "tsendee0409/navbar-1212"
$tag = ":mssql2019"
$container = "navbar-1212-mssql2019"
$password = "Password1212"
	
Delete-Docker -img $image -tag $tag -con $container
$image = $image + $tag

Write-Host " Starting to build and run MSSQL2019 docker image... " -ForegroundColor White -BackgroundColor Blue
# Build image
docker build -f Dockerfile_mssql -t $image .
# Run image
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=$password" `
   -p 31433:1433 --name $container `
   --network $network -d $image
#Write-Host " The MSSQL2019 container name is $container, the SA password is $password " -ForegroundColor White -BackgroundColor Green


Write-Host " Waiting for MSSQL2019 to be started around 90 seconds... " -ForegroundColor White -BackgroundColor Blue
Start-Sleep -s 90


Write-Host " Importing initial data (sql) " -ForegroundColor White -BackgroundColor Blue
# Insert sql
docker exec -it $container /opt/mssql-tools/bin/sqlcmd `
   -S localhost -U SA -P "$password" `
   -i /home/init.sql


# === JAVA ============================================================================
$image = "tsendee0409/navbar-1212"
$tag = ":java8"
$container = "navbar-1212-java8"

Delete-Docker -img $image -tag $tag -con $container
$image = $image + $tag

Write-Host " Starting to build Java docker image... " -ForegroundColor White -BackgroundColor Blue
# Build image
docker build -f Dockerfile_java -t $image .
Write-Host " Starting to run Java docker image... " -ForegroundColor White -BackgroundColor Blue
# Run image
docker run -p 38080:8080 --name $container --network $network $image


Write-Host " [Warning] Start containers manually if the containers are stopped! " -ForegroundColor Black -BackgroundColor Yellow
Write-Host " Done! thank you. " -ForegroundColor White -BackgroundColor Green