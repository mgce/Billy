using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Newtonsoft.Json;

namespace Billy.Application.Resources
{
    public class UserResource : Resource
    {
        [JsonProperty("username")]
        public string UserName { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("bills", NullValueHandling = NullValueHandling.Ignore)]
        public ICollection<BillResource> Bills { get; set; }
        [JsonProperty("categories", NullValueHandling = NullValueHandling.Ignore)]
        public ICollection<CategoryResource> Categories { get; set; }
        [JsonProperty("suppliers", NullValueHandling = NullValueHandling.Ignore)]
        public ICollection<SupplierResource> Suppliers { get; set; }
    }
}
