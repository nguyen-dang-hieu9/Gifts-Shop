import React from "react";
import './AboutUs.scss'
import pic1 from "../../assets/images/AboutUs/1.webp";
import pic2 from "../../assets/images/AboutUs/2.jpg";
import pic3 from "../../assets/images/AboutUs/3.webp";
import pic4 from "../../assets/images/AboutUs/4.webp";
import pic5 from "../../assets/images/AboutUs/5.png";
import pic6 from "../../assets/images/AboutUs/6.webp";
import pic7 from "../../assets/images/AboutUs/7.webp";
import pic8 from "../../assets/images/AboutUs/8.webp";
import pic9 from "../../assets/images/AboutUs/9.webp";
import pic10 from "../../assets/images/AboutUs/10.jpg";
import pic11 from "../../assets/images/AboutUs/11.jpg";

const AboutUs = () => {
    return (
        <div className="container-img">
            <section className="aboutus">
                <img src={pic1} alt="pic1" className="aboutus-img"/>
            </section>
            <section className="aboutus">
                <img src={pic2} alt="pic2" className="aboutus-img"/>
                <h5 className="text-aboutus">We made a video to show you who we are and what we're becoming. Check it out!</h5>
            </section>
            <section className="aboutus">
                <img src={pic3} alt="pic3" className="aboutus-img"/>
            </section>
            <section className="aboutus">
                <img src={pic4} alt="pic4" className="aboutus-img"/>
            </section>
            <section className="aboutus">
                <img src={pic5} alt="pic5" className="aboutus-img"/>
            </section>
            <section className="aboutus">
                <img src={pic6} alt="pic6" className="aboutus-img"/>
            </section>
            <section className="aboutus">
                <img src={pic7} alt="pic7" className="aboutus-img"/>
            </section>
            <section className="aboutus">
                <img src={pic8} alt="pic8" className="aboutus-img"/>
            </section>
            <section>
                <img src={pic9} alt="pic9" className="aboutus-img"/>
            </section>
            <section className="aboutus">
                <img src={pic10} alt="pic10" className="aboutus-img"/>
            </section>
            <section className="aboutus">
                <img src={pic11} alt="pic11" className="aboutus-img"/>
            </section>
        </div>
    );
};

export default AboutUs;
