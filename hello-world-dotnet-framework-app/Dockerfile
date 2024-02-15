FROM mcr.microsoft.com/dotnet/framework/runtime:4.8 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/framework/sdk:4.8 AS build
WORKDIR /src
COPY ["HelloWorldApp/HelloWorldApp.csproj", "HelloWorldApp/"]
RUN dotnet restore "HelloWorldApp/HelloWorldApp.csproj"
COPY . .
WORKDIR "/src/HelloWorldApp"
RUN dotnet build "HelloWorldApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HelloWorldApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["HelloWorldApp.exe"]
