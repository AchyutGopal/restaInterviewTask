import React from 'react'
import Menu from '../../config/menu.json'
import {useHistory} from 'react-router-dom'

function Items({items,handleItemClick}) {
  return (
    <div className="row ">
        {items.map((ele,index)=>{
return(
    <div className="col-md-2 p-1 " onClick={()=>handleItemClick(ele)}>
       <div class="card" style={{height:'10rem',width: "7.5rem",backgroundColor:ele.outofstock?'red':'green',overflow: 'hidden',borderRadius:'12px',color:'white'}}>
  <div class="card-body d-flex align-items-center">
    <span class="card-title"><strong>{ele.foodname}</strong></span>

  </div>
</div>
    </div>
)
        })}
    </div>
  )
}

export default Items