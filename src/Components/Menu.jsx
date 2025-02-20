import React from 'react'

export default function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [Category, setCategory] = useState('All');

    useEffect(()=>{},[])

    const handleFilter = ()=>{
      if(Category === 'All'){
        setFilteredItems(menuItems);
      }else{
        setFilteredItems(menuItems.filter((item)=>item.Category === Category))
      }
    }
  return (
    <div>Menu</div>
  )
}
