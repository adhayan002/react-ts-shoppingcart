import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import storeItems from "../data/items.json";
import { Carousel } from 'react-responsive-carousel';

export function Home(){
    return <>
    <h1>Home</h1>
    <span>Some Products we Offer:</span>
    <Carousel showThumbs={false} infiniteLoop={true} interval={3000} autoPlay={true}>
        {storeItems.map(item=>(
            <img src={item.imgUrl} style={{width:'100%',height:'40vh',objectFit:'cover'}} />
        ))}
    </Carousel>
    </>
}