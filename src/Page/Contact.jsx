import Panel from "../component/Panel.jsx";
import imgContact from "../img/Shop.png";
export default function Contact(){
    return(
        <section className="section_Contact">
             <Panel namelink="Contact" imglink={imgContact}/>
        </section>
    );
}