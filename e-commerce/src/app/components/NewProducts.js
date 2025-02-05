import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
    {
      img:'/jacket-1.jpg',
      title: 'Jacket',
      desc: "MEN Yarn Fleece Full-Zip Jacket",
      rating: 4,
      price: "45.00",
    },
    {
      img:'/skirt-1.jpg',
      title: 'Skirt',
      desc: "Black Floral Wrap Midi Skirt",
      rating: 5,
      price: "55.00",
    },
    {
      img:'/party-wear-1.jpg',
      title: 'Party Wear',
      desc: "Women's Party Wear Shoes",
      rating: 3,
      price: "25.00",
    },
    {
      img:'/shirt-1.jpg',
      title: 'Jacket',
      desc: "MEN Yarn Fleece Full-Zip Jacket",
      rating: 4,
      price: "45.00",
    },
    {
      img:'/sports-1.jpg',
      title: 'Sports',
      desc: "Trekking & Running Shoes - Black",
      rating: 3,
      price: "58.00",
    },
    {
      img:'/watch-1.jpg',
      title: 'watches',
      desc: "Smart Watches Vital Plus",
      rating: 4,
      price: "100.00",
    },
    {
      img:'/jacket-2.jpg',
      title: 'Jacket',
      desc: "Pocket Watch Leather Pouch",
      rating: 4,
      price: "120.00",
    }
]

const NewProducts = () => {
  return (
    <div>
        <div>
            <h2>NewProducts</h2>

            <div>
                {
                  productsData.map((item,index)=>{
                      return (
                        <ProductCard 
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                        />
                      )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default NewProducts;