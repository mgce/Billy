using System.Threading.Tasks;
using Billy.Domain.Models;

namespace Billy.Application.Identity
{
    public interface IJwtGenerator
    {
        Task<object> Create(User user);
    }
}