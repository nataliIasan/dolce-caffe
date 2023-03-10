import { useState } from "react";
import { dataTwo } from "./dataTwo";
import Slides from './Slides';



function Home() {
    const [slides] = useState(dataTwo);
    const [showMore, setShowMore] = useState(false);

    const showMoreClick = (element) => {
        element.showMore = !element.showMore
        setShowMore(!showMore)
    }
    return(
        <div>
            <div className="header">
                <img className="icon" src="https://img.freepik.com/free-icon/hot-cup-coffee_318-85296.jpg?size=338&ext=jpg&ga=GA1.2.1223043040.1658521452&semt=sph" alt="caffe" width="50px"/>
                <h1>Dolce & Caffé</h1>
            </div>
            {slides.map((element => {
        const {id, image, description} = element;

        return(<div key= {id}>
            <Slides imageProps={image}/>
            <div className='container'>
            <p>{showMore ? description : description.substring(0, 170) + "..."}
                <button className="btn" onClick={() => showMoreClick(element)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
            </div>
        </div>)
        }))}

    </div>
    );
}


export default Home;
