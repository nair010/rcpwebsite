import React, {useEffect} from 'react'
import './communitytth.css';
import { Link } from 'react-router-dom';
import aos from 'aos';
import Slider from 'react-slick';
import Footer from '../Footer';

function Communitytth() {
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
        centerPadding:0
    }
    return (
        <div className="communitytth">
            <div id="portiono" >
                    <Link to='/events'><h34>BACK TO EVENTS</h34></Link>
            </div>
            <div data-aos="flip-left" class="subport">
            <Slider {...settings}>
                <div  data-aos="zoom-in" class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h30>APNI PATHSHALA</h30>
                            
                           
                        </section>
                    </div>
                </div>
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>BLOOD DONATION CAMP</h32>
                           
                            <po class="dataoo">
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>MEDICAL CAMP WITH PARENT CLUB</h32>
                           
                            <po class="dataoo">
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Socio legal webinar</h32>
                           
                            <po class="dataoo">
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Thanks serve to police</h32>
                            
                            <po class="dataoo">
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Webinar on balance diet</h32>
                           
                            <h33>
                            </h33>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                        <h32>Cleanliness drive with bhuj Midtown </h32>
                            
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Share the warm clothes</h32>
                        
                            <po class="dataoo">
                            </po>
                        </section>
                    </div>
                </div>  
                <div  class="comser">
                    <div class="iceberg">
                        <section  class="dato">
                            <h32>Cyber security seminar</h32>
                            
                           
                            <po class="dataoo">
                            </po>
                        </section>
                    </div>
                </div>  
                </Slider>             
            </div>
            <div class="fotter">
            <Footer/>
            </div>
        </div>
    )
}

export default Communitytth
