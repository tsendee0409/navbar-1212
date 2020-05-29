FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY backend/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]