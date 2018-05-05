using System.ComponentModel;
using Newtonsoft.Json;

namespace Billy.Infrastructure.Link
{
    public class Link
    {
        public const string GetMethod = "GET";

        public static Link To(string routeName, object routeValue) => new Link
        {
            RouteName = routeName,
            RouteValues = routeValue,
            Method = GetMethod,
            Relations = null
        };  

        [JsonProperty(Order = -4)]
        public string Href { get; set; }

        [JsonProperty(Order = -4, NullValueHandling = NullValueHandling.Ignore, DefaultValueHandling = DefaultValueHandling.Ignore)]
        [DefaultValue(GetMethod)]
        public string Method { get; set; }

        [JsonProperty(Order = -4, PropertyName = "rel", NullValueHandling = NullValueHandling.Ignore, DefaultValueHandling = DefaultValueHandling.Ignore)]
        [DefaultValue("GET")]
        public string[] Relations { get; set; }

        [JsonIgnore]
        public string RouteName { get; set; }
        [JsonIgnore]
        public object RouteValues { get; set; }
    }
}
