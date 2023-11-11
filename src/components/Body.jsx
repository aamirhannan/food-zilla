import { useEffect, useState } from "react";
import {restaurantList} from "../contants"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
  const filterData = restaurants.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}


const Body = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    getRestaurants();
  }, []);

  // console.log(setfilteredRestaurants);
  async function getRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
);
      const json = await data.json();

      console.log(json);

      // Check if the data structure is as expected
      const fetchedRestaurants = json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants || [];
      console.log(fetchedRestaurants);

      setAllRestaurants(fetchedRestaurants);
      setfilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching restaurant data in :", error);
    }
  }

  if(!allRestaurants) return null;
  

  return allRestaurants?.length === 0 ? (<Shimmer/>) : ( 
    <>
    <div className="search-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchText} 
        onChange={(e)=>{
        setSearchText(e.target.value)

        const data = filterData(searchText, allRestaurants);
        setfilteredRestaurants(data);
       

        if(e.target.value.length == 0){
            setfilteredRestaurants(allRestaurants);
        }
      }
        }>
          
      </input>

      <button className="search-btn"
        onClick={()=>{
          
          const data = filterData(searchText, allRestaurants);
          setfilteredRestaurants(data);
        }}
      >
      Search</button>
    </div>

    <div className="restaurant-list">
    {filteredRestaurants?.length === 0 ? (<h1>No Restaurants found!</h1>) : 
    ( filteredRestaurants.map((restaurant) => (
    <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
  )))}
    </div>
    </>
  )
}

export default Body