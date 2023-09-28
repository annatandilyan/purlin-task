import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {useClickOutsideEffect} from "../../../helpers";
import {closePopup} from "../../../redux/slices/popupSlice";
import { editHouseThunk} from "../../../redux/thunks/userThunk";

import '../style.scss'
import Button from "../../Button";
const EditPopup = () => {
    const userId = useSelector(state => state.users.userId)
    const {name, data} = useSelector(state => state.popup)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    useClickOutsideEffect(!!name, ()=>dispatch(closePopup()))
    const editHouse = (datas) => {
        dispatch(editHouseThunk({
            data: {...datas, agentId: userId},
            id: data?.id
        }))
        dispatch(closePopup())
    }

    return (
        <div className={`popup ${name === 'edit' ? 'open' : ''}`}>
            <form className="popup-content" onSubmit={handleSubmit(editHouse)}>
                <div>
                    {errors.City && <span className="errorMessage"> City is required</span>}
                    <input
                        className='popup-input'
                        placeholder='City'
                        defaultValue={data?.city}
                        {...register('city', {required: true})}
                    />
                </div>
                <div>
                    {errors.Adress && <p className="errorMessage"> Address is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Address'
                        defaultValue={data?.address}
                        {...register('address', {required: true})}
                    />
                </div>
                <div>
                    {errors.Zip && <p className="errorMessage"> Zip is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Zip'
                        defaultValue={data?.zip}
                        {...register('zip', {required: true})}
                    />
                </div>

                <input
                    className='popup-input'
                    placeholder='Price'
                    defaultValue={data?.price}
                    {...register('price', {required: true})}
                />
                <input
                    className='popup-input'
                    placeholder='Rooms'
                    defaultValue={data?.rooms}
                    {...register('rooms', {required: true})}
                />
                <input
                    className='popup-input'
                    placeholder='Bathrooms'
                    defaultValue={data?.bathrooms}
                    {...register('bathrooms', {required: true})}
                />
                <input
                    className='popup-input'
                    placeholder='LivingSqFt'
                    defaultValue={data?.livingSqFt}
                    {...register('livingSqFt', {required: true})}
                />
                <div className='popup-buttons'>
                    <Button>Save</Button>
                    <Button variant="secondary" onClick={() => dispatch(closePopup())}>Cancel</Button>
                </div>
            </form>
        </div>
    )
}
export default EditPopup
