import SupportHeader from "@/components/support/SupportHeader"
import SupportContent from "@/components/support/SupportContent"
import { useEffect } from "react"
import { setTitle } from "../utils/setTitle"
export default function SupportPage(){
  useEffect(()=>{
      setTitle('Support')
      return ()=> setTitle()
    },[] )
  
  return(
    <main className="max-w-360 m-auto mb-20 w-[95%] ">
      <SupportHeader />
      <SupportContent />
    </main>
  )
}