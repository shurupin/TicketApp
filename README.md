### Production:
https://ticketcloud.azurewebsites.net

### Install:
- .NET 8
- NodeJs
- [dotnet-ef](https://www.nuget.org/packages/dotnet-ef/8.0.0-rc.2.23480.1). In CLI run:
    1. `dotnet tool install --global dotnet-ef`
    2. `dotnet tool update --global dotnet-ef --version 8.0.0-rc.2.23480.1`

### Run locally:

### Before commit and push:

### Create migration:
In VS2022 open View->Other Windows->Package Manager Console:
- `dotnet ef migrations add NewMigrationName --project .\TicketApp\TicketApp.csproj`

### Up migration:
- `dotnet ef database update --project .\TicketApp\TicketApp.csproj`

### Down migration:
- `dotnet ef database update PreviousMigrationName --project .\TicketApp\TicketApp.csproj`

### Revert all migrations and make the database empty:
- `dotnet ef database update 0 --project .\TicketApp\TicketApp.csproj`

### Remove the latest migration:
`dotnet ef migrations remove --project .\TicketApp\TicketApp.csproj`