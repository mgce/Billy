using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.Infrastructure.Identity.Models;

namespace Billy.Application.Identity
{
    public interface IJwtGenerator
    {
        Task<JsonWebToken> Create(User user);
    }
}