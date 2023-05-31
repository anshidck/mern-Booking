import './sidebar.css'
import { Link } from 'react-router-dom'
import { MdExitToApp, MdDashboard, MdStore,
     MdLocalShipping, MdInsertChart, MdNotifications,
      MdPsychology, MdOutlineAppSettingsAlt, MdAccountCircle } from 'react-icons/md'
import { BsPersonFill } from 'react-icons/bs'
import { AiFillCreditCard, AiTwotoneSetting } from 'react-icons/ai'
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ckadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
            <MdDashboard className="icon" />
            <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <BsPersonFill className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotel" style={{ textDecoration: "none" }}>
            <li>
              <MdStore className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/room" style={{ textDecoration: "none" }}>
            <li>
              <AiFillCreditCard className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <li>
            <MdLocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <MdInsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <MdNotifications className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <AiTwotoneSetting className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <MdPsychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <MdOutlineAppSettingsAlt className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <MdAccountCircle className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <MdExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar