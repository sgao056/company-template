import React from 'react'

function createNFT() {
  const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    a.map((item)=>{
      return <div key={item}>{item}</div>
    })
  )
}

export default createNFT