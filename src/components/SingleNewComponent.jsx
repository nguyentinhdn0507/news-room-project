import React from 'react'

export const SingleNewComponent = ({data,index}) => {
  return (
    <div className='flex flex-col px-4'>
        <h3 className='md:text-xl text-base text-slate-700 flex-1 font-bold'>{data.title}</h3>
        <div>
            <div>
                <img src={data.urlToImage} alt={data.title} className={`${index % 2 === 0 ? 'float-right ml-4' : 'float-left mr-4'} h-[200px] w-[200px] object-cover` }/>
                {data.description}
            </div>
            <div className='clear-both'></div>
        </div>
    </div>
  )
}
