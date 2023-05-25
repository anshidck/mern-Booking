import { useDispatch, useSelector } from "react-redux";
import "./featuredProperties.css";
import { useEffect } from "react";
import { getHome } from "../../../features/hotel/hotelSlice";

const FeaturedProperties = () => {
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state.data)
  useEffect(() => {
    dispatch(getHome())
  },[dispatch])
  return (
    <div className="fp">
       {home.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
    </div>
  );
};

export default FeaturedProperties;
