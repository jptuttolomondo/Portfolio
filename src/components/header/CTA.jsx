import CVSpanish from "../../assets/CV_Juan_Pablo_Tuttolomondo.pdf";
import CVEnglish from "../../assets/Juan_Pablo_Tuttolomondo_Resume.pdf";

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