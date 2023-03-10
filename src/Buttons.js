function Buttons({filteredSweet}){
    return(
        <div className="cont">
            <button className="change" onClick={ () => filteredSweet("croissant")}>Croissant</button>
            <button className="change" onClick={ () => filteredSweet("pasticcini")}>Pasticcini</button>
            <button className="change" onClick={ () => filteredSweet("biscotti")}>Biscotti</button>
            <button className="change" onClick={ () => filteredSweet("crostata")}>Crostata</button>
        </div>
    )
}

export default Buttons;