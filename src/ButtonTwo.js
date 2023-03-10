function ButtonTwo({filteredClothes}){
    return(
        <div className="cont">
            <button className="change" onClick={ () => filteredClothes("caffé")}>Caffé</button>
            <button className="change" onClick={ () => filteredClothes("cappucino")}>Cappucino</button>
            <button className="change" onClick={ () => filteredClothes("té")}>Té</button>
            <button className="change" onClick={ () => filteredClothes("spremuta")}>Spremuta</button>
        </div>
    )
}

export default ButtonTwo;