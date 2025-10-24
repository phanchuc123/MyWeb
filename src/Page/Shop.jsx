import Panel from "../component/Panel.jsx";
import Subscribe from "../component/Subscribe.jsx";
import imgShop from "../img/Shop.png";
import "../css/Shop.css";
// import {products} from "../data/products.js";
import Product from "../component/Product.jsx";
import { useState ,useEffect} from "react";


export default function Shop(){
    
    const [products, setProducts] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(() => {
    fetch("http://localhost/ShopManager/BE/Controller/C_Product.php")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Lỗi khi load dữ liệu:", err));
    }, []);
    const itemofPage = 8;
    const totalPage = Math.ceil(products.length / itemofPage); 
    const start = (page - 1) * itemofPage;
    const visible = products.slice(start,start+itemofPage);



    return(
        <section className="section_Shop">
            <Panel namelink="Shop" imglink = {imgShop}/>
            <div className="container_search">
                <label className ="choose" htmlFor="new">New
                    <input type="checkbox" name="" id="new" hidden />
                </label>
                <label className ="choose" htmlFor="discount">Discount
                    <input type="checkbox" name="" id="discount" hidden/>
                </label>
                <div className="input_search">
                    <input type="text" name="" id="" placeholder="Enter Your Item" />
                    <svg className="btn_search" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M23.5 23.5L18.2664 18.257M21.1667 11.25C21.1667 13.88 20.1219 16.4024 18.2622 18.2621C16.4024 20.1219 13.8801 21.1666 11.25 21.1666C8.61998 21.1666 6.09763 20.1219 4.2379 18.2621C2.37816 16.4024 1.33337 13.88 1.33337 11.25C1.33337 8.61992 2.37816 6.09757 4.2379 4.23784C6.09763 2.3781 8.61998 1.33331 11.25 1.33331C13.8801 1.33331 16.4024 2.3781 18.2622 4.23784C20.1219 6.09757 21.1667 8.61992 21.1667 11.25V11.25Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
            <div className="our_product_list">
                <div className="our_product_item">
                    {visible.map((product)=>(
                        <Product key={product.id}
                                 tolink={`/product/${product.id}`}
                                 ProName={product.ProName}
                                 ProPic={product.ProPic}
                                 ProDes={product.ProDes}
                                 cost={product.cost}
                                 discost={product.discost}
                                 discount={product.discount}
                        />
                    ))}
                </div>
                <div className="pagination"> 
                    {Array.from({ length: totalPage }, (_, i) => ( <button key={i} className={i + 1 === page ? "active" : ""} onClick={() => setPage(i + 1)} > {i + 1} </button> ))} <button onClick={() => setPage((p) => Math.min(totalPage, p + 1))}>Next</button> 
                </div>
            </div>
            <Subscribe/>
        </section>
    );
}