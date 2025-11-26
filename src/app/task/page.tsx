import React from 'react'

function page() {
  return (
    <div>
        <div className='flex justify-between pt-[10px]'>
            <h1 className='text-2xl font-bold text-blue-600'>Task</h1>
            <button className='bg-blue-600 px-3 py-2 text-white rounded-lg font-bold'>New Task</button>
        </div>

        <div className='flex gap-3'>

            <div className='border border-black rounded-lg py-5 px-4 '>
                <p className='text-md font-bold'>All Tasks</p>
            </div>

              <div className='border border-black rounded-lg py-5 px-4 '>
                <p className='text-md font-bold'>All Tasks</p>
            </div>

        </div>
    </div>
  )
}

export default page