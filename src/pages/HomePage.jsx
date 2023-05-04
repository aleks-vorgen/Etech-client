import React from 'react'
import axios from 'axios'


export function HomePage() {
  const getDataProducts = () => {
    axios.get('https://etech-5fydkirpga-lm.a.run.app/categories/all')
    //axios.get('http://localhost:8080/categories/all')
    .then (res => {
      console.log(res.data)
    })
    .catch (error => {
      console.log(error);
    });
  }

  return (
    <div style={{margin: '0px 50px'}}>
    <h2>Головна</h2>
    <button style={{border: '1px solid black', padding: '5px 10px'}} onClick={getDataProducts}> нажми</button>
    </div>
  )
}
