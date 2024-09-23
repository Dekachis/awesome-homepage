import { Settings } from "lucide-react";
import { useRef } from "react";

const Navbar = () => {
    const reflink1 = useRef();
    const reflink2 = useRef();
    const reflink3 = useRef();
    const reflink4 = useRef();

    const refnav = useRef();
    const refbtn = useRef();


    const handleDark = () => {
        reflink1.current.style.color = "#41a719";
        reflink2.current.style.color = "#41a719";
        reflink3.current.style.color = "#41a719";
        reflink4.current.style.color = "#41a719";

        refnav.current.style.backgroundColor = "#121212";
        refbtn.current.style.backgroundColor = "#41a719";
        refbtn.current.style.color = "#fff";

        const landing = document.getElementById("land");
        
        landing.style.backgroundColor = "#121212";
    }

    return(
        <nav id="navibar" className="navbar" ref={refnav}>
            <ul>
                <li><a className="links" ref={reflink1} href="">Features</a></li>
                <li><a className="links" ref={reflink2} href="" >How to use</a></li>
                <li><a className="links" ref={reflink3} href="">License</a></li>
                <li><a className="links" ref={reflink4} href="">Pricing</a></li>

            </ul>
            <img src="" alt="" />
            <div className="buttons">
            <button id="getStart" ref={refbtn}>Get Started</button>
            <Settings  className="settings" onClick={handleDark}/>
            </div>

        </nav>
    );
}

export default Navbar;