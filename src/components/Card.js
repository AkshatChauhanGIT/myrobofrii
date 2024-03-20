import React from 'react'

export default function Card({id,name,email}) {
  return (
    <div className ="tc bg-light-green dib br3 pd3 ma3 grow bw2 shadow-5">
      <img alt="img" src= {`https://robohash.org/${id}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
