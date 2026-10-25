FROM nginx:1.27-alpine
COPY . /usr/share/nginx/html/
RUN rm /usr/share/nginx/html/Dockerfile
