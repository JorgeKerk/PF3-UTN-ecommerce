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
            <div className="shadow-effect">
                <img className="img-circle" src={img} alt='imgCircle'/>
                <h5 className='customerName'>{name}</h5>
                <p className='topbuyer'>Mejor Comprador</p>
                <div className='flex justify-center gap-2'>
                    {printStars().map( viewStar => viewStar )}
                </div>
                <p className='descriptionCustomer'>{description}</p>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;