# Use a Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install all dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Install a simple static file server
RUN npm install -g serve

# Run the production build
RUN npm run build

# Expose the port
EXPOSE 3000

# The command to run when the container starts
CMD ["serve", "-s", "dist", "-p", "3000"]