import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import SingleHome from "../SingleHome";
import {getHomesThunk} from "../../redux/thunks/homesThunk";

import './style.css'
const RealEstateList = () => {
    const dispatch = useDispatch()
    const homes = useSelector(state => state.homes.homes)
    const userId = useSelector(state => state.users.userId)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getHomesThunk())
    }, [])

    return (
        <>
            <div className='title'>
                <h1>Homes</h1>
            </div>
            {!!userId && <button className='my-homes-button' onClick={() => {
                navigate('/myProperties')
            }}>My homes</button>}
            <div className='container'>
                {homes?.map((elm, index) => (
                    <SingleHome {...elm}/>
                ))}
            </div>
        </>
    )
}

export default RealEstateList