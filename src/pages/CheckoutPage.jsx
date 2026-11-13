import CheckoutSteps from "@/components/checkout/CheckoutSteps"
import { Outlet } from "react-router-dom"
import { useCheckout } from "@/hooks/useCheckout"
import { useEffect } from "react"
import { setTitle } from "@/utils/setTitle"

export default function CheckoutPage() {
  useEffect(()=>{
   return () => {
      useCheckout.getState().restartAll();
    }
  }, [])

  useEffect(()=>{
      setTitle('Checkout')
      return ()=> setTitle()
    },[] )
  return (
    <main className="items-center max-w-4xl mb-20 m-auto gap-10 justify-center flex flex-col mt-10 z-0 bg-black overflow-hidden  w-[95%]" aria-label="Checkout Page Main Content">
              <CheckoutSteps />
              <Outlet />
        </main>
    
  )
}
