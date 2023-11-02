## Production:
https://ticketcloud.azurewebsites.net/

## Locally:
- Full App: https://localhost:7087/
- Swagger UI: https://localhost:7087/swagger/index.html
- Frontend Only: http://localhost:3000/

## Install:
- [ASP.NET Core Runtime 8.0.0-rc.2 Hosting Bundle](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [dotnet-ef](https://www.nuget.org/packages/dotnet-ef/8.0.0-rc.2.23480.1). In CLI run:
    1. `dotnet tool install --global dotnet-ef`
    2. `dotnet tool update --global dotnet-ef --version 8.0.0-rc.2.23480.1`
- [Node.js Latest LTS Version: 20.9.0 64-bit (includes npm 10.1.0)](https://nodejs.org/en/download)
- [yarn 1.22.5](https://classic.yarnpkg.com/en/docs/install#windows-stable):
    1. `npm install --global yarn`

## Run app locally:
1. Navigate to frontend folder:
    - `cd C:\code\TicketApp\TicketApp\ClientApp`
2. Run Frontend app on http://localhost:3000/:
    - `yarn dev`
3. In VS2022 in Debug click https_debug to run Backend app on https://localhost:7087/

## [IMPORTANT] Before commit and push:
1. If you did any frontend changes, then you have to update output folder (`C:\code\TicketApp\TicketApp\ClientApp\out`) for production and commit changes:
    - `cd C:\code\TicketApp\TicketApp\ClientApp`
    - `yarn build-export`
    - commit and push

## Create migration:
In VS2022 open View->Other Windows->Package Manager Console:
- `dotnet ef migrations add NewMigrationName --project .\TicketApp\TicketApp.csproj`

## Up migration to the latest migration:
- `dotnet ef database update --project .\TicketApp\TicketApp.csproj`

## Down migration to PreviousMigrationName:
- `dotnet ef database update PreviousMigrationName --project .\TicketApp\TicketApp.csproj`

## Remove the latest migration:
`dotnet ef migrations remove --project .\TicketApp\TicketApp.csproj`

## GenericRepository Documentation
https://github.com/TanvirArjel/EFCore.GenericRepository/wiki