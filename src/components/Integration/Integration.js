import React,{useState,useEffect} from 'react'
import Items from '../Items/Items'
import SideBar from '../SideBar/SideBar'
import Menu from '../../config/menu.json'
import BottomBar from '../BottomBar/Bottom'
import TopBar from '../TopBar/TopBar'

function Integration() {
    const [totalData,setTotalData] = useState(Menu)
    const [tabValue,setTabValue] =useState(0);
    const [tabItems,setTabItems] = useState([]);
    const [items,setItems] = useState([]);
    const handleData = (data) => {
        setTabValue(data.value)
        setItems(data.data)
    }
const handleItemClick = (data) =>{
    if(!data.outofstock){
        setItems([...items.map(ele=>{
            let obj={...ele}
            if(ele.foodid==data.foodid){
                obj.outofstock=true;
            }
            return obj;
        })])
    }
}
    const handleClick = (val) => {
        if(val==0){
            let modifiedItems = tabItems[tabValue].data.filter(ele=>ele.outofstock)
            setItems(modifiedItems)
        }
        else if(val==1){
            let modifiedItems = tabItems[tabValue].data.filter(ele=>!ele.outofstock)
            setItems(modifiedItems)
        }
        else{
            let selectedTab = tabItems.filter(ele=>ele.value==tabValue)[0].label;
            let clonedData = {...totalData};
            let intermediateData = clonedData['menuDetails'][selectedTab]
            clonedData['menuDetails'][selectedTab] =  intermediateData.map(ele=>{
                let obj = {...ele};
                if(!ele.outofstock){
                    let modifiedObj = items.filter(x=>x.foodid==ele.foodid)
                    obj = modifiedObj.length>0 ? {...modifiedObj[0]} :{...ele}
                }
                    return obj;
            }) 
            setTotalData(clonedData)
        }
    }

    const handleSearch = (search) =>{


    }
    useEffect(() =>{
        let tabs = Object.keys(totalData.menuDetails).map((ele,index)=>{
            return{
                label:ele,
                value:index,
                data:totalData['menuDetails'][ele]
            }
        }
        )
        setTabItems(tabs)
        setItems(tabs[tabValue].data)
    },
    [totalData])
    return (
        <div className="container-fluid" style={{padding:'0'}}>
            <TopBar handleSearch={handleSearch}/>
            <div className="row">
            <div className="col-2" style={{padding:'0'}}> 
             { tabItems && tabItems.length>0 &&  <SideBar handleData={handleData} tabItems={tabItems} tabValue={tabValue}/>}
                </div>
           {items && items.length > 0 && <div  className="col-10">
                <Items handleItemClick ={handleItemClick} items={items}/>
            </div>}
            </div>
            <BottomBar handleClick={handleClick}/>
        </div>

    )
}

export default Integration