import ShopHeroSection from "@/components/shop/ShopHeroSection";
import RenderAllProducts from "@/components/shop/RenderAllProducts";
import { useEffect } from "react";
import { setTitle } from "../utils/setTitle";
export default function ShopPage() {
  useEffect(()=>{
    setTitle('Shop')
    return ()=> setTitle()
  })

  return(
    <main className="mb-10 max-w-400 m-auto" >
      <ShopHeroSection />
      <RenderAllProducts />
    </main>
  )
}