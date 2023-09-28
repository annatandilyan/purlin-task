import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import SingleHouse from "../../components/SingleHouse";
import {openPopup} from "../../redux/slices/popupSlice";
import {getCurrentUserHousesThunk} from "../../redux/thunks/userThunk";
import CreateHousePopup from "../../components/popups/CreateHousePopup";


const CurrentUserHouses = () => {
    const userId = useSelector(state => state.users.userId)
    const currentUserHouses= useSelector(state => state.users.currentUserHouses)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUserHousesThunk(userId))
    }, [])

    return (
        <div>
            <button onClick={(e)=>{
                e.stopPropagation()
                dispatch(openPopup({name:'create'}))
            }}>Create</button>
            <div className='container'>
                {currentUserHouses?.map((elm, index) => (
                    <SingleHouse isUser={true} {...elm}/>
                ))}
            </div>
            <CreateHousePopup/>
        </div>
    )
}

export default CurrentUserHouses