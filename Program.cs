internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddHttpLogging(o => { });

        var app = builder.Build();
        app.UseHttpsRedirection();
        app.UseHttpLogging();

        app.UseDefaultFiles();

        app.UseStaticFiles();

        app.MapGet("/health", () => "Server OK");

        app.Run();
    }
}