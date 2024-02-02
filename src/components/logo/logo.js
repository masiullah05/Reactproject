import React from 'react'
import l1 from "../Assets/puma.webp"
import l2 from "../Assets/nike.webp"
import l3 from "../Assets/addidas.webp"
import l4 from "../Assets/biba.webp"
import l5 from "../Assets/zara.webp"
import "./logo.css"

const Logo= () => {
  return (
    <>
      <div className='logo_para'>
      <p>
         <span>Explore</span> the Brand
      </p>
      </div>
      <div className='logo'>
            
            <div className='logo_brand'>
                <img src={l1} alt='fashion' height={150}/>
            </div>
            <div className='logo_brand'>
                <img src={l2} alt='fashion' height={150}/>
           </div>
           <div className='logo_brand'>
              <img src={l3} alt='fashion' height={150}/>
           </div>  
           <div className='logo_brand'>
               <img src={l4} alt='fashion' height={150}/>
          </div>  
          <div className='logo_brand'>
              <img src={l5} alt='fashion' height={150}/>
          </div>
      </div>
    </>
  )
}

export default Logo