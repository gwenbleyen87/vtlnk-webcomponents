# Use the official Node.js image from the Docker Hub
FROM node:14

# Create and change to the app directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3001:3001

# Define the command to run the app
CMD ["node", "server.js"]