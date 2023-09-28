import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {openPopup} from "../../redux/slices/popupSlice";
import SignUpPopup from "../../components/popups/SignUpPopup";

import './style.css'
const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div>
            <h1 className='login-title'>Welcome House Sales Page</h1>
            <p className='desc'>House sales page is valuable tool for
                both buyers and sellers in the house market.
                Buyers can use this platform to search for properties,
                compare options, and connect with house professionals,
                while sellers can use it to market their properties to a wide audience of potential buyers.
                This page has become an integral part of the house industry,
                streamlining the process of buying and selling properties in the digital age.</p>
            <div className='login-buttons'>
                <button onClick={(e) => {
                    e.stopPropagation()
                    dispatch(openPopup({name: 'login'}))
                }} className='login-button'>Log in
                </button>
                <button onClick={(e) => {
                    e.stopPropagation()
                    dispatch(openPopup({name: 'signup'}))
                }} className='login-button'>Sign up
                </button>
                <button onClick={() => navigate('/houses')} className='login-button'>Skip</button>
            </div>
            <SignUpPopup/>
        </div>

    )
}

export default LoginPage