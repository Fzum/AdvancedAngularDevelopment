FROM nginx:alpine
LABEL author="Alexander Pajer"
#Copies nginx.conf file
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf


# docker build -f app.nginx.dockerfile -t nginxtest .
# docker run -d -p 8080:80/tcp nginxtest