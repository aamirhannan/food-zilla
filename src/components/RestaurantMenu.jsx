import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./ShimmerUI";
const RestaurantMenu = () => {
 
const {recId} = useParams();

const [restaurant, setRestaurant] = useState(null);
useEffect(() => {
  getRestaurantInfo();
  // console.log('render');
},[]);

async function getRestaurantInfo() {
  try {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1234348&lng=85.4027291&restaurantId="+recId);
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    console.log(json?.data?.cards[0]?.card?.card?.info);
    // console.log(json?.data?.cards[0]?.card?.card?.info);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

  return !restaurant ? (<Shimmer />) : (
    <>
    <div className="menu">
      <div>
        <h1>Restaurant Id: {restaurant.id}</h1>
        <h2>Restaurant Name: {restaurant.name}</h2>
        <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}></img>
      </div>
      <div className="menu">
        <h1>Cuisines</h1>
        <ul>
          {(restaurant.cuisines)
          .map((item, index)=>{
            return <li key={index}>{item}</li>}
          )}
        </ul>
      </div>
    </div>
    </>
  )
};
export default RestaurantMenu;