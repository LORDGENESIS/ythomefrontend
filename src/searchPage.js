import React from 'react'
import "./searchPage.css"
import ChannelRow from "./channelRow"
import VideoRow from './VideoRow';
import TuneIcon from '@material-ui/icons/Tune';




function searchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>

            </div>
            <hr />

            <ChannelRow
            image = "https://uem.edu.in/app/themes/iem-group-wp-theme/resources/logo.png"
            channel ="Genesis"
            verified
            subs = "1.1M"
            noofvideos={366}
            description="You cant get a esciption unless you visit us"
            />

            <hr />

            <VideoRow 
                views="1.4M"
                subs ="1.1M"
                description="Watch this to encourage yourself and be goo in your field an build your career"
                timestamp ="1hr"
                channel ="Genesis"
                title ="Lets learn what are the benefits of joinning the college"
                image ="https://i1.wp.com/uemgroup.s3.amazonaws.com/uploads/sites/2/2015/06/New-Photo-7-e1483046735141.jpg?fit=4903%2C2624&ssl=1"
            />
            <VideoRow 
                views="1.4M"
                subs ="1.1M"
                description="Watch this to encourage yourself and be goo in your field an build your career"
                timestamp ="1hr"
                channel ="Genesis"
                title ="Lets learn what are the benefits of joinning the college"
                image ="https://i1.wp.com/uemgroup.s3.amazonaws.com/uploads/sites/2/2015/06/New-Photo-7-e1483046735141.jpg?fit=4903%2C2624&ssl=1"
            />
            <VideoRow 
                views="1.4M"
                subs ="1.1M"
                description="Watch this to encourage yourself and be goo in your field an build your career"
                timestamp ="1hr"
                channel ="Genesis"
                title ="Lets learn what are the benefits of joinning the college"
                image ="https://i1.wp.com/uemgroup.s3.amazonaws.com/uploads/sites/2/2015/06/New-Photo-7-e1483046735141.jpg?fit=4903%2C2624&ssl=1"
            />
            <VideoRow 
                views="1.4M"
                subs ="1.1M"
                description="Watch this to encourage yourself and be goo in your field an build your career"
                timestamp ="1hr"
                channel ="Genesis"
                title ="Lets learn what are the benefits of joinning the college"
                image ="https://i1.wp.com/uemgroup.s3.amazonaws.com/uploads/sites/2/2015/06/New-Photo-7-e1483046735141.jpg?fit=4903%2C2624&ssl=1"
            />
            <VideoRow 
                views="1.4M"
                subs ="1.1M"
                description="Watch this to encourage yourself and be goo in your field an build your career"
                timestamp ="1hr"
                channel ="Genesis"
                title ="Lets learn what are the benefits of joinning the college"
                image ="https://i1.wp.com/uemgroup.s3.amazonaws.com/uploads/sites/2/2015/06/New-Photo-7-e1483046735141.jpg?fit=4903%2C2624&ssl=1"
            />



        </div>
    )
}

export default searchPage
