import React, {useEffect} from 'react'
import './inter.css'
import { Link } from 'react-router-dom';
import aos from 'aos';
import Slider from 'react-slick';
import Footer from '../Footer';

function Inter() {
    useEffect(() => {
        aos.init({});
    }, []);
    const settings ={
        infinite:true,
        lazyload: true,
        fade:true,
        speed: 300,
        slideToshow:3,
        centerMode: true,
        centerPadding:0,
        autoplay: true,
        autoplaySpeed: 1100,
    }
    return (
        <div className="inter">
           <div id="portiono">
                    <Link to='/events'><h34>BACK TO EVENTS</h34></Link>
            </div>
            <div data-aos="flip-left" class="subport">
            <Slider {...settings}>
                <div  data-aos="zoom-in" class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h30>international youth day</h30>
                           
                            <po  class="dataoo">
                            </po>
                        </section>
                    </div>
                </div>
                
                </Slider>             
            </div>
            <div class="ftter">
            <Footer/>
            </div>
        </div>
    )
}

export default Inter
