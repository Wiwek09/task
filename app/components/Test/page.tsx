"use client"
import { Fragment, useState } from 'react'
import data from '../../lib/dummy-data'
import Modal from '../Dailogue-Box/Modal'


const page = ({id} : { id: number}) => {

  const [showModal, setShowModal] = useState(false);
  const [modelid, setModelId] = useState();
  
  return (
    <Fragment>
    <div className='w-[30%] flex min-h-24 ' >
        <div className=' bg-[#FFFFFF]  border  rounded-md  ' >
            <div className='bg-[#FCF4E9] flex-1  p-2  ' >
               <div>
                {data.map((el : any) => 
                  id === el.id &&
                  <h1 className='ml-3' >{el.service}</h1>
                )}
               </div>
            </div>
            
            <div className='p-5 flex-1 mb-3 ' >
            {data.map((el : any) => 
            id === el.id &&
            (el.includes ? 
              <div>
                {el.includes.slice(0, 4).map((item : any,index : number) => 
                <p className='flex space-x-2 ' >
                 <span>{index + 1 + "." }  </span>
                 <span>{item}</span>
                </p>
                 )
                 }
              </div> :
              <p>{el.description.length > 205 ? `${el.description.slice(0, 205)}...` : el.description}</p>
            ) 
             )}
            </div>

            <div className='flex-1 p-2 justify-start  ' >
              <button className='p-2 border border-[#54545433] rounded-lg ' onClick={() => setShowModal(true) } >
                <span>View Details</span>
              </button>
            </div>
        </div>
    </div>
    <Modal id={data[0].id} isVisible={showModal} onClose={() => setShowModal(false)} />
  </Fragment>
  )
}

export default page