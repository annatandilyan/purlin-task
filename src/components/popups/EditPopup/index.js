import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../Button";
import {useClickOutsideEffect} from "../../../helpers";
import {closePopup} from "../../../redux/slices/popupSlice";
import { editHouseThunk} from "../../../redux/thunks/userThunk";

import '../style.scss'
const EditPopup = () => {
    const userId = useSelector(state => state.users.userId)
    const {name, data} = useSelector(state => state.popup)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({defaultValues: data});

    useClickOutsideEffect(!!name, ()=>dispatch(closePopup()))
    const editHouse = (editData) => {
        dispatch(editHouseThunk({
            data: {...editData, agentId: userId},
            id: data?.id
        }))
        reset()
        dispatch(closePopup())
    }

    return (
        <div className={`popup ${name === 'edit' ? 'open' : ''}`}>
            <form className="popup-content" onSubmit={handleSubmit(editHouse)}>
                <div>
                    {errors.city && <span className="errorMessage"> City is required</span>}
                    <input
                        className='popup-input'
                        placeholder='City'
                        defaultValue={data?.city}
                        {...register('city', {
                            required: true
                        })}
                    />
                </div>
                <div>
                    {errors.address && <p className="errorMessage"> Address is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Address'
                        defaultValue={data?.address}
                        {...register('address', {
                            required: true,
                        })}
                    />
                </div>
                <div>
                    {errors.zip && <p className="errorMessage"> Zip is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Zip'
                        defaultValue={data?.zip}
                        {...register('zip', {
                            required: true,
                        })}
                    />
                </div>
             <div>
                 {errors.price && <p className="errorMessage"> Price is required</p>}
                 <input
                     className='popup-input'
                     placeholder='Price'
                     defaultValue={data?.price}
                     {...register('price', {
                         required: true,
                     })}
                 />
             </div>
               <div>
                   {errors.rooms && <p className="errorMessage"> Rooms is required</p>}
                   <input
                       className='popup-input'
                       placeholder='Rooms'
                       defaultValue={data?.rooms}
                       {...register('rooms', {
                           required: true,
                       })}
                   />
               </div>
                <div>
                    {errors.bathrooms && <p className="errorMessage"> Bathrooms is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Bathrooms'
                        defaultValue={data?.bathrooms}
                        {...register('bathrooms', {
                            required: true,
                        })}
                    />
                </div>
               <div>
                   {errors.livingSqFt && <p className="errorMessage"> LivingSqFt is required</p>}
                   <input
                       className='popup-input'
                       placeholder='LivingSqFt'
                       defaultValue={data?.livingSqFt}
                       {...register('livingSqFt', {
                           required: true,
                       })}
                   />
               </div>
                <div className='popup-buttons'>
                    <Button type='submit'>Save</Button>
                    <Button variant="secondary" onClick={() => dispatch(closePopup())}>Cancel</Button>
                </div>
            </form>
        </div>
    )
}
export default EditPopup
