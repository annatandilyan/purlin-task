import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import SingleHouse from "../SingleHouse";
import {getHousesThunk} from "../../redux/thunks/housesThunk";

import './style.css'
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
            <div className='title'>
                <h1>Houses</h1>
            </div>
            {!!userId && <button className='my-houses-button' onClick={() => {
                navigate('/myProperties')
            }}>My houses</button>}
            <div className='container'>
                {houses?.map((elm, index) => (
                    <SingleHouse {...elm}/>
                ))}
            </div>
        </>
    )
}

export default HouseList