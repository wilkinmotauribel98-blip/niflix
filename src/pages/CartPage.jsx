import BreadCrumbSection from "@/sections/BreadCrumbSection"
import CartHeader from "@/components/cart/CartHeader"
import CartItems from "@/components/cart/CartItems"
import YouMayAlsoLikeSection from "@/sections/YouMayAlsoLikeSection"
import { useEffect } from "react"
import { setTitle } from "@/utils/setTitle"
export default function CartPage() {
  useEffect(()=>{
    setTitle('Cart')
    return ()=> setTitle()
  },[])

  return (
    <main className="m-auto z-0 bg-black overflow-x-hidden max-w-360 w-[95%] " aria-label="Cart Page Main Content">
      <BreadCrumbSection cart={true} title={'Cart'}/>
      <CartHeader />
      <CartItems />
      <YouMayAlsoLikeSection />
    </main>
  )
}
