import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../Button";
import {useClickOutsideEffect} from "../../../helpers";
import {closePopup} from "../../../redux/slices/popupSlice";
import {createNewHouseThunk} from "../../../redux/thunks/userThunk";

import '../style.scss'

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
                    {errors.city && <p className="errorMessage"> City is required</p>}
                    <input
                        className='popup-input'
                        placeholder='City'
                        {...register('city', {required: true})}
                    />
                </div>
                <div>
                    {errors.address && <p className="errorMessage"> Address is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Address'
                        {...register('address', {required: true})}
                    />
                </div>
                <div>
                    {errors.zip && <p className="errorMessage"> Zip is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Zip'
                        {...register('zip', {required: true})}
                    />
                </div>

                <div>
                    {errors.price && <p className="errorMessage"> Price is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Price'
                        {...register('price', {required: true})}
                    />
                </div>
                <div>
                    {errors.rooms && <p className="errorMessage"> Rooms is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Rooms'
                        {...register('rooms', {required: true})}
                    />
                </div>
                <div>
                    {errors.bathrooms && <p className="errorMessage"> Bathrooms is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Bathrooms'
                        {...register('bathrooms', {required: true})}
                    />
                </div>
                <div>
                    {errors.livingSqFt && <p className="errorMessage"> LivingSqFt is required</p>}
                    <input
                        className='popup-input'
                        placeholder='LivingSqFt'
                        {...register('livingSqFt', {required: true})}
                    />
                </div>
                <div className='popup-buttons'>
                    <Button>Create</Button>
                    <Button variant="secondary" onClick={() => dispatch(closePopup())}>Cancel</Button>
                </div>
            </form>
        </div>
    )
}
export default CreateHousePopup
