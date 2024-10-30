import React from 'react'

const Pagination = ({pageNumber, paginate, next, prev,currentPage}) => {
  return (
    <>
    

<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-sm">
    <li onClick={prev}>
      <a href="#" className="flex items-center justify-center lg:px-3 px-1 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>

    {pageNumber.map((item,i)=>
    <li onClick={() => paginate(item) }>
   <a
                className={`${
                  currentPage == i + 1
                    ? "flex items-center justify-center lg:px-3 px-2 h-8 leading-tight text-[#fff] bg-[#262626] border border-gray-300"
                    : "flex items-center justify-center lg:px-3 px-2 h-8 leading-tight text-gray-500 bg-[#fff] border border-gray-300 "
                }`}
              >{item +1}</a>
    </li>
    )}
    
      
   <li onClick={next}>
      <a href="#" className="flex items-center justify-center lg:px-3 px-1 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

    </>
  )
}

export default Pagination