import "./PortfolioDetails.css";
import type { Video } from "../../types";
import { AnimatePresence, motion } from "framer-motion"
import VideoDetails from "../VideoDetails/VideoDetails";
export default function PortfolioDetails({video}: {video: Video | null}) {
    const clients: Array<string> = ["Ludwing", "ImmortalHD", "Offcanny", "Cold Ones", "Schlatt", "OTK", "24/7 Comics", "Alpharad", "YeahMad"];
    const software: Array<string> = ["Premiere", "Photoshop", "After Effects", "Blender", "Davinci Resolve", "Java", "C++", "React", "Git", "Linux"]

    return(
        <AnimatePresence>
            <motion.div className="PortfolioDetails">
                <motion.div className="PortfolioDetails__tab">
                    <motion.div className="PortfolioDetails__titlecontainer">
                        <h1 className="PortfolioDetails__number">01</h1>
                        <h1 className="PortfolioDetails__header">CLIENTS</h1>
                    </motion.div>
                    <motion.div className="PortfolioDetails__textcontainer">
                        {clients.map((client, index) => {
                            return (
                                <span key={index} className="PortfolioDetails__text">{client}</span>
                            )
                        })}
                    </motion.div>
                </motion.div>
                <motion.div className="PortfolioDetails__tab">
                    <motion.div className="PortfolioDetails__titlecontainer">
                        <h1 className="PortfolioDetails__number">02</h1>                   
                        <h1 className="PortfolioDetails__header">SOFTWARE</h1>
                    </motion.div>
                    <motion.div className="PortfolioDetails__textcontainer">
                        {software.map((soft, index) => {
                            return(
                                <p key={index} className="PortfolioDetails__text">{soft}</p>
                            )
                        })}
                    </motion.div>
                </motion.div>
                <motion.div className="PortfolioDetails__tab">
                    <motion.div className="PortfolioDetails__titlecontainer">
                        <h1 className="PortfolioDetails__number">03</h1>  
                        <h1 className="PortfolioDetails__header">VIDEO DETAILS</h1>                     
                    </motion.div>
                        <motion.div className="PortfolioDetails__detailsContainer">
                            <p className="PortfolioDetails__switching">{video ? "SWITCHING VIDEO" : ""}</p>
                        {video ? 
                        <AnimatePresence mode="wait">

                            <VideoDetails 
                                key={video.code} 
                                title={video.title} 
                                channel={video.channel} 
                                url={video.url} 
                                views={video.views} 
                                code={video.code}/>  
                        </AnimatePresence>
                        : 
                        <div className="PortfolioDetails__videoDetails">
                            <motion.p
                            className="PortfolioDetails__altText"
                            drag
                            dragElastic={0.1}
                            dragConstraints={{
                                top: -1,
                                left: -1,
                                right: 1,
                                bottom: 1,
                            }}
                            initial = {{opacity: 0, y: 20}}
                            animate = {{opacity: 1, y: 0, transition: {duration:0.5, delay: 0.3}}}
                            >Select a video from the list below to view more details!</motion.p>
                        </div>
                        }     
                    </motion.div>            
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}