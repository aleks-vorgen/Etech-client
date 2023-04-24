import React, { useState } from 'react'
import axios from 'axios'


export function HomePage() {
  const getDataProducts = () => {
    axios.get('https://etech-5fydkirpga-lm.a.run.app/api/categories')
    .then (res => {
      console.log(res.categories);
    })
    .catch (error => {
      console.log(error);
    });
  }

  return (
    <div>
    Головна
    <button onClick={getDataProducts}> нажми</button>
    </div>
  )
}
