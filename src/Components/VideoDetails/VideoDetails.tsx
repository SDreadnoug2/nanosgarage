import { AnimatePresence, motion } from "framer-motion";
import "./VideoDetails.css";
import type { Video } from "../../types";
function VideoDetails({title, url, views, channel, code}: Video) {
        const detailHover = {
        "initial" : {x: 0},
        "hover" : {x: -30}
    };

    return (
            <motion.div 
            key={code}
            className="VideoDetails"
            initial={{backgroundColor: "#ffffff", y: 130 }}
            animate={{backgroundColor: "#FF6600", y: 0}}
            exit={{ backgroundColor:"#ff812dff", y: 120 }}
            >

                <a className="VideoDetails__videoContainer" href={url}>
                    <p className="VideoDetails__text">VIDEO</p>
                    <h1 className="VideoDetails__title">{title}</h1>
                </a>
                <div className="VideoDetails__channelContainer">
                    <div className="VideoDetails__views">
                        <h3 className="VideoDetails__text">VIEWS</h3>
                        <h3 className="VideoDetails__variable">{views}</h3>
                    </div>
                    <div className="VideoDetails__channel">
                        <p className="VideoDetails__text">CHANNEL</p>
                        <p className="VideoDetails__variable">{channel}</p>
                    </div>

                </div>
                <div className="VideoDetails__bottomContainer">
                    <div className="VideoDetails__thumbnailContainer">
                        <img className="VideoDetails__thumbnail" src="https://i.ytimg.com/vi/Ks8tk1VwYTQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFqwJSMBERV-wvz2DC5LyQpU_x2Q"></img>
                    </div>
                    <motion.div className="VideoDetails__watchContainer"
                    initial={{x: 0}}
                    whileHover={{x: -30}}
                    >
                        <p className="VideoDetails__watchText" >WATCH NOW</p>
                    </motion.div>
                </div>
                <motion.div>
                    
                </motion.div>
            </motion.div>
    )
}

export default VideoDetails;