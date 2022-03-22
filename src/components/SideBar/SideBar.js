import React from 'react'
import './SideBar.css'
function SideBar({handleData,tabItems,tabValue}) {
  let handleSelected = (data) => {
    handleData(data);
  }
  return (
    <div className="sidebar-body">
{
  tabItems.map((elem,index)=>{
    return(
<div onClick={()=>handleSelected(elem)} style={{backgroundColor:tabValue==index?'#F4AC45':'inherit',minHeight:'40px',display:'flex',alignItems:'center',justifyContent:'center'}}>
{elem.label}
</div>
    )
  })
}
        </div>
  )
}

export default SideBar