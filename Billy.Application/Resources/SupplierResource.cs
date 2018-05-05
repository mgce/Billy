using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.Infrastructure.Link;
using Newtonsoft.Json;

namespace Billy.Application.Resources
{
    public class SupplierResource : Resource
    {
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("bills", NullValueHandling = NullValueHandling.Ignore)]
        public IList<BillResource> Bills { get; set; }
        [JsonProperty("user", NullValueHandling = NullValueHandling.Ignore)]
        public UserResource User { get; set; }
    }
}
