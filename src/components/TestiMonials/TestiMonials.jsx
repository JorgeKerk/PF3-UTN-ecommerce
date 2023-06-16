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
        <section className="w-screen h-screen flex justify-center">
            <div className="container">
                <h4 className="font-semibold text-[2.5rem] mt-16 text-center">Clientes Felices</h4>
                <p className="text-center">No confíe solo en nuestra palabra: ¡vea lo que nuestros clientes satisfechos tienen que decir sobre sus experiencias comprando con nosotros!</p>
                <div className="row">
                    <div className='flex justify-center'>
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme mt-[2%]" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div className="item">
                                        <div className="bg-[var(--terciary-color)] p-12 mt-16 rounded-2xl text-center">
                                            <img className="img-circle relative top-[-6rem] rounded-[50%] m-auto align-middle max-w-[90px] min-h-[90px]" src='' alt=' '/>
                                            <h5 className='font-bold text-xl mt-[-5.5rem]'>Sin datos</h5>
                                            <p className='mb-1.5'> </p>
                                            <div className='flex justify-center gap-2'>
                                                <p> </p>
                                            </div>
                                            <p className='mt-8'> </p>
                                        </div>
                                    </div>:
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