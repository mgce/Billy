using System;
using System.Collections.Generic;
using System.Text;
using Billy.SharedKernel.PagedList;

namespace Billy.Application.Services.BillService.Dtos
{
    public class GetAllBillsDto : PagingParams
    {
        public string UserId { get; set; }
    }
}
