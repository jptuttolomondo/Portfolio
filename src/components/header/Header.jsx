import './header.css';
import CTA from "./CTA";
import ME from "../../assets/Pablo.jpg";
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello, I'm</h3>
                <h1>Juan Pablo Tuttolomondo</h1>
                <h3 className="text-light">Full Stack Developer</h3>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} />
                </div>

               
            </div>
        </header>
    );
}

export default Header;