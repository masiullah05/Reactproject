import React from 'react'
import Card_container from '../card_container/Card_container'
import Datamen from '../Datas/Datamen'
import "./Men.css"
import Logo from '../logo/logo'

const Mens = () => {
  return (
    <>
    <p className="b">
        Mens Collection
    </p>

    <div className='a'>
        
       {
        Datamen.map((product,index) => (
          <Card_container key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price} />
        ))
      }
    </div>
    <Logo/>
    
    </>
  )
}

export default Mens