import Home1 from"../component/Home1.jsx"
import TemplateRoom from "../component/TemplatecRoom.jsx";
import Product from "../component/Product.jsx";
import Subscribe from "../component/Subscribe.jsx";
import DiningImg from "../img/Dining.png"
import LivingImg from "../img/living.png"
import BedroomImg from "../img/Bedroom.png"
import img1 from "../img/image1.png";
import img2 from "../img/image2.png";
import img3 from "../img/image3.png";
import img4 from "../img/image4.png";
import img9 from "../img/image9.png";
import img6 from "../img/image6.png";
import img7 from "../img/image7.png";
import img8 from "../img/image8.png";
import beaut1 from "../img/beaut1.png";
import beaut2 from "../img/beaut2.png";
import beaut3 from "../img/beaut3.png";
import furni1 from "../img/furni1.png";
import furni2 from "../img/furni2.png";
import furni3 from "../img/furni3.png";
import furni4 from "../img/furni4.png";
import furni5 from "../img/furni5.png";
import furni6 from "../img/furni6.png";
import furni7 from "../img/furni7.png";
import furni8 from "../img/furni8.png";
import furni9 from "../img/furni9.png";
import { Link } from "react-router-dom";
import "../css/Home.css"
export default function Home(){
    return(
        <section className="section_Home">
             <Home1/>
             <div className="item_room">
                <h3 className="room title">Browse The Range</h3>
                <p className="room des">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </div>
             <div className="section_Home-room">
                 <TemplateRoom tolink={""} picture={DiningImg} des={"Dining"}/>
                 <TemplateRoom tolink={""} picture={LivingImg} des={"Living"}/>
                 <TemplateRoom tolink={""} picture={BedroomImg} des={"Bedroom"}/>          
             </div>
             <div className="our_product_title">
                <h3>Our Product</h3>
             </div>
             <div className="our_product_list">
                <div className="our_product_item">
                    <Product tolink={""} ProName={"Syltherine"} ProPic={img1} ProDes={"Stylish cafe chair"} cost={"2.500.000đ"} discost={"3.500.000đ"} discount={"-30%"}/>
                    <Product tolink={""} ProName={"Leviosa"} ProPic={img2} ProDes={"Stylish cafe chair"} cost={"2.500.000đ"} discost={""} discount={""}/>
                    <Product tolink={""} ProName={"Lolito"} ProPic={img3} ProDes={"Luxury big sofa"} cost={"7.000.000đ"} discost={"14.000.000đ"} discount={"-50%"}/>
                    <Product tolink={""} ProName={"Respira"} ProPic={img4} ProDes={"Outdoor bar table and stool"} cost={"500.000đ"} discost={""} discount={"New"}/>
                    <Product tolink={""} ProName={"Grifo"} ProPic={img9} ProDes={"Night lamp"} cost={"1.500.000đ"} discost={""} discount={""}/>
                    <Product tolink={""} ProName={"Muggo"} ProPic={img6} ProDes={"Small mug"} cost={"150.000đ"} discost={""} discount={"New"}/>
                    <Product tolink={""} ProName={"Pingky"} ProPic={img7} ProDes={"Cute bed set"} cost={"7.000.000đ"} discost={"14.000.000 đ"} discount={"-50%"}/>
                    <Product tolink={""} ProName={"Potty"} ProPic={img8} ProDes={"Minimalist flower pot"} cost={"500.000đ"} discost={""} discount={"New"}/>
                </div>
             </div>

             <div className="showmore">
                <Link to="/shop" className="btn_showmore">SHOW MORE</Link>
             </div>

             <div className="beautiful_room">
                <div className="beautiful_des">
                    <h2>50+ Beautiful rooms inspiration</h2>
                    <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <div className="btn_explore">
                        <button>Explore More</button>
                    </div>
                </div>
                <div className="beautiful_img">
                   <img className="img img1" src={beaut2} alt="anh" />
                   <img className="img img2" src={beaut1} alt="anh" />
                   <img className="img img3" src={beaut3} alt="anh" />
                </div>
             </div>

             <div className="container_furni">
                <div className="furni_title">
                    <p>Share your setup with</p>
                    <h2>#FuniroFurniture</h2>
                </div>
                <div className="furni_img">
                    <img src={furni1} alt="" className="p p1" />
                    <img src={furni2} alt="" className="p p2" />
                    <img src={furni3} alt="" className="p p3" />
                    <img src={furni4} alt="" className="p p4" />
                    <img src={furni5} alt="" className="p p5" />
                    <img src={furni6} alt="" className="p p6" />
                    <img src={furni7} alt="" className="p p7" />
                    <img src={furni8} alt="" className="p p8" />
                    <img src={furni9} alt="" className="p p9" />
                </div>
             </div>
             <Subscribe/>
        </section>
    );
}