# Stage 1: Build the React app
FROM node:22-trixie-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
