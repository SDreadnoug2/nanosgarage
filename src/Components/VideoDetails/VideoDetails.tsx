import { motion } from "framer-motion";
import type { Video } from "../../types";
function VideoDetails({title, url, views, channel, code}: Video) {
    return (
        <motion.div>
            <a href={url}>
                <h1>{title}</h1>
            </a>
            <h2>{channel}</h2>
            <h3>Views: {views}</h3>
        </motion.div>
    )
}

export default VideoDetails;