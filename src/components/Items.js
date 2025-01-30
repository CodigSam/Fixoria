import React from "react";

const ItemLabel= ({product}) =>{
    return(
        <>
             <td>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: "40px", height: "40px", marginRight: "10px", borderRadius: "5px", objectFit: "cover" }} 
                />
                {product.name}
            </td>
            <td>{product.category}</td>
            <td>{product.stock}</td>
            <td>{product.price}</td>
            <td>{product.status}</td>
            <td>.....</td>
        </>

    );
};
export default ItemLabel;