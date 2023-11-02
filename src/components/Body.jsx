import { useState } from "react";
import {restaurantList} from "../contants"
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants){
  const filterData = restaurants.filter((restaurant)=>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}


const Body = () => {

  const [restaurants, setrestaurants] = useState(restaurantList)
  const [searchText, setSearchText] = useState("")
  
  return (
    <>
    <div className="search-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchText} 
        onChange={(e)=>{
        setSearchText(e.target.value)

        if(e.target.value.length == 0){
            setrestaurants(restaurantList)
        }}
        }>
          
      </input>

      <button
        onClick={()=>{
          
          const data = filterData(searchText, restaurants);
          setrestaurants(data);
        }}
      >
      Search</button>
    </div>
    
    
    
    <div className="restaurant-list">
      {restaurants.map((restaurant)=>{
        return (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        );
      })}
    </div>
    </>
  )
}

export default Body