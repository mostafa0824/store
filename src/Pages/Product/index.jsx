import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loding'
import Notify from '../../Utils/Notify'
import ProductCard from './ProductCard'
import Slider from '../../components/Slider'

export default function Product() {
  const [products,setProducts]=useState()
  useEffect(()=>{
    (async()=>{
      try {
        const res=await fetch('https://fakestoreapi.com/products',{
          method:'GET',
          headers:{
            'Cotect-Type':'aplication.json'
          }
        })
        const data=await res.json()
        Notify('success','Home page')
        setProducts(data)
      } catch (error) {
        console.log(error)
        Notify('error','not found')
      }
    })()
  },[])
  const items=products?.map((pr)=>(
    <ProductCard
    key={pr.id}
    id={pr.id}
    image={pr.image}
    title={pr.title}
    price={pr.price}
    rating={pr.rating.rate}
    />
  ))
  if(!products) return <Loading/>
  return (
    <div className='my-3 px-[3%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     lg:grid-cols-4 gap-4'>
      {items}
    </div>
  )
}
