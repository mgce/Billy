using System.Threading.Tasks;
using Billy.Infrastructure.Identity.Models;

namespace Billy.Application.Identity
{
    public interface IJwtGenerator
    {
        Task<object> Create(User user);
    }
}