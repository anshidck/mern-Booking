import './reserve.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RxCrossCircled } from 'react-icons/rx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Reserve({ setOpen, dates, days }) {
  const [searchData, setSearchData] = useState([])
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { room } = useSelector((state) => state.room);

  useEffect(() => {
    const searchData = JSON.parse(localStorage.getItem('searchDatas'));
    setSearchData(searchData)
  },[])

  console.log(searchData);
  
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  console.log(dates);

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((id) => {
          return axios.put(`/api/room/availibility/${id}`, {
            dates: alldates,
          });
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="reserve">
    <div className="rContainer">
      <RxCrossCircled
        className="rClose"
        onClick={() => setOpen(false)}
      />
      <span>Select your rooms:</span>
      {room.map((item) => (
        <div className="rItem" key={item._id}>
          <div className="rItemInfo">
            <div className="rTitle">{item.title}</div>
            <div className="rDesc">{item.desc}</div>
            <div className="rMax">
              Max people: <b>{item.maxPeople}</b>
            </div>
            <div className="rPrice">${item.price}</div>
          </div>
          <div className="rSelectRooms">
            {item.roomNumbers.map((roomNumber) => (
              <div className="room" key={roomNumber._id}>
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                  disabled={!isAvailable(roomNumber)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleClick} className="rButton">
        Reserve Now!
      </button>
    </div>
  </div>
  );
}

export default Reserve;
