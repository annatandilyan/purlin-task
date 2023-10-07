import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../Button";
import {useClickOutsideEffect} from "../../../helpers";
import {closePopup} from "../../../redux/slices/popupSlice";
import {editHouseThunk} from "../../../redux/thunks/userThunk";

import '../style.scss'

const EditPopup = () => {
    const userId = useSelector(state => state.users.userId)
    const {name, data} = useSelector(state => state.popup)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        formState: {errors, isSubmitSuccessful},
    } = useForm({defaultValues: data});

    useClickOutsideEffect(!!name, () => dispatch(closePopup()))
    const editHouse = (editData) => {
        dispatch(editHouseThunk({
            data: {...editData, agentId: userId},
            id: data?.id
        }))
        dispatch(closePopup())
    }
    useEffect(() => {
        // Set initial form values when the component mounts
        reset(data);
    }, [data]);

    return (
        <div className={`popup ${name === 'edit' ? 'open' : ''}`}>
            <form className="popup-content" onSubmit={handleSubmit(editHouse)}>
                <div>
                    {errors.city && <span className="errorMessage"> City is required</span>}
                    <Controller
                        className='popup-input'
                        name='City'
                        defaultValue={data?.city}
                        control={control}
                        {...register('city', {
                            required: true
                        })}
                        render={({field}) =>
                            <input
                                {...field}
                                placeholder={'City' }
                            />}
                    />
                </div>
                <div>
                    {errors.address && <p className="errorMessage"> Address is required</p>}
                    <Controller
                        className='popup-input'
                        name='Address'
                        control={control}
                        defaultValue={data?.address}
                        {...register('address', {
                            required: true,
                        })}
                        render={({field}) =>
                            <input
                                {...field}
                                placeholder={'Address'}
                            />}
                    />
                </div>
                <div>
                    {errors.zip && <p className="errorMessage"> Zip is required</p>}
                    <Controller
                        className='popup-input'
                        name='Zip'
                        control={control}
                        defaultValue={data?.zip}
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
                        defaultValue={data?.price}
                        {...register('price', {
                            required: true,
                        })}
                        render={({field}) =>
                            <input
                                {...field}
                                placeholder={'Price'}
                            />}
                    />
                </div>
                <div>
                    {errors.rooms && <p className="errorMessage"> Rooms is required</p>}
                    <Controller
                        className='popup-input'
                        name='Rooms'
                        control={control}
                        defaultValue={data?.rooms}
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
                        defaultValue={data?.bathrooms}
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
                        defaultValue={data?.livingSqFt}
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
export default EditPopup
