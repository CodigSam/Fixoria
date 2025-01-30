import React,{useState} from "react";
import SearchBar from "./SearchBar";
import ItemLabel from "./Items";
//import HandlePage from "./Handle-page";

const ProductList =() => {
    const [product /*, setProduct*/] = useState([
        {id: 1, image:'/images/1-3.jpg' ,name:'Casual Goggles', category:'Googles', stock:'123 Low stock', price:'$23',status:'Published'},
        {id: 2, image:'/images/1707409403689-manfare_bd-id-13.jpeg',name:'T-shirt', category:'Cloth', stock:'123', price:'$30',status:'Published'},
        {id: 3,image:'/images/green-tea-benefits-1578337166.jpg', name:'Green tea', category:'Drinks', stock:'Out of Stock', price:'$45',status:'Out of Stock'},
        {id: 4,image:'/images/photo1711860812-(3).jpeg', name:'Nike Cats', category:'Shoes', stock:'123 Low stock', price:'$525',status:'Inactive'},
        {id: 5,image:'/images/1-3.jpg', name:'Men Watch ', category:'Watch', stock:'123', price:'$300',status:'In Draft'},
        
    ]);

    const [currentPage/*,setCurrentPage*/] = useState(1);
    const [productsPerPage] = useState(10);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const indexofLastProduct = currentPage* productsPerPage;
    const indexofFirstProduct = indexofLastProduct - productsPerPage;
    const  currentProduct = product.slice(indexofFirstProduct, indexofLastProduct);

    //const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleCheckboxChange = (id) => {
        setSelectedProducts((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((productId) => productId !== id)
                : [...prevSelected, id]
        );
    };

    return(
        <div className="productList">
            <h1> Product List</h1>
            <SearchBar/>
            <table>
                <thead>
                    <tr>
                    <th>
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    setSelectedProducts(
                                        e.target.checked ? product.map((p) => p.id) : []
                                    )
                                }
                                checked={selectedProducts.length === product.length}
                            />
                        </th>
                        <th> Product Name</th>
                        <th> Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {currentProduct.map((product) => (
                        <tr key={product.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedProducts.includes(product.id)}
                                onChange={() => handleCheckboxChange(product.id)}
                            />
                        </td>
                        <ItemLabel  product={product} />
                    </tr>
                    ))}
                </tbody>
            </table>
            
            <div className="pignatation"> 
            <button className="pagination-btn">Previous</button>
            <span className="pagination-number active">1</span>
            <span className="pagination-number">2</span>
            <span className="pagination-number">3</span>
            <button className="pagination-btn">Next</button>
            </div>
            {/*  <HandlePage
            productsPerPage={productsPerPage}
            totalProducts={product.length}
            paginate={paginate}

            />*/}

        </div>
    );
}

export default ProductList;