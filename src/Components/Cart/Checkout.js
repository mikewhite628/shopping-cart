import React from 'react'

const Checkout = (props) => {
    const { show, closeCheckout } = props
    


    return (
        <>
        <div className={show ? "overlay" : "hide"} onClick={closeCheckout} />
        <div className={ show ? "modal" : "hide"}>
            <button onClick={closeCheckout}> x </button>
            <h1>And Thats A Wrap!</h1>
            <p> Thanks for "Checking Out" my project! </p>
        </div>
        </>
    )
}


export default Checkout