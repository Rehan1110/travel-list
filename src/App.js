import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App()
{
  const [item,setItem]=useState([])

  function handleItems(item)
  { 
    setItem((items)=>[...items, item])
  }
  function ClearList()
  {
    const confirmed=window.confirm("Are you sure ? You want to delete the List")
    if(confirmed)setItem([])
  }
  function DeleteItems(id)
  {
    setItem((items)=>items.filter(item=>item.id !== id))
  }
  function ToggleItems(id)
  {
    setItem((items) => 
    items.map((item) => 
    item.id === id ? {...item,packed:!item.packed}:item
    ))
  }
 
  return(<div className="app">
  <Logo/>
  <Form addItems={handleItems}/>
  <PackingList item={item} deleteitem={DeleteItems} toggleItem={ToggleItems} clearList={ClearList}/>
  <Stats item={item}/>
  </div>)
}

