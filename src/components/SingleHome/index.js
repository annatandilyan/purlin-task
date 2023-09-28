import React from "react";

import './style.css'

const SingleHome = (props) => {

    const {City, Price, Address, Zip, Rooms, Bathrooms, id, LivingSqFt} = props;

    return (
        <>
            <div className='home-card'>
                <div className='home-data'>
                    <p>City-{City}</p>
                </div>
                <div className='home-data'>
                    <p>Address-{Address}</p>
                </div>
                <div className='home-data'>
                    <p>Zip-{Zip}</p>
                </div>
                <div className='home-data'>
                    <p>Price-${Price}</p>
                </div>
                <div className='home-data'>
                    <p>Rooms-{Rooms}</p>
                </div>
                <div className='home-data'>
                    <p>Bathrooms-{Bathrooms}</p>
                </div>
                <div className='home-data'>
                    <p>LivingSqFt-{LivingSqFt}</p>
                </div>
            </div>
        </>
    )
}
export default SingleHome