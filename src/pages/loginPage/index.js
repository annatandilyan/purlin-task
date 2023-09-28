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
            <h1 className='login-title'>Welcome Home Sales Page</h1>
            <p className='desc'>Home sales page is valuable tool for
                both buyers and sellers in the real estate market.
                Buyers can use this platform to search for properties,
                compare options, and connect with real estate professionals,
                while sellers can use it to market their properties to a wide audience of potential buyers.
                This page has become an integral part of the real estate industry,
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
                <button onClick={() => navigate('/properties')} className='login-button'>Scip</button>
            </div>
            <SignUpPopup/>
        </div>

    )
}

export default LoginPage