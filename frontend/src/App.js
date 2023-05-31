import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/user/home/Home";
import Hotel from "./pages/user/hotel/Hotel";
import List from "./pages/user/list/List";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DashBoard from "./pages/admin/Dashboard/DashBoard";
import { productInputs, userInputs } from "./formsource"
import Data from "./pages/admin/list/Data";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import New from "./pages/admin/new/New";
import NewHotel from "./pages/admin/newHotel/NewHotel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<DashBoard />} />
        <Route path="/users" element={<Data columns={userColumns} />}/>
        <Route path="new" element={<New inputs={userInputs} />} />
        <Route path="/users/new" element={<New inputs={userInputs} />} />
        <Route path="/hotel" element={<Data columns={hotelColumns} />} />
        <Route path="/hotel/new" element={<NewHotel />} />
        <Route path="/room" element={<Data columns={roomColumns} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  );
}

export default App