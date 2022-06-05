import React from "react";
import "./About.css";
import Github from "../../assets/github.png";
import Facebook from "../../assets/Facebook.png";
import LinkedIn from "../../assets/linkedin.png";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import Crown from "../../assets/crown.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import Myimage from "../../assets/boy.png";
// import thumbup from "../../assets/thumbup.png"

// import { themeContext } from "../../Context";


const About = () => {
    // Transition
    // const transition = { duration: 2, type: "spring" };

    // context
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;

    return (
        <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    {/* yahan change hy darkmode ka */}
                    <span>Hey! I Am</span>
                    <span>Uma Maheswari</span>
                    <span>
                        Passionate Frontend Developer  with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <button className=" button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Myimage} alt="" />

                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv img={Crown} txt1="Full Stack" txt2="Developer" />
                </div>
                {/* <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv img={thumbup} txt1="Best Design" txt2="Award" />
                </div> */}
                <div className="blur" style={{ background: "rgb(238 210 255" }} ></div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }} ></div>
            </div>
        </div>
    );
}

export default About;