
import {useState} from 'react'
import Items from './Items';
export default function PackingList(
  {item,
    deleteitem,
    toggleItem,
    clearList}
  )
{
  const [sortBy,setSortBy]=useState('input')
  let sortedItems;
  if (sortBy ==="input") sortedItems=item;
  if (sortBy === "description")
  sortedItems = item
    .slice()
    .sort((a, b) => a.description.localeCompare(b.description));
  if(sortBy==="packed"){ 
  sortedItems=item.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
  }
  return(
  <div className="list">
    <ul>
      {sortedItems.map((item)=>
        <Items item={item} key={item.key} deleteitem={deleteitem} toggleItem={toggleItem}/>
      )}
    </ul>
    <div className="actions">
      <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
        <option value='input'>Sort by Input Order</option>
        <option value='description'>Sort by description</option>
        <option value='packed'>Sort by packed Status</option>
      </select>
      <button onClick={clearList}>Clear List</button>
    </div>
  </div>
  )
}
