import React from 'react'
import Image from 'next/image'
import mix from '/public/mix.png'


function PopularBrands() {
  return (
    <main>
    <div className='justify-center text-center  font-bold text-blue-600 text-4xl'>
      <span className='font-mono text-green-500'>Popular</span> Brands
    </div>
    <div className='flex gap-10 p-20'>
      <Image 
      src={mix}
      alt='g'
      width={1200}
      height={170}
      />
    </div>
    </main>
  )
}

export default PopularBrands
