import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, stars, description, img} = testiMonialDetail;
    const printStars = ()=> {
        const arrStars = []

        for(let i=0; i<stars; i++){
            arrStars.push( <FontAwesomeIcon icon={faStar} key={i} width={14}/> )
        }
        return arrStars
    }

    return (
        <div className="item">
            <div className="shadow-effect p-12 mt-16 rounded-2xl text-center">
                <img className="img-circle relative top-[-6rem] rounded-[50%] m-auto align-middle max-w-[90px] min-h-[90px]" src={img} alt='imgCircle'/>
                <h5 className='font-bold text-xl mt-[-5.5rem]'>{name}</h5>
                <p className='mb-1.5'>Mejor Comprador</p>
                <div className='flex justify-center gap-2'>
                    {printStars().map( viewStar => viewStar )}
                </div>
                <p className='mt-8'>{description}</p>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;