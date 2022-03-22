import React from 'react'
import './Bottom.css'

function Bottom({handleClick}) {
  return (
    <div className="container-fluid">
        <div className="row mx-2">
       <button type="button" className="btn  btn-lg col mx-1 button-style" onClick={()=>handleClick(0)}>All Unavailable</button>
       <button type="button" className="btn  btn-lg col mx-1 button-style" onClick={()=>handleClick(1)}>All Available</button>
       <button type="button" className="btn  btn-lg col mx-1 button-style" onClick={()=>handleClick(2)}>Apply</button>
       </div>
    </div>
  )
}

export default Bottom