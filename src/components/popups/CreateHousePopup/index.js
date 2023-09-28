import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {useClickOutsideEffect} from "../../../helpers";
import {closePopup} from "../../../redux/slices/popupSlice";
import {createNewHouseThunk} from "../../../redux/thunks/userThunk";

import '../style.css'

const CreateHousePopup = () => {
    const userId = useSelector(state => state.users.userId)
    const {name, data} = useSelector(state => state.popup)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    useClickOutsideEffect(!!name, ()=>dispatch(closePopup()))
    const createHouse = (datas) => {
        dispatch(createNewHouseThunk({...datas, agentId: userId}))
        dispatch(closePopup())
    }

    return (
        <div className={`popup ${name === 'create' ? 'open' : ''}`}>
            <form className="popup-content" onSubmit={handleSubmit(createHouse)}>
                <div>
                    {errors.type && <p className="errorMessage"> Type is required</p>}
                    <input
                        className='popup-input'
                        placeholder='City'
                        {...register('city', {required: true})}
                    />
                </div>
                <div>
                    {errors.rooms && <p className="errorMessage"> Rooms is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Address'
                        {...register('address', {required: true})}
                    />
                </div>
                <div>
                    {errors.location && <p className="errorMessage"> Location is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Zip'
                        {...register('zip', {required: true})}
                    />
                </div>

                <input
                    className='popup-input'
                    placeholder='Price'
                    defaultValue={name === 'edit' ? data.price : ''}
                    {...register('price', {required: true})}
                />
                <input
                    className='popup-input'
                    placeholder='Rooms'
                    defaultValue={name === 'edit' ? data.image : ''}
                    {...register('rooms', {required: true})}
                />
                <input
                    className='popup-input'
                    placeholder='BathRooms'
                    defaultValue={name === 'edit' ? data.image : ''}
                    {...register('bathrooms', {required: true})}
                />
                <input
                    className='popup-input'
                    placeholder='LivingSqFt'
                    defaultValue={name === 'edit' ? data.image : ''}
                    {...register('livingSqFt', {required: true})}
                />
                <div className='popup-buttons'>
                    <button>Create</button>
                    <button onClick={() => dispatch(closePopup())}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default CreateHousePopup