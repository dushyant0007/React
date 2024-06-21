 

/*
    onChange = event handler used primarily with form elements
               ex <input>, <textarea>, <select>, <radio>
               Taggers a function every time the value of the input changes
*/

import {useState} from 'react';

function InputChange(){
    const [name,setName] = useState("");
    function handleNameChange(event){setName(event.target.value)}

    const [quantity,setQuantity] = useState();
    function handleQuantityChange(event){setQuantity(event.target.value )}

    const [payment,setPayment] = useState();
    function handlePaymentChange(event){setPayment(event.target.value )}

    const [shipping,setShipping] = useState();
    function handleShippingChange(event){setShipping(event.target.value )}


    return (
        <div className='counter-container'>
            <input value={name} placeholder='Write here ...' onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} placeholder="Units ..." onChange={handleQuantityChange} type='number' />
            <p>Quantity: {quantity}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master">Master</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                Pick Up
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>


            <div id="fdiv">
                <p>
                    This is the    First
                    <span>
                        Text
                    </span>
                </p>
                <p>This is the Second</p>
            </div>

        </div>
    );
}

export default InputChange;