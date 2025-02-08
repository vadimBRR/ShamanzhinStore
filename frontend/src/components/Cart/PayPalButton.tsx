import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
const PayPalButton = ({amount, onSuccess, onError}:{amount: string, onSuccess: () => void, onError: () => void}) => {
	return (
		<PayPalScriptProvider
			options={{
				"clientId": import.meta.env.VITE_PAYPAL_CLIENT_ID,
          "currency": "USD"
          
			}}
		>
			<PayPalButtons
				style={{ layout: 'vertical' }}
				createOrder={(data, actions) => {
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: amount,
								},
							},
						],
					})
				}}
				onApprove={(data, actions) => {return actions.order!.capture().then(onSuccess)}}
        onError={onError}
			/>
		</PayPalScriptProvider>
	)
}

export default PayPalButton
