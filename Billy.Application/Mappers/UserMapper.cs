using System;
using System.Collections.Generic;
using System.Text;
using Billy.Application.Resources;
using Billy.Domain.Models;

namespace Billy.Application.Mappers
{
    public static class UserMapper
    {
        public static UserResource ToResource(this User user)
        {
            var resource = user.ToResourceWithoutRelations();
            foreach (var bill in user.Bills)
            {
                resource.Bills.Add(bill.ToResourceWithoutRelations());
            }
            return resource;
        }

        public static UserResource ToResourceWithoutRelations(this User user)
        {
            return new UserResource
            {
                UserName = user.UserName,
                Email = user.Email,
            };
        }
    }
}
