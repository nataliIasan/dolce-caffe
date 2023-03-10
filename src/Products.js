
function Products({itemForSale}) {
    return(
        <div className="products">
            {itemForSale.map((element => {
                const {id, name, image} = element;
                return(
                    <div className="product-card" key={id}>
                        <div className="product-info">
                        <h3>{name}</h3>
                    </div>
                        <img src={image} alt="clothes" width="370px" height="430px"/>
                    </div>
                )
            }))}
        </div>
    )
}

export default Products;