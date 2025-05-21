# docker install my_website


# 1. Update the system
#2. Install Docker

# 3. Clone the repository
git clone https://github.com/amohsen99/my_website.git

# 5. Run the Docker container
docker run -it -d --name mohsen_website -p 8080:80 --name web -v ~/Documents/kit/docs/cloud/devops/docker/projects/my_website:/usr/share/nginx/html nginx


or you can use docker file 
    vim Dockerfile
    # Use the official Nginx base image
    FROM nginx:latest

    # Remove the default Nginx web content to remove the default welcome page
    RUN rm -rf /usr/share/nginx/html/*

    # Copy your website files into the container optional or you can use bind mount while running
    COPY . /usr/share/nginx/html

    # Expose port 80
    EXPOSE 80

then run the container
    docker build -t mohsen_website .
    docker run -it -d --name mohsen_website -p 8080:80 mohsen_website -v ~/Documents/kit/docs/cloud/devops/docker/projects/my_website:/usr/share/nginx/html
