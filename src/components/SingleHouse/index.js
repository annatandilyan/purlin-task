import React from "react";

import './style.css'

const SingleHouse = (props) => {

    const {City, Price, Address, Zip, Rooms, Bathrooms, id, LivingSqFt} = props;

    return (
        <>
            <div className='house-card'>
                <div className='house-data'>
                    <p>City-{City}</p>
                </div>
                <div className='house-data'>
                    <p>Address-{Address}</p>
                </div>
                <div className='house-data'>
                    <p>Zip-{Zip}</p>
                </div>
                <div className='house-data'>
                    <p>Price-${Price}</p>
                </div>
                <div className='house-data'>
                    <p>Rooms-{Rooms}</p>
                </div>
                <div className='house-data'>
                    <p>Bathrooms-{Bathrooms}</p>
                </div>
                <div className='house-data'>
                    <p>LivingSqFt-{LivingSqFt}</p>
                </div>
            </div>
        </>
    )
}
export default SingleHouse