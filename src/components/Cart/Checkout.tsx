import React, { useRef, useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import orderApi from '../../api/orderApi'
import './Checkout.scss'

const isEmpty = (value: any): boolean => {
    return value.trim().length === 0
}
const isFiveChars = (value: any): boolean => {
    return value.trim().length === 5
}

export default function Checkout(props: any) {

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })

    const nameInputRef: any = useRef()
    const streetInputRef: any = useRef()
    const postalCodeInputRef: any = useRef()
    const cityInputRef: any = useRef()

    const nameControClasses = `control ${formInputsValidity.name ? "" : "invalid"}`
    const streetControClasses = `control ${formInputsValidity.street ? "" : "invalid"}`
    const postalControClasses = `control ${formInputsValidity.postalCode ? "" : "invalid"}`
    const cityControClasses = `control ${formInputsValidity.city ? "" : "invalid"}`



    const items = useSelector((state: RootStateOrAny) => state.cart.items)
    const confirmHandler = (event: any) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            user: {
                name: enteredName,
                street: enteredStreet,
                city: enteredCity,
                postalCode: enteredPostalCode,
            },
            items: items
        })

    };

    return (
        <form onSubmit={confirmHandler} className="form-checkout" >
            <div className={nameControClasses}>
                <label htmlFor="name">Your name</label>
                <input ref={nameInputRef} type="text" id="name"></input>
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControClasses}>
                <label htmlFor="street">Street</label>
                <input ref={streetInputRef} type="text" id="street"></input>
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalControClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input ref={postalCodeInputRef} type="text" id="postal"></input>
                {!formInputsValidity.postalCode && <p>Please enter a valid postal code (5 characters long)!</p>}
            </div>
            <div className={cityControClasses}>
                <label htmlFor="city">City</label>
                <input ref={cityInputRef} type="text" id="city"></input>
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className="actions">
                <button onClick={props.onCancel} className="btn-cancel">Cancel</button>
                <button type="submit" className="btn-confirm">Confirm</button>
            </div>
        </form>
    )
}


