# === TEST ============================================================================
$container = "TEST-navbar1212-mssql2019"
$password = "Password1212"

# Run image
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=$password" `
   -p 1433:1433 --name $container `
   -d mcr.microsoft.com/mssql/server:2019-latest

Write-Host " Waiting for MSSQL2019 to be started around 60 seconds... " -ForegroundColor White -BackgroundColor Blue
Start-Sleep -s 60

# Create database
docker exec -it $container /opt/mssql-tools/bin/sqlcmd `
   -S localhost -U SA -P "$password" `
   -Q "CREATE DATABASE navbar1212 COLLATE LATIN1_GENERAL_100_CI_AS_SC_UTF8"