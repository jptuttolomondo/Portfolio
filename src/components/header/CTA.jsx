import CVSpanish from "../../assets/CV_JPTuttolomondoSpanish102022.pdf";
import CVEnglish from "../../assets/CV_JPTuttolomondoEnglish102022.pdf";

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