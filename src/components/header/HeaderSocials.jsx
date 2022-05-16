import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
    const linkedin = "https://www.linkedin.com/in/juan-pablo-tuttolomondo";
    const github = "https://github.com/jptuttolomondo";
    const whatsapp = "https://wa.me/+543887400710";
    return (
        <div className="header__socials">
            <a href={linkedin} target="_blank"><BsLinkedin /></a>
            <a href={github} target="_blank"><BsGithub /></a>
            <a href={whatsapp} target="_blank"><BsWhatsapp /></a>
        </div>
    );
}

export default HeaderSocials;