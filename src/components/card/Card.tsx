import React, { useContext } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../Products.types'
import { cartContext } from '../../context/cartContext'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

function Card({id,title,image,price,rating}:Product) {

  const context = useContext(cartContext)
  const navigate = useNavigate()

  const addToBasketHandle = () => {
    context.addProduct(id)
    swal({
      title:'محصول مورد نظر به سبد خرید اضافه شد',
      icon:'success',
      buttons:['اوکی','رفتن به سبد خرید'],
    }).then((result)=>{
      console.log(result);

      if(result){
        navigate('/cart')
      }
      
    })
  }
  return (
    <>
    <div className="card">
          <img
            src={image}
            alt=""
          />
          <main>
            <p>{title.slice(0,13)}...</p>
            <div className="card-details">
              <div>

                {
                    Array(Math.ceil(rating.rate)).fill(0).map((item)=> <AiFillStar style={{color:'orange'}}/>)
                }
                 {
                    Array(5-Math.ceil(rating.rate)).fill(0).map((item)=> <AiOutlineStar style={{color:'orange'}}/>)
                }
                
              </div>
              <p>{price}</p>
            </div>
            <button onClick={addToBasketHandle}>Add to Basket</button>
          </main>
        </div></>
  )
}

export default Card