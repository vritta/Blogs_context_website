import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, totalPages, handlePageChange} = useContext(AppContext);

  return (
    <div className='flex justify-center items-center w-full border fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        {page===1?(
          <button onClick={()=>handlePageChange(page+1)} className='rounded-md border-2 px-4 py-1'>
            Next
          </button>
        ):(page !== totalPages?(
          <div className='flex  gap-x-2'>
            <button onClick={()=>handlePageChange(page-1)} className='rounded-md border-2 px-4 py-1'>
              Previous
            </button>
            <button onClick={()=>handlePageChange(page+1)} className='rounded-md border-2 px-4 py-1'>
              Next
            </button>
          </div>
        ) : (
          <button onClick={()=>handlePageChange(page-1)} className='rounded-md border-2 px-4 py-1'>
          Previous
          </button>
        ))}
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
