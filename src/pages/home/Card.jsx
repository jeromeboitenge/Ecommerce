import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({filteredItems}) => {
  return (
    <div>
      {  filteredItems.map((items)=>(
           <div key={items.id}>
<Link to={`/shop/${items.id}`}>
<img src={items.image} alt="" />

</Link>

           </div> )
        )}
        
    </div>
  )
}

export default Card