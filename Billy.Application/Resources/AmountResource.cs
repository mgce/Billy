using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.SharedKernel.Enums;
using Newtonsoft.Json;

namespace Billy.Application.Resources
{
    public class AmountResource
    {
        [JsonProperty("value")]
        public decimal Value { get; set; }
        [JsonProperty("currency")]
        public Currency Currency { get; set; }
        [JsonProperty("bill", NullValueHandling = NullValueHandling.Ignore)]
        public BillResource Bill { get; set; }
    }
}
