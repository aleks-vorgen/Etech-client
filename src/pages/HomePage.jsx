import React from 'react'
import axios from 'axios'
import Category from '../components/Category/Category';


export function HomePage() {
  const getProductData = () => {
    axios.get('https://etech-5fydkirpga-lm.a.run.app/products/all')
        .then(res => {
          console.log(res.data)
        })
        .catch(error => {
          console.log(error);
        });
  }

  function getUserData() {
    axios.get('https://etech-5fydkirpga-lm.a.run.app/users/all')
        .then(res => {
          console.log(res.data)
        })
        .catch(error => {
          console.log(error)
        })
  }

  return (

      <div className='w-[1110px] mx-auto'>
        <h2>Головна</h2>
        <button
            style={{border: '1px solid black', padding: '5px 10px', marginRight: '5px'}}
            onClick={getProductData}>
          Get Product list log
        </button>
        <button
            style={{border: '1px solid black', padding: '5px 10px', marginLeft: '5px'}}
            onClick={getUserData}>
          Get User list log
        </button>

        <Category />
      </div>
  )
}

export default HomePage