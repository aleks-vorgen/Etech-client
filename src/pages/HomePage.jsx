import React from 'react'
import axios from 'axios'


export function HomePage() {
  const getProductData = () => {
    axios.get('https://etech-5fydkirpga-lm.a.run.app/products/all')
        //axios.get('http://localhost:8080/categories/all')
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
      <div style={{margin: '0px 50px'}}>
        <h2>Головна</h2>
        <button
            style={{border: '1px solid black', padding: '5px 10px', marginRight: '5px'}}
            onClick={getProductData}>
          Get Category list log
        </button>
        <button
            style={{border: '1px solid black', padding: '5px 10px', marginLeft: '5px'}}
            onClick={getUserData}>
          Get User list log
        </button>
      </div>
  )
}

export default HomePage