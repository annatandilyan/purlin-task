import React from "react";
import {Controller, useForm} from "react-hook-form";
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
        control,
        setValue,
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
                    {errors.city && <span className="errorMessage"> City is required</span>}
                    <Controller
                        className='popup-input'
                        name='City'
                        control={control}
                        {...register('city', {
                            required: true
                        })}
                        render={({field}) =>
                            <input
                                {...field}
                                placeholder='City'
                            />
                    }
                    />
                </div>
                <div>
                    {errors.address && <p className="errorMessage"> Address is required</p>}
                    <Controller
                        className='popup-input'
                        name='Address'
                        control={control}
                        {...register('address', {
                            required: true,
                        })}
                        render={({field}) =>
                            <input
                                placeholder={'Address'}
                                {...field}
                            />}
                    />
                </div>
                <div>
                    {errors.zip && <p className="errorMessage"> Zip is required</p>}
                    <Controller
                        className='popup-input'
                        name='Zip'
                        control={control}
                        {...register('zip', {
                            required: true,
                        })}
                        render={({field}) =>
                            <input
                                {...field}
                                placeholder={'Zip'}
                            />}
                    />
                </div>
                <div>
                    {errors.price && <p className="errorMessage"> Price is required</p>}
                    <Controller
                        className='popup-input'
                        name='Price'
                        control={control}
                        {...register('price', {
                            required: true,
                        })}
                        render={({field}) =>
                            <input
                                placeholder={'Price'}
                                {...field}
                            />}
                    />
                </div>
                <div>
                    {errors.rooms && <p className="errorMessage"> Rooms is required</p>}
                    <Controller
                        className='popup-input'
                        name='Rooms'
                        control={control}
                        {...register('rooms', {
                            required: true,
                        })}
                        render={({field}) =>
                            <input
                                {...field}
                                placeholder={'Rooms'}
                            />}
                    />
                </div>
                <div>
                    {errors.bathrooms && <p className="errorMessage"> Bathrooms is required</p>}
                    <Controller
                        className='popup-input'
                        name='Bathrooms'
                        control={control}
                        {...register('bathrooms', {
                            required: true,
                        })}
                        render={({field}) =>
                            <input
                                {...field}
                                placeholder={'Bathrooms'}
                            />}
                    />
                </div>
                <div>
                    {errors.livingSqFt && <p className="errorMessage"> LivingSqFt is required</p>}
                    <Controller
                        className='popup-input'
                        name='LivingSqFt'
                        control={control}
                        {...register('livingSqFt', {
                            required: true,
                        })}
                        render={({field}) =>
                            <input
                                {...field}
                                placeholder={'LivingSqFt'}
                            />}
                    />
                </div>
                <div className='popup-buttons'>
                    <Button>Save</Button>
                    <Button variant="secondary" onClick={() => dispatch(closePopup())}>Cancel</Button>
                </div>
            </form>
        </div>
    )
}
export default CreateHousePopup
