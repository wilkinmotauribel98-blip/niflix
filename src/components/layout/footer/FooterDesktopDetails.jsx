import { Link } from "react-router-dom"
import { publicUrl } from "@/utils/publicUrl";

export default function FooterDesktopDetails() {
  return (
    <>
        <nav className="flex-1" name="footer-customer-care" aria-label="Customer Care Links">
          <span className='text-zinc-200' aria-label="Customer Care">Customer Care</span>
          <ul>
            <li className='text-zinc-400 hover:text-gray-400' aria-label="Contact Us"><Link to="/contact-us">Contact Us</Link></li>
            <li className='text-zinc-400 hover:text-gray-400' aria-label="Shipping & Delivery"><Link to="/shipping-delivery">Shipping & Delivery</Link></li>
            <li className='text-zinc-400 hover:text-gray-400' aria-label="Returns & Refunds"><Link to="/returns-refunds">Returns & Refunds</Link></li>
            <li className='text-zinc-400 hover:text-gray-400' aria-label="FAQs"><Link to="/faqs">FAQs</Link></li>
          </ul>
        </nav>
        <nav className="flex-1" name="footer-company" aria-label="Company Links">
          <span className='text-zinc-200' aria-label="Company">Company</span>
          <ul>
            <li className='text-zinc-400 hover:text-gray-400' aria-label="About us"><Link to="/about">About us</Link></li>
            <li className='text-zinc-400 hover:text-gray-400' aria-label="Careers"><Link to="/careers">Careers</Link></li>
            <li className='text-zinc-400 hover:text-gray-400' aria-label="Press"><Link to="/press">Press</Link></li>
            <li className='text-zinc-400 hover:text-gray-400' aria-label="Sustainability"><Link to="/sustainability">Sustainability</Link></li>
          </ul>
        </nav>

        <nav className="flex-1 " name="footer-social" aria-label="Social Media Links">
          <h3 className='text-zinc-200' aria-label="Follow us">Follow us</h3>
          <ul className='flex gap-4 mt-2' aria-label="Social Media Links">
            <li className='text-zinc-400' aria-label="Instagram">
              <svg  aria-hidden="true" className="border cursor-pointer w-10 h-10 p-2 border-zinc-800 rounded-full">
                <use href={publicUrl('sprite-extra.svg#icon-instagram')}></use>
              </svg>   
            </li>
            <li className='text-zinc-400' aria-label="YouTube">
              <svg className="w-10 h-10 p-2 border border-zinc-800 rounded-full text-zinc-400 hover:text-gray-400 cursor-pointer">
                <use href={publicUrl('sprite-extra.svg#icon-youtube')}></use>
              </svg>
            </li>
            <li className='text-zinc-400' aria-label="Twitter">
              <svg className="w-10 h-10 p-2 text-zinc-400 border border-zinc-800 rounded-full hover:text-gray-400 cursor-pointer">
                <use href={publicUrl('sprite-extra.svg#icon-twitter')}></use>
              </svg>
            </li>
            <li className='text-zinc-400' aria-label="Facebook">
              <svg className="w-10 h-10 p-2 border border-zinc-800 rounded-full  text-zinc-400 hover:text-gray-400 cursor-pointer">
                <use href={publicUrl('sprite-extra.svg#icon-facebook')}></use>
              </svg>    
            </li>
          </ul>
        </nav>
    </>
  )

}





