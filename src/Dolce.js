import { useState } from "react";
import Buttons from './Buttons';
import Products from "./Products";
import { dataOne } from "./dataOne";

function Dolce() {
    const [sweet, setSweet] = useState(dataOne);
    const chosenSweet = (searhTerm) =>{
    const newSweet = dataOne.filter(element => element.searhTerm === searhTerm);
    setSweet(newSweet);
    }
    return (
    <div>
        <Buttons filteredSweet = {chosenSweet}/>
        <Products itemForSale={sweet}/>
    </div>
    );
}

export default Dolce