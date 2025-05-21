steps:
    clone the repo
    cd mohsen_website
    docker build -t mohsen_website .
    docker run -it --rm -d -p 8080:80 --name mohsen_website mohsen_website
    docker commit mohsen_website mohsen_website:v1
    docker push mohsen_website:v1