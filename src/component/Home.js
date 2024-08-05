import React from 'react'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../component/assets/img/header.png'
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GoListUnordered } from "react-icons/go";
import { GoCodeReview } from "react-icons/go";
import CardImg1 from '../component/assets/img/image1.png';
import NonVegIcon from '../component/assets/img/nonVegIcon.png';
import Home1 from './Home1';
// import Line from '../component/assets/img/Vector 1.png';
import { CiAlarmOff } from "react-icons/ci";




function Home() {
    return (
        <div className='background'>
            {/* Nav */}
            <div className='navTitle col-6'>
                <img src={Header} alt='Nav' />
            </div>
            <div className='navbartitle'>
                {/* <div className='navlogo'>
                    <h2>The Chef Lane</h2>
                </div> */}
                <div className=''>

                </div>
            </div>
            <div className='row menubg'>
                <div className='menuBar1 col-2'>
                    <div className='menu'>
                        <a>< IoPerson />Profile </a>
                        <a><FaLocationDot />Address</a>
                        <a><BiSolidFoodMenu />Menu</a>
                        <a className='order'><GoListUnordered />Orders</a>
                        <a><GoCodeReview />Reating and Review</a>
                    </div>
                </div>
                <div className='menubar2 col-8'>
                    <div className='filter'>
                        <h3>Orders</h3>
                        <div className='row'>
                            <divhi className='ho'>
                                <select className='filter1'>
                                    <option className='filteroption'>
                                        <button>Filter</button>
                                    </option>
                                </select>
                            </divhi>
                        </div>
                    </div>
                    <hr />
                    <div className='orders'>
                        <h4>Order Requests</h4>
                    </div>
                    {/* <div className='list'>
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
                        </div> */}
                    {/* <div className='text5'>
                            <img src={Line} alt='Line' />
                        </div> */}
                    {/* <div className='text4'>
                            <h6>Status</h6>
                            <button className='btn1'>Decline</button>
                            <button className='btn2'>Accpet</button>
                        </div> */}
                    <Home1 />
                    <Home1 />
                    <Home1 />
                    <Home1 />
                    <Home1 />
                </div>
            </div>
            {/* <div className='hrline'>
                <hr />
            </div> */}
        </div>



        //     {/* // <div>
        // //     <div className='row'>
        // //     <div className='col-3'>
        // //      <h1>Hello</h1>
        // //     </div>
        // //     <div className='col-9'>
        // //      <h1>Hello</h1>
        // //     </div>

        // //     </div>
        // // </div>  */}
        // </div>



    )
}

export default Home