import React from 'react'
import "./ChannelRow.css"
import { Avatar } from '@material-ui/core'
import DoneAllIcon from '@material-ui/icons/DoneAll';

function channelRow({image, channel, subs, noofvideos, description, verified}) {
    return (
        <div className="channelRow">
         <Avatar className="channelRow__logo"
         alt={channel} src={image}/>
         <div className ="channelRow__text">
            <h4>{channel} {verified && <DoneAllIcon />}</h4>
            <p>{subs} subscribers . {noofvideos} vieos</p>
            <p>{description}</p>
         </div>
        </div>
    )
}

export default channelRow

