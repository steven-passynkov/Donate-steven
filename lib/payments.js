import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(`{$process.env.NEXT_PUBLIC_STRIPE_API_KEY}`)

export async function initiateCheckout({lineItms} = {}){

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
        mode:'payment',
        lineItms,
        successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelURL: window.location.origin
    })

}