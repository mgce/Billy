using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.PlatformAbstractions;
using Xunit;

namespace Billy.IntegrationTests.Controllers
{
    public class BillsControllerTests : IDisposable
    {
        private readonly TestServer _server;
        private readonly HttpClient _client;

        public BillsControllerTests()
        {
            var integrationTestsPath = PlatformServices.Default.Application.ApplicationBasePath;
            var applicationPath = Path.GetFullPath(Path.Combine(integrationTestsPath, "../../../../Billy.Web"));

            _server = new TestServer(WebHost.CreateDefaultBuilder()
                .UseContentRoot(applicationPath)
                .UseStartup<TestStartup>().ConfigureAppConfiguration(
                (webHostBuilderContext, configurationBuilder) =>
                {
                    configurationBuilder
                        .AddJsonFile("Secrets.json", optional: true);
                    configurationBuilder.AddEnvironmentVariables();
                })
                .UseEnvironment("Development"));

            _client = _server.CreateClient();
        }
        [Fact]
        public async Task BillService_ShouldGetAllBills()
        {
            var response = await _client.GetAsync("api/bills");

            var responseString = await response.Content.ReadAsStringAsync();
            Assert.Contains("Bill1", responseString);
        }
        [Fact]
        public async Task BillService_ShouldGetFirstBill()
        {
            var response = await _client.GetAsync("api/bills/1");

            var responseString = await response.Content.ReadAsStringAsync();
            Assert.Contains("Bill1", responseString);
        }

        public void Dispose()
        {
            _server.Dispose();
            _client.Dispose();
        }
    }
}
