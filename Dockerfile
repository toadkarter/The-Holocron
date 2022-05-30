FROM openjdk:17
EXPOSE 8080
ADD target/holocron.jar holocron.jar
ENTRYPOINT ["java", "-jar", "/holocron.jar"]