export default function Items({item,deleteitem,toggleItem})
{
  return(
  <li>
  <input type="checkbox" 
  value={item.packed} 
  onChange={()=>toggleItem(item.id)} 
  />
    <span
     style={item.packed ? {textDecoration:"line-through"}:{}}>
     {item.quantity} {item.description}
    </span>
    <button onClick={()=>deleteitem(item.id)}>❌</button>
  </li>)
}