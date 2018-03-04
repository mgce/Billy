using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Billy.Web;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.PlatformAbstractions;
using Xunit;

namespace Billy.IntegrationTests.Services
{
    public class BillServiceTests : IDisposable
    {
        private readonly TestServer _server;
        private readonly HttpClient _client;

        public BillServiceTests()
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
        public async Task BillService_ShouldAddBillToDatabase()
        {
            var response = await _client.GetAsync("api/values");

            var responseString = await response.Content.ReadAsStringAsync();
            Assert.Contains("value", responseString);
        }

        public void Dispose()
        {
            _server.Dispose();
            _client.Dispose();
        }
    }
}
