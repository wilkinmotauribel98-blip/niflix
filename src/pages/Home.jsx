import  { useProducts } from "@/hooks/useProducts"
import { useEffect } from "react"
import { preload } from "react-dom";
import  HeroSection  from "@/sections/HeroSection"
import NewArrivalsSection from "@/sections/NewArrivalsSection";
import ShopByCategorySection from '@/sections/ShopByCategorySection'
import BestSellersSection from "@/sections/BestSellersSection"
import WhyChooseUsSection from "@/sections/WhyChooseUsSection"
import NewsletterSection from "@/sections/NewsletterSection";
import CategorySection from "@/sections/CategorySection"

export default function Home() {
  preload('https://wsrv.nl/?url=https%3A%2F%2Fcdn.dummyjson.com%2Fproduct-images%2Fsports-accessories%2Fbasketball%2F1.webp&w=280&h=280&fit=cover&q=80', {
    as: 'image',
    fetchPriority: 'high',
  })
  const fetchProducts = useProducts((state)=> state.fetchHomeProducts);
  useEffect(()=>{
    fetchProducts()
  },[])
  

  return (
    <main className="max-w-360 m-auto z-0 bg-black overflow-hidden  w-dvw" aria-label="Home Page Main Content">
        <HeroSection />
        <CategorySection />
        <NewArrivalsSection />
        <ShopByCategorySection />
        <BestSellersSection />
        <WhyChooseUsSection />
        <NewsletterSection />
    </main>
  )
}





