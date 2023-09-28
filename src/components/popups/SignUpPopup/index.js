import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {closePopup} from "../../../redux/slices/popupSlice";
import {useClickOutsideEffect} from "../../../helpers";
import {addNewUserThunk, getLoggedInUserThunk} from "../../../redux/thunks/userThunk";

import '../style.css'
const SignUpPopup = () => {
    const {name} = useSelector(state => state.popup)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    useClickOutsideEffect(!!name, () => dispatch(closePopup()))
    const onSubmit = (data) => {
        name === 'login' ? dispatch(getLoggedInUserThunk(data)) : dispatch(addNewUserThunk(data))
        dispatch(closePopup())
        navigate('/homes')
    }

    return (
        <div className={`popup ${name === 'signup' || name === 'login' ? 'open' : ''}`}>
            <form className="popup-content" onSubmit={handleSubmit(onSubmit)}>
                {
                    name === 'signup' && <>
                        <div>
                            {errors.name && <p className="errorMessage"> Name is required</p>}
                            <input
                                className='popup-input'
                                placeholder='Name'
                                {...register('name', {required: true})}
                            />
                        </div>
                        <div>
                            {errors.surname && <p className="errorMessage"> Surname is required</p>}
                            <input
                                className='popup-input'
                                placeholder='Surname'
                                {...register('surname', {required: true})}
                            />
                        </div>
                    </>
                }
                <div>
                    {errors.login && <p className="errorMessage">Login is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Login'
                        {...register('login', {required: true})}
                    />
                </div>
                <div>
                    {errors.password && <p className="errorMessage"> Password is required</p>}
                    <input
                        className='popup-input'
                        placeholder='Password'
                        {...register('password', {required: true})}
                    />
                </div>
                <div className='popup-buttons'>
                    <button>{name === 'signup' ? 'SignUp' : 'Login'}</button>
                    <button onClick={() => dispatch(closePopup())}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpPopup