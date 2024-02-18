# Base image for building the application
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the project file(s) to the working directory
COPY *.csproj .

# Restore the dependencies specified in the project file(s)
RUN dotnet restore

# Copy the entire application source code to the working directory
COPY . .

# Build and publish the application in Release configuration to the 'out' directory
RUN dotnet publish -c Release -o out

# Base image for running the application
FROM mcr.microsoft.com/dotnet/runtime:6.0

# Set the working directory inside the container
WORKDIR /app

# Copy the published output from the build stage to the working directory
COPY --from=build /app/out .

# Set the entry point for the container to run the application
ENTRYPOINT [ "dotnet", "webapp.dll" ]
