import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import SingleHouse from "../SingleHouse";
import {getHousesThunk} from "../../redux/thunks/housesThunk";

import './style.scss'
const HouseList = () => {
    const dispatch = useDispatch()
    const houses = useSelector(state => state.houses.houses)
    const userId = useSelector(state => state.users.userId)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getHousesThunk())
    }, [])

    return (
        <>
            <header className='header'>
                <h1>Houses</h1>
                    {!!userId && <button className='my-houses-button' onClick={() => {
                        navigate('/my-houses')
                    }}>My houses</button>}
            </header>
            <div className='house-list-container'>
                {houses?.map((elm, index) => (
                    <SingleHouse {...elm}/>
                ))}
            </div>
        </>
    )
}

export default HouseList
