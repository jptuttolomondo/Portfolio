import './header.css';
import CTA from "./CTA";
import ME from "../../assets/Pablo.jpg";
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header >
            <div className="header_container">
                <h3 className="text-light">Hello, I'm</h3>
                <h1>Juan Pablo Tuttolomondo</h1>
                <h3 className="text-light">Full Stack Developer</h3>
                <h3 className="text-light">Systems Analyst Bachelor</h3>
                 <div className="me">
                    <img src={ME} alt='' />
                </div> 
                <div>
               

                </div> 
             
               
<HeaderSocials />
          
           
                <CTA/>
              

               
            </div>
        </header>
    );
}

export default Header;