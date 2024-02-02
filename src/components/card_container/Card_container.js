import React from 'react'
import "./Card_container.css"

const Card_container = ({img,name,new_price,old_price}) => {
  return (
    <>
      <div class="card" >
          <img src={img} class="card-img-top" alt="..."/>
         <div class="card_contain">
             <h5 class="card-title">{name}</h5>
             <div>
               <p class="card_text trending_cards">{old_price}</p>
               <p class="card_text" > {new_price}</p>
            </div>
              <a href="#" class="btn" >Buy now</a>

             <a href="#" class="btn">Add to cart</a>
         </div>
      </div>
    </>
  )
}

export default Card_container