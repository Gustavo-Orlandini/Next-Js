import Stripe from 'stripe'

console.log(process.env.STRIPE_SECRET_KEY, 'AAAAAAAAAAAAAAAAAAAAAA')

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop'
    }
})