import {useEffect} from 'react';

export function useClickOutsideEffect(isPopupOpen, closePopup) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (isPopupOpen && !event.target.closest('.popup-content')) {
                closePopup();
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isPopupOpen]);
}