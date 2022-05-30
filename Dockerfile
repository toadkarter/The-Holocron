FROM openjdk:17
EXPOSE 8080
ADD target/starwarsapp-0.0.1-SNAPSHOT.jar starwarsapp-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/starwarsapp-0.0.1-SNAPSHOT.jar"]