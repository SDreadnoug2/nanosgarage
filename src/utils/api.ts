import type { Video } from "../types";
const API_KEY = import.meta.env.API_KEY;
export async function updateVideoViews(videos: Array<Video>) {
    const results = await Promise.all(
    videos.map(async video => {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.code}&key=${API_KEY}`
        )
        const data = await response.json();
        return data;       
    })
    );
    console.log(results);
    return results;
}
