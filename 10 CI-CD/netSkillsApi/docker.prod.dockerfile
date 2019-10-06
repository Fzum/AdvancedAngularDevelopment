FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 8080/tcp
ENV ASPNETCORE_URLS https://*:5000

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["*.csproj", "."]
RUN dotnet restore "SkillsApi.csproj"
COPY . .
RUN dotnet build "SkillsApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SkillsApi.csproj" -c Release -o /app
FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SkillsApi.dll"]


# Pull & Run SQL Linux
# docker pull microsoft/mssql-server-linux:latest
# docker run -d --name sqllinux -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=TiTp4SQL@dmin' microsoft/mssql-server-linux

# Build Image
# docker build --rm -f "docker.prod.dockerfile" -t skillsapi:latest .

# Run Image including SQL
# docker run -d --rm -it -p 8080:5000 --link sqllinux:sqllinux skillsapi:latest

# Browse using: http://localhost:8080