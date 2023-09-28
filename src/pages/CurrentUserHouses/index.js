import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import SingleHouse from "../../components/SingleHouse";
import {openPopup} from "../../redux/slices/popupSlice";
import {getCurrentUserHousesThunk} from "../../redux/thunks/userThunk";
import CreateHousePopup from "../../components/popups/CreateHousePopup";
import Button from "../../components/Button";

import './styles.scss'
const CurrentUserHouses = () => {
    const userId = useSelector(state => state.users.userId)
    const currentUserHouses= useSelector(state => state.users.currentUserHouses)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUserHousesThunk(userId))
    }, [])

    return (
        <div className="current-houses-container">
            <header className='header'>
                <h1>My Houses</h1>
            </header>
            <div className="actions">
                <Button
                    variant="success"
                    onClick={(e)=>{
                        e.stopPropagation()
                        dispatch(openPopup({name:'create'}))
                    }}
                >
                    Create
                </Button>
            </div>
            <div className='house-list-container'>
                {currentUserHouses?.map((elm, index) => (
                    <SingleHouse isUser={true} {...elm}/>
                ))}
            </div>
            <CreateHousePopup/>
        </div>
    )
}

export default CurrentUserHouses
