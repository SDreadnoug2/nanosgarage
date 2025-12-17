import "./VideoCard.css";
import playButton from "../../assets/Untitled.png";
interface Card {
    card: {
        title: string,
        url: string
    }

}

export function VideoCard( {card} : Card){

    return(
        <div className="Card">
            <h1 className="Card__title">{card.title}</h1>
            <a className="Card__link" href={card.url}>
            </a>
            
        </div>
    )
}