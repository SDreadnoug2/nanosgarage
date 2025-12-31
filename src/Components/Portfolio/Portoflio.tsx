import { useState, useEffect } from "react";
import "./Portfolio.css";
import data from "../../data.json";
import { VideoCard } from "../VideoCard/VideoCard";
import { animate, AnimatePresence, delay, hover } from "framer-motion";
import { motion } from "framer-motion";

import type { Video } from "../../types";
import PortfolioDetails from "../PortfolioDetails/PortfolioDetails";
function Portfolio() {

    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleVideoClick = (video: Video) => {
        if(video){
            setSelectedVideo(video);
            console.log(selectedVideo);
        }
    }

    let videos = [];
    for (let i = 0; i < data.videoIds.length; i++){
        let variants = {
        initial: {opacity: 0, x: 30, backgroundColor: "#0027A7", color: "#ffffff"},
        animate: {opacity: 1, x: 0, backgroundColor: "#0027A7", color: "#ffffff", transition: {duration: 0.2, delay: (0.1 * i)}},
        rest: {opacity: 1, x: 0, backgroundColor: "#0027A7", color: "#ffffff", transition: {duration: 0.2}},
        hover: {opacity: 1, x: 0, backgroundColor: "#ffffff", color: "#0027A7", transition: {duration: 0.2}}
        }
        videos.push(
            <motion.div 
            className="Portfolio__video" 
            variants={variants} 
            initial="initial" 
            animate = {hasAnimated ? "rest" : "animate"}
            whileHover={"hover"}
            onClick={() => handleVideoClick(data.videoIds[i])} >
                <VideoCard card={data.videoIds[i]}/>
            </motion.div>
        )
    }
    useEffect(() => {
    setHasAnimated(true);
}, []);


    return(
    <div className="Portfolio">
        <AnimatePresence>
            <motion.div className="Portfolio__details">
                <PortfolioDetails video={selectedVideo}/>   

            </motion.div>
            <span className="Portfolio__videoBar">Videos</span>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="Portfolio__videos">
                {videos}
            </motion.div>
        </AnimatePresence>
    </div>
      )
}

export default Portfolio;