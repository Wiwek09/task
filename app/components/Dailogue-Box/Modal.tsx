import React from 'react'
import data from '@/app/lib/dummy-data'
import Link from 'next/link'

const Modal = ({id, isVisible, onClose }: {id : number; isVisible : boolean ; onClose: () => void }) => {

  if(!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ' >

        <div className='flex flex-col w-[50%]' >
          <button className='text-white text-xl  place-self-end ' onClick={() => onClose()} >X</button>

          <div className=' bg-slate-300 rounded-md flex flex-col gap-4 ' >
          <div className='bg-[#c7cbd1] p-2' >
          {data.map((el : any) => 
            id === el.id &&
            <h1 className='ml-3' >{el.service}</h1>
           )}
          </div>
        
           <div className='p-2' >
           {data.map((el : any) => 
               id === el.id &&
               <h1 className='ml-3' >{el.description}</h1>
           )}
           </div>

        
           {data.map((el : any) => 
               id === el.id && el.includes !== null ?(
               <div className='p-2' >
                <h1 className='ml-3' >{el.includes}</h1>
              </div>
               ) : null 
           )}

           <div className='p-2 ml-3' >
            <Link href={""} >Link to :</Link>
           </div>

          </div>
        </div>
    </div>
  )
}

export default Modal