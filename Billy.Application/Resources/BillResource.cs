using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.Infrastructure.Link;
using Billy.SharedKernel.Enums;
using Newtonsoft.Json;

namespace Billy.Application.Resources
{
    public class BillResource : Resource
    {
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("paymentDate")]
        public DateTime PaymentDate { get; set; }
        [JsonProperty("paymentStatus")]
        public PaymentStatus PaymentStatus { get; set; }

        [JsonProperty("supplier", NullValueHandling = NullValueHandling.Ignore)]
        public SupplierResource Supplier { get; set; }
        [JsonProperty("category", NullValueHandling = NullValueHandling.Ignore)]
        public CategoryResource Category { get; set; }
        [JsonProperty("amount", NullValueHandling = NullValueHandling.Ignore)]
        public AmountResource Amount { get; set; }
        [JsonProperty("user", NullValueHandling = NullValueHandling.Ignore)]
        public UserResource User { get; set; }
    }
}
