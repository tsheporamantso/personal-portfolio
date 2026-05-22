# Stage 1: Build the React app
FROM node:alpine AS builder
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]