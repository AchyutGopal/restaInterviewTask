import React from 'react'
import './TopBar.css'

function TopBar({handleSearch}) {
  return (
    <div className="topBody d-flex justify-content-center row">
      <div className="col-4"></div>
      <div class="topnav">
  <input type="text" placeholder="Search.." onClick={(e)=>handleSearch(e.target.value)}/>
</div>
<div className="col-3"></div>
    </div>
  )
}

export default TopBar