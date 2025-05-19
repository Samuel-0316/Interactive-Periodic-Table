# Use official Nginx image
FROM nginx:alpine

# Remove default Nginx web files
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site files to Nginx
COPY . /usr/share/nginx/html

# Expose port 80 for the web
EXPOSE 80

# Start Nginx (CMD already defined in base image)
