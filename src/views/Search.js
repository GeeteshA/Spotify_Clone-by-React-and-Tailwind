import React from 'react';

export default function Search() {
  return (
    <div>
      <h3 className='text-2xl text-white font-bold tracking-tight mb-4'>Genres you listen to most</h3>
      <div className='grid grid-cols-3 gap-x-5 mb-6' id='genres'>
        <a className='overflow-hidden' href="#" >
          <div className='bg-purplebox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold' id='coll_txt'>Pop</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="	https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe
" />
          </div>
        </a>
        <a className='overflow-hidden' href="#" >
          <div className='bg-orangebox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold' id="coll_txt">Podcast</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa" />
          </div>
        </a>
        <a className='overflow-hidden top-2' href="#" >
          <div className='bg-redbox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold' id="coll_txt">Hindi</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="https://i.scdn.co/image/ab67fb8200005caff5976b97bcf10d98acbae2cd" />
          </div>
        </a>
      </div>

      <div>
      <h3 className='text-2xl text-white font-bold tracking-tight mb-4'>Browse all</h3>
      <div className='grid grid-cols-2 gap-5'>
      {new Array(4).fill(

              <a className='overflow-hidden' href="#" >
                <div className='bg-orangebox h-[220px] rounded-lg p-4 relative'>
                    <span className='text-4xl font-bold'>Party</span>
                    <img className='w-[108px] h-[108px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="	https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c" />
                </div>
              </a>
              
              
              
      )}
      </div>
      </div>
    </div>
  )
}