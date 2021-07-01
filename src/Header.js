import React,{useState} from 'react';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import youtube from "./img/ytlogo.png"
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import { Avatar } from '@material-ui/core';
import avg from "./img/avg.png";
import { Link } from "react-router-dom";



function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon />
                <Link to="/">
                <img
                className="header__logo" src= {youtube} 
                alt="YOUTUBE HOME"
                />
                </Link>
                

            </div>

            <div className="header__input">
                <input onChange={e =>setInputSearch(e.target.value)}
                value={inputSearch} 
                placeholder="Search" 
                type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className="header__inpuButton"/>
                </Link>
                

            </div>
            

            

            
            <div className="header__icons">
                <VideoCallSharpIcon className="header__icons"/>
                <AppsSharpIcon className="header__icons"/>
                <NotificationsActiveSharpIcon className="header__icons"/>
                <Avatar 
                src={avg}
                alt="Kaileena" />
            </div>
            
            
        </div>
    )
}

export default Header
