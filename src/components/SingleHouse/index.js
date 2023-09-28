import React from "react";
import {useDispatch} from "react-redux";

import EditPopup from "../popups/EditPopup";
import {openPopup} from "../../redux/slices/popupSlice";
import {deleteHouseThunk} from "../../redux/thunks/userThunk";
import Button from "../Button";

import './style.scss'

const SingleHouse = (props) => {
    const dispatch = useDispatch()
    const {city, price, address, zip, rooms, bathrooms, id, livingSqFt} = props;

    return (
        <>
            <div className='house-card'>
                <div className='house-data'>
                    <strong>
                        City :
                    </strong>
                    <span>{city}</span>
                </div>
                <div className='house-data'>
                    <strong>
                        Address :
                    </strong>
                    <span>{address}</span>
                </div>
                <div className='house-data'>
                    <strong>
                        Zip Code :
                    </strong>
                    <span>{zip}</span>
                </div>
                <div className='house-data'>
                    <strong>
                        Price :
                    </strong>
                    <span>{price}</span>
                </div>
                <div className='house-data'>
                    <strong>
                        Rooms :
                    </strong>
                    <span>{rooms}</span>
                </div>
                <div className='house-data'>
                    <strong>
                        Bathrooms :
                    </strong>
                    <span>{bathrooms}</span>
                </div>
                <div className='house-data'>
                    <strong>
                        LivingSqFt :
                    </strong>
                    <span>{livingSqFt}</span>
                </div>
                {
                    props.isUser && <div className='house-buttons'>
                        <Button onClick={(e) => {
                            e.stopPropagation()
                            dispatch(openPopup({name: 'edit', data: {city, price, address, zip, rooms, bathrooms, id, livingSqFt}}))
                            }}
                            variant="primary"
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={(e) => {
                                e.stopPropagation()
                                dispatch(deleteHouseThunk(id))
                            }}
                            variant="danger"
                        >
                            Delete
                        </Button>
                    </div>
                }
            </div>
            <EditPopup/>
        </>
    )
}
export default SingleHouse
