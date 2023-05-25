import './navbar.css'
import { BsFullscreenExit } from 'react-icons/bs'
import { AiOutlineUnorderedList, AiOutlineSearch } from 'react-icons/ai' 
import { MdNotificationsActive, MdChatBubble, MdAbc } from 'react-icons/md'

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
        <div className="items">
          <div className="item">
            <MdAbc className="icon" />
            English
          </div>
          <div className="item">
            <BsFullscreenExit className="icon" />
          </div>
          <div className="item">
            <MdNotificationsActive className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubble className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <AiOutlineUnorderedList className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar