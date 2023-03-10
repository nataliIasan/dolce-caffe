import { useState } from "react";
import { data } from "./data";
import ButtonTwo from './ButtonTwo';
import Products from "./Products";

function Caffe() {
    const [clothes, setClothes] = useState(data);
    const chosenClothes = (searhTerm) =>{
    const newClothes = data.filter(element => element.searhTerm === searhTerm);
    setClothes(newClothes);
    }
    return (
    <div>
        <ButtonTwo filteredClothes = {chosenClothes}/>
        <Products itemForSale={clothes}/>
    </div>
    );
}

export default Caffe;
