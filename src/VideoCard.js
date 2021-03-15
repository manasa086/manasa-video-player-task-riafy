import React from 'react'
import "./Videos.css"
function VideoCard({id,source,title,content}) {
    function playVid(){
        console.log(document.getElementById(id.toString()))
        document.getElementById(id.toString()).controls=true;
        if(document.getElementById(id.toString()).paused){
            document.getElementById(id.toString()).play();
        }
        else{
            document.getElementById(id.toString()).pause();
        }
    }
  
    return (
        <div>
            <div className="videoCard">
            <video id={id} onClick={playVid} className="videoCard__thumbnail" controls={false} >
  <source src={source.toString()} type="video/webm"></source>
</video>

    <div className="video__info">
        <div className="text">
            <h4>{title}</h4> 
        </div>
    </div>
            
        </div>
        </div>
    )
}

export default VideoCard
