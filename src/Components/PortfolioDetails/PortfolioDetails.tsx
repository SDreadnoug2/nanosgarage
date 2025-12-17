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
                    {video ? <VideoDetails title={video.title} channel={video.channel} url={video.url} views={video.views} code={video.code}/>  : <p>Select a video from the list below to view more details!</p>}                    
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}