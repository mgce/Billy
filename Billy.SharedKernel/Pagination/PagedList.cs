using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Billy.SharedKernel.Pagination
{
    public class PagedList<T>
    {
        public int TotalItems { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public List<T> Items { get; set; }
        public int TotalPages { get; set; }


        public PagedList(IQueryable<T> source, int pageNumber, int pageSize)
        {
            TotalItems = source.Count();
            PageNumber = pageNumber;
            PageSize = pageSize;
            Items = source
                .Skip(pageSize * (pageNumber - 1))
                .Take(pageSize)
                .ToList();
        }

        public PagingHeader GetHeader()
        {
            return new PagingHeader(TotalItems, PageNumber, PageSize, TotalPages);
        }
        
    }
}
