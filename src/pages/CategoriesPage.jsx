import BreadCrumbSection from "../sections/BreadCrumbSection"
import CategoriesContent from "../components/categories/CategoriesContent"
import { useEffect } from "react"
import { setTitle } from "../utils/setTitle"
export default function CategoriesPage(){
  useEffect(()=>{
      setTitle('Categories')
      return ()=> setTitle()
    })
  return(
    <main className="max-w-360 m-auto mb-30 w-[95%] ">
      <BreadCrumbSection title={'Categories'} cart={true}/>
      <h1 className="text-white text-4xl  my-2">Categories</h1>
      <p className="text-zinc-400">Explore our wide range of products.</p>
      <CategoriesContent/>
    </main>
  )
}