import React from 'react'
import Hero from '@/components/ui/Hersection'
import Promotions from '@/components/ui/Promotions'
import Footer from '@/components/ui/Footer'
import Newest from '@/components/ui/Newest'
import PopularBrands from '@/components/ui/PopularBrands'
export const dynamic = "force-dynamic";
const page = () => {
  return (
    <div className=' top-9'>
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <PopularBrands />
      <br />
      <br />
      <Newest />
       
    </div>
  )
}

export default page
