import {useState} from "react"
export default function Form(props)
{ 
  const [quantity,setQuantity]=useState(1)
  const [description,setDescription]=useState("")

  function HandleSubmit(e){
  e.preventDefault();
  if(!description) return;
  const newItems={description,quantity,packed:false,id:Date.now()}
  props.addItems(newItems)
  setDescription('')
  setQuantity(1)
}
 
  return(
  <form className="add-form" onSubmit={HandleSubmit}>
  <h3>What do you need for your 😍 trip</h3>
  <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
  {
    Array.from({length:20},(_,i)=>i+1).map((value)=>
    <option value={value} key={value}>{value}</option>
  )
  }
  </select>
  <input type="text"
   placeholder="Item..."
    value={description}
    onChange={(e)=>setDescription(e.target.value)}
   />
  <button>Add</button>
  </form>)
}