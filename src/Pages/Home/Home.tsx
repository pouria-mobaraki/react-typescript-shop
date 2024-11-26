import React, { useContext } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { cartContext } from '../../context/cartContext'
import Card from '../../components/card/card'

function Home() {

  const context = useContext(cartContext) 

  return (
    <>
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        {context.shop.map(product => <Card key={product.id} {...product}/>)}
      </main>
    </>
  )
}

export default Home