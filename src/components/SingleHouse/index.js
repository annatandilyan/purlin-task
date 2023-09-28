import React from "react";
import {useDispatch} from "react-redux";

import EditPopup from "../popups/EditPopup";
import {openPopup} from "../../redux/slices/popupSlice";
import {deleteHouseThunk} from "../../redux/thunks/userThunk";

import './style.css'

const SingleHouse = (props) => {
    const dispatch = useDispatch()
    const {city, price, address, zip, rooms, bathrooms, id, livingSqFt} = props;

    return (
        <>
            <div className='house-card'>
                <div className='house-data'>
                    <p>City-{city}</p>
                </div>
                <div className='house-data'>
                    <p>Address-{address}</p>
                </div>
                <div className='house-data'>
                    <p>Zip-{zip}</p>
                </div>
                <div className='house-data'>
                    <p>Price-${price}</p>
                </div>
                <div className='house-data'>
                    <p>Rooms-{rooms}</p>
                </div>
                <div className='house-data'>
                    <p>Bathrooms-{bathrooms}</p>
                </div>
                <div className='house-data'>
                    <p>LivingSqFt-{livingSqFt}</p>
                </div>
                {
                    props.isUser && <div className='house-buttons'>
                        <button onClick={(e) => {
                            e.stopPropagation()
                            dispatch(openPopup({name: 'edit', data: {city, price, address, zip, rooms, bathrooms, id, livingSqFt}}))
                        }}>Edit
                        </button>
                        <button className='button-remove' onClick={(e) => {
                            e.stopPropagation()
                            dispatch(deleteHouseThunk(id))
                        }}>Delete
                        </button>
                    </div>
                }
            </div>
            <EditPopup/>
        </>
    )
}
export default SingleHouse