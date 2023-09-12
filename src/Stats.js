export default function Stats({item})
{
  if(!item.length)
  return (
   <p className="stats">
    <em>Start Adding some items to yur List 🚀</em>
   </p>
    )
  const numItem=item.length;
  const numPacked=item.filter((item)=>item.packed).length;
  const percentage=Math.round((numPacked/numItem) *100);
  return(
  <footer className="stats">
    <em>{percentage === 100 ? "You have got everything ! Ready to go ✈ ":`You have ${numItem} in your List and you already Packed ${numPacked} (${percentage}%)`}</em>
  </footer>)
}

