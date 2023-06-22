import HeroSec from '@/app/components/HeroSec'
import Product_Slider from '@/app/components/ProductSlider' 
import Promotion from '@/app/components/Promotion'
import Image from 'next/image'
import ProContent from '@/app/components/ProContent'
import Newsletter from '@/app/components/Newsletter'
import ProductSlider from '@/app/components/ProductSlider'


export default function Home() {
  return (
    <main className="bg-[#ffff]  w-full">
      <HeroSec />
      <Promotion />
      
      <ProductSlider />
      
      <div className='pt-32'>
      <ProContent />
      </div>
      <div className='pt-32'>
        <Newsletter />
      </div>
    </main>
  )
}
