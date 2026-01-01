import Panel from "../component/Panel";
import imgCheckout from "../img/Shop.png";
import "../css/Checkout.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../component/Subscribe.jsx";
export default function Checkout(){
    const [selectedPayment, setSelectedPayment] = useState("");
    return(
        <section className="section_Checkout">
            <Panel namelink="Checkout" imglink = {imgCheckout}/>
            <div className="container-checkout">
                <div className="billing-details">
                    <h2>Billing Details</h2>
                    <label>First Name<input type="text" /></label>
                    <label>Last Name<input type="text" /></label>
                    <label>Street address<input type="text" /></label>
                    <label>Town/City<input type="text" /></label>
                    <label>Province<input type="text" /></label>
                    <label>Phone<input type="text" /></label>
                    <label>Email address<input type="text" /></label>
                </div>
                <div className="total-details">
                    <h2>Your Order</h2>
                    <span>Quantity</span>
                    <span>Total</span>
                    <div className="option-payment">
                        <label><input type="radio" name="payment" onChange={()=>setSelectedPayment('delivery')} />Cash on Delivery</label>
                        <label><input type="radio" name="payment" onChange={()=>setSelectedPayment('bank')} />Direct Bank Transfer</label>
                        {selectedPayment === 'bank' && (
                            <div className="info-bank">
                                <p><span>Bank Name :</span>ABC Bank</p>
                                <p><span>Account Number :</span>1234567890</p>
                                <p><span>Account Hoder :</span>Furniro Shop</p>
                                <p><span>Branch :</span>Da Nang</p>
                            </div>
                        )}
                    </div>
                    <div className="fr-btn">
                        <button>Place Order</button>
                        <Link to ="/cart">
                            <button>Info Cart Items</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Subscribe/>
        </section>
            
        
    );
}