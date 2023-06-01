import "./newHotel.css";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { toast } from "react-toastify";
import { createHotel, reset } from "../../../features/hotels/hotelSlice";

function NewHotel() {
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/api/room");

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    city: "",
    address: "",
    distance: "",
    photos: "",
    title: "",
    desc: "",
    rating: "",
    rooms: "",
    cheapestPrice: "",
    featured: "",
  });

  const {
    name,
    type,
    city,
    address,
    distance,
    photos,
    title,
    desc,
    rating,
    room,
    cheapestPrice,
    featured,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { hotels, isError, message } = useSelector(
    (state) => state.hotels
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [hotels, isError, message, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const hotelData = {
      ...formData,
      rooms
    };
    dispatch(createHotel(hotelData));
    navigate('/hotel')
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="hotel Name"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
                  value={type}
                  placeholder="type"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={city}
                  placeholder="city"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={address}
                  placeholder="Address"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="distance"
                  name="distance"
                  value={distance}
                  placeholder="Distance"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="photos"
                  name="photos"
                  value={photos}
                  placeholder="img url"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={title}
                  placeholder="Title"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  name="desc"
                  value={desc}
                  placeholder="Discription"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  name="rating"
                  value={rating}
                  placeholder="Rating"
                  onChange={onChange}
                />
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                <select
                  id="room"
                  name="room"
                  multiple
                  onChange={handleSelect}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="cheapestPrice"
                  name="cheapestPrice"
                  value={cheapestPrice}
                  placeholder="Cheapest Price"
                  onChange={onChange}
                />
              </div>
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" name="featured" onChange={onChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHotel;
