import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow.js"
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';



function Sidebar() {
    return (
        <div className="sidebar">
            {/* yo mr hizenberg give me some meth */}
            <SidebarRow selected Icon={HomeSharpIcon} title="Home"/>
            <SidebarRow Icon={WhatshotSharpIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription"/>
            <hr />
            <SidebarRow Icon={VideoLibrarySharpIcon} title="Library"/>
            <SidebarRow Icon={HistorySharpIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoSharpIcon} title="Your videos"/>
            <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpSharpIcon} title="Liked videos"/>
            <SidebarRow Icon={ExpandMoreSharpIcon} title="show more"/>
            <hr />
        </div>
    )
}

export default Sidebar
