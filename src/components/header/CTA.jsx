import CVSpanish from "../../assets/JPTuttolomondo_Esp.pdf";
import CVEnglish from "../../assets/JPTuttolomondo_Eng.pdf";

const CTA = () => {
    return (
        <div className="cta">
           
            <a href={CVSpanish} download className="btn">Spanish CV</a>
            <a href={CVEnglish} download className="btn">English CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
    );
}

export default CTA;