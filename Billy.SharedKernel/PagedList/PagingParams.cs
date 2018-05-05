using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.SharedKernel.PagedList
{
    public class PagingParams
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 5;
    }
}
