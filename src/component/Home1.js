import React from 'react';
import CardImg1 from '../component/assets/img/image1.png';
import NonVegIcon from '../component/assets/img/nonVegIcon.png';

function Home1() {
    return (
        <div className='list'>
            <div className='foodImg'>
                <img src={CardImg1} alt='Image1' />
                <h6>Double cheese Burger and Fries <img src={NonVegIcon} /></h6>
            </div>
            <div className='text1'>
                <h6>Placed By</h6>
                <p>John Mathew</p>
                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
            <div className='text2'>
                <h6>Placed At</h6>
                <p>11 AM</p>
            </div>
            <div className='text3'>
                <h6>Cooking Instructions</h6>
                <p>Peanut Allergy</p>
                <p>Diabetic</p>
            </div>
            {/* <div className='text5'>
        <img src={Line} alt='Line' />
    </div> */}
            <div className='text4'>
                <h6>Status</h6>
                <button className='btn1'>Decline</button>
                <button className='btn2'>Accpet</button>
            </div>
        </div>
    )
}

export default Home1