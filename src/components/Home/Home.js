import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Home() {
    const history = useHistory();
  useEffect(() =>{
history.push({
  pathname:`/Items`,
})
  },[])
  return (
    <div></div>
  )
}

export default Home