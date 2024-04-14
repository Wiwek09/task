"use client"
import React from 'react'
import data from '@/app/lib/dummy-data'
import Link from 'next/link'

const Modal = ({id, isVisible, onClose }: {id : any; isVisible : boolean ; onClose: () => void }) => {


  const selectedItem = data.find((el) => el.id === id);

  if(!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ' >

        <div className='flex flex-col w-[50%] rounded-md ' >
          <button className='text-white text-xl  place-self-end ' onClick={() => onClose()} >X</button>

          <div className=' bg-slate-300 rounded-md flex flex-col gap-4 ' >
          <div className='bg-[#c7cbd1] p-2' >
            <h1 className='ml-3' >{selectedItem?.service}</h1>
  
          </div>
        
           <div className='p-2' >
               <h1 className='ml-3' >{selectedItem?.description}</h1>
           </div>

           {selectedItem?.includes && (
            <div className="p-2 ml-3">
              {selectedItem.includes.map((item: string, index: number) => (
                <p key={index} className="flex space-x-2">
                  <span>{index + 1 + '.'}</span>
                  <span>{item}</span>
                </p>
              ))}
              </div>
              )}
          </div>
        </div>
    </div>
  );
};

export default Modal