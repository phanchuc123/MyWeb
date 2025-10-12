import { Link } from "react-router-dom";
import "../css/Product.css";
export default function Product({tolink,ProPic,ProName,ProDes,cost,discount,discost}){
    return (
        <Link className="product" to={tolink}>
            <div className="product_discount">{discount}</div>
            <div className="product_img">
                <img src={ProPic} alt="anh" />
            </div>
            <span className="product_name">{ProName}</span>
            <p className="product_des">{ProDes}</p>
            <div className="product_price">
                <span className="product_cost">{cost}</span>
                <p className="product_discost">{discost}</p>
            </div>
        </Link>
    );
}