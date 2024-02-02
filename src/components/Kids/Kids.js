import React from 'react'
import Card_container from '../card_container/Card_container'
import Datakids from "../Datas/Datakids"
import Logo from '../logo/logo'
import { LocalAirportRounded } from '@mui/icons-material'

const Kids = () => {
  return (
    <>
      <p className="b">
        Kids Collection
      </p>

      <div className='a'>
          
        {
          Datakids.map((product,index) => (
            <Card_container key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price} />
          ))
        }
      </div>
      <Logo/>
    </>
  )
}

export default Kids