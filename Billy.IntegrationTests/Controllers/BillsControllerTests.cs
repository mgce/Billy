using System;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain.Enums;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.PlatformAbstractions;
using Newtonsoft.Json;
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
        [Fact]
        public async Task BillService_ShouldAddBill()
        {
            var bill = new AddBillDto
            {
                Name = "rquestBill",
                AmountValue = 12,
                CategoryId = 6,
                Currency = Currency.PLN,
                PaymentDate = DateTime.Now.AddDays(2),
                SupplierId = 5
            };

            var content = new StringContent(JsonConvert.SerializeObject(bill), Encoding.UTF8, "application/json");
            var response = await _client.PostAsync("api/bills", content);

            Assert.Contains("200",response.EnsureSuccessStatusCode().ToString());
        }

        [Fact]
        public async Task BillService_ShouldUpdateBill()
        {
            var bill = new UpdateBillDto()
            {
                BillId = 1,
                Name = "rquestBill",
                AmountValue = 12,
                CategoryId = 6,
                Currency = Currency.PLN,
                PaymentDate = DateTime.Now.AddDays(2),
                SupplierId = 5
            };

            var content = new StringContent(JsonConvert.SerializeObject(bill), Encoding.UTF8, "application/json");
            var response = await _client.PutAsync("api/bills", content);

            Assert.Contains("200", response.EnsureSuccessStatusCode().ToString());
        }

        public void Dispose()
        {
            _server.Dispose();
            _client.Dispose();
        }
    }
}
