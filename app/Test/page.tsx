"use client"
import { Fragment, useEffect, useState } from 'react';
import data from '../lib/dummy-data';
import Modal from '../components/Dailogue-Box/Modal';


const Test = ({id} : any) => {

  const [showModal, setShowModal] = useState(false);
  const [modelid, setModelId] = useState<number | string>();

  const handleClick = (modelid: number | string) => {
    setShowModal(true);
    setModelId(modelid);
    console.log(modelid)
  }

  return (
    <Fragment>
    <div className='w-[30%] flex min-h-24 ' >
        <div className=' bg-[#FFFFFF]  border  rounded-md  ' >
            <div className='bg-[#FCF4E9] flex-1  p-2  ' >
               <div>
                {data.map((el : any) => 
                  id === el.id &&
                  <h1 key={el.id} className='ml-3' >{el.service}</h1>
                )}
               </div>
            </div>
            
            <div className='p-5 flex-1 mb-3 ' >
            {data.map((el : any) => 
            id === el.id &&
            (el.includes ? 
              <div key={el.id} >
                {el.includes.slice(0, 4).map((item : any,index : number) => 
                <p key={index} className='flex space-x-2 ' >
                 <span>{index + 1 + "." }  </span>
                 <span>{item}</span>
                </p>
                 )
                 }
              </div> :
              <p key={el.id} >{el.description.length > 205 ? `${el.description.slice(0, 205)}...` : el.description}</p>
            ) 
             )}
            </div>

            <div className='flex-1 p-2 justify-start  ' >
              {data.map((el: any) => 
              id === el.id &&
              <button key={el.id} className='p-2 border border-[#54545433] rounded-lg ' onClick={() => handleClick(el.id)}  >
                <span>View Details</span>
              </button>
              )}
            </div>
        </div>
    </div>
    <Modal id={modelid} isVisible={showModal} onClose={() => setShowModal(false)} />
  </Fragment>
  )
}

export default Test