import CVSpanish from "../../assets/CV-FT-Spanish-Juan-Pablo-Tuttolomondo.pdf";
import CVEnglish from "../../assets/CV-FT-English-Juan-Pablo-Tuttolomondo.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CVSpanish} download className="btn">Download Spanish CV</a>
            <a href={CVEnglish} download className="btn">Download English CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
    );
}

export default CTA;