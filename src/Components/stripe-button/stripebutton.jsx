import React from 'react'
import Checkout from 'react-stripe-checkout'
import Logo from '../../logofile/logo.svg'

function Stripebutton({price}) {
    const priceforstripe = price*100
    const publishkey = 'pk_test_VZXLGKrPcmW0KRudkoVGS3JC00yBtGT0Yk'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }
    return (
        <Checkout
        label='Pay Now'
        name='maple market'
        billingAddress
        shippingAddress
        image={Logo}
        description={`Your Total is ${price}`}
        amount={priceforstripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey= {publishkey}
        />
    )
}

export default Stripebutton
