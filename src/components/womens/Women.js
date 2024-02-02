import React from 'react'
import Datawomen from "../Datas/Datawomen"
import Card_container from '../card_container/Card_container'
import Logo from '../logo/logo'

const Women = () => {
  return (
    <>
        <p className="b">
        Women Collection
    </p>

    <div className='a'>
        
       {
        Datawomen.map((product,index) => (
          <Card_container key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price} />
        ))
      }
    </div>
    <Logo/>
    </>
  )
}

export default Women