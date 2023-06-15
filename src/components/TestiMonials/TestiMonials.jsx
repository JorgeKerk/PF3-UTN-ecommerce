import React from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import userPic from '../../image/user-one.png';
import './TestiMonials.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'Shawn Mendes',
            description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."',
            stars: 5,
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Harry Styles',
            description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."',
            stars: 5,
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Selena Gomz',
            description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."',
            stars: 5,
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."',
            stars: 5,
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h4 className="minititle text-center w-screen">Clientes Felices</h4>
                <p className="text-center w-screen">No confíe solo en nuestra palabra: ¡vea lo que nuestros clientes satisfechos tienen que decir sobre sus experiencias comprando con nosotros!</p>
                <div className="row">
                    <div className='flex justify-center w-screen'>
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                // testiMonials.length === 0 ?
                                //     <div class="item">
                                //         <div class="shadow-effect">
                                //             <img class="img-circle" src={userPic} />

                                //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                //         </div>
                                //         <div class="testimonial-name">
                                //             <h5>Rajon Rony</h5>
                                //             <small>ITALY</small>
                                //         </div>
                                //     </div> :
                                    testiMonials.map((testiMonialDetail, ind) => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={ind} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;