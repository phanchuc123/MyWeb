import Panel from "../component/Panel.jsx";
import Subscribe from "../component/Subscribe.jsx";
import imgShop from "../img/Shop.png";
import "../css/Shop.css";
import img1 from "../img/image1.png";
import img2 from "../img/image2.png";
import img3 from "../img/image3.png";
import img4 from "../img/image4.png";
import img9 from "../img/image9.png";
import img6 from "../img/image6.png";
import img7 from "../img/image7.png";
import img8 from "../img/image8.png";
import Product from "../component/Product.jsx";
import { useState } from "react";


export default function Shop(){
    const products = [
        { ProName: "Syltherine", ProPic: img1, ProDes: "Stylish cafe chair", cost: "2.500.000đ", discost: "3.500.000đ", discount: "-30%" },
        { ProName: "Leviosa", ProPic: img2, ProDes: "Stylish cafe chair", cost: "2.500.000đ", discost: "", discount: "" }, 
        { ProName: "Lolito", ProPic: img3, ProDes: "Luxury big sofa", cost: "7.000.000đ", discost: "14.000.000đ", discount: "-50%" }, 
        { ProName: "Respira", ProPic: img4, ProDes: "Outdoor bar table and stool", cost: "500.000đ", discost: "", discount: "New" }, 
        { ProName: "Grifo", ProPic: img9, ProDes: "Night lamp", cost: "1.500.000đ", discost: "", discount: "" }, 
        { ProName: "Muggo", ProPic: img6, ProDes: "Small mug", cost: "150.000đ", discost: "", discount: "New" }, 
        { ProName: "Pingky", ProPic: img7, ProDes: "Cute bed set", cost: "7.000.000đ", discost: "14.000.000 đ", discount: "-50%" }, 
        { ProName: "Potty", ProPic: img8, ProDes: "Minimalist flower pot", cost: "500.000đ", discost: "", discount: "New" },
        { ProName: "Syltherine", ProPic: img1, ProDes: "Stylish cafe chair", cost: "2.500.000đ", discost: "3.500.000đ", discount: "-30%" }, 
        { ProName: "Leviosa", ProPic: img2, ProDes: "Stylish cafe chair", cost: "2.500.000đ", discost: "", discount: "" }, 
        { ProName: "Lolito", ProPic: img3, ProDes: "Luxury big sofa", cost: "7.000.000đ", discost: "14.000.000đ", discount: "-50%" }, 
        { ProName: "Respira", ProPic: img4, ProDes: "Outdoor bar table and stool", cost: "500.000đ", discost: "", discount: "New" }, 
        { ProName: "Grifo", ProPic: img9, ProDes: "Night lamp", cost: "1.500.000đ", discost: "", discount: "" }, 
        { ProName: "Muggo", ProPic: img6, ProDes: "Small mug", cost: "150.000đ", discost: "", discount: "New" }, 
        { ProName: "Pingky", ProPic: img7, ProDes: "Cute bed set", cost: "7.000.000đ", discost: "14.000.000 đ", discount: "-50%" }, 
        { ProName: "Potty", ProPic: img8, ProDes: "Minimalist flower pot", cost: "1.500.000đ", discost: "", discount: "New" },
        { ProName: "Syltherine", ProPic: img1, ProDes: "Stylish cafe chair", cost: "2.500.000đ", discost: "3.500.000đ", discount: "-30%" },
        { ProName: "Leviosa", ProPic: img2, ProDes: "Stylish cafe chair", cost: "2.500.000đ", discost: "", discount: "" }, 
        { ProName: "Lolito", ProPic: img3, ProDes: "Luxury big sofa", cost: "7.000.000đ", discost: "14.000.000đ", discount: "-50%" }, 
        { ProName: "Respira", ProPic: img4, ProDes: "Outdoor bar table and stool", cost: "500.000đ", discost: "", discount: "New" }, 
        { ProName: "Grifo", ProPic: img9, ProDes: "Night lamp", cost: "1.500.000đ", discost: "", discount: "" }, 
        { ProName: "Muggo", ProPic: img6, ProDes: "Small mug", cost: "150.000đ", discost: "", discount: "New" }, 
        { ProName: "Pingky", ProPic: img7, ProDes: "Cute bed set", cost: "7.000.000đ", discost: "14.000.000 đ", discount: "-50%" }, 
        { ProName: "Potty", ProPic: img8, ProDes: "Minimalist flower pot", cost: "500.000đ", discost: "", discount: "New" },
        { ProName: "Syltherine", ProPic: img1, ProDes: "Stylish cafe chair", cost: "2.500.000đ", discost: "3.500.000đ", discount: "-30%" }, 
        { ProName: "Leviosa", ProPic: img2, ProDes: "Stylish cafe chair", cost: "2.500.000đ", discost: "", discount: "" }, 
        { ProName: "Lolito", ProPic: img3, ProDes: "Luxury big sofa", cost: "7.000.000đ", discost: "14.000.000đ", discount: "-50%" }, 
        { ProName: "Respira", ProPic: img4, ProDes: "Outdoor bar table and stool", cost: "500.000đ", discost: "", discount: "New" }, 
        { ProName: "Grifo", ProPic: img9, ProDes: "Night lamp", cost: "1.500.000đ", discost: "", discount: "" }, 
        { ProName: "Muggo", ProPic: img6, ProDes: "Small mug", cost: "150.000đ", discost: "", discount: "New" }, 
        { ProName: "Pingky", ProPic: img7, ProDes: "Cute bed set", cost: "7.000.000đ", discost: "14.000.000 đ", discount: "-50%" }, 
        { ProName: "Potty", ProPic: img8, ProDes: "Minimalist flower pot", cost: "2.500.000đ", discost: "", discount: "New" }
    ];
    
    const [page,setPage] = useState(1);
    const itemofPage = 16;
    const totalPage = Math.ceil(products.length / itemofPage); // làm tròn
    const start = (page - 1) * itemofPage;
    const visible = products.slice(start,start+itemofPage);


    return(
        <section className="section_Shop">
            <Panel namelink="Shop" imglink = {imgShop}/>
            <div className="container_search">
                <span>Sort :</span>
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
                    {visible.map((product,index)=>(
                        <Product key={start + index}
                                 tolink={""}
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