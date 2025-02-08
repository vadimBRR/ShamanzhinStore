import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
const PayPalButton = ({
	amount,
	onSuccess,
	onError,
}: {
	amount: number
	onSuccess: (details: any) => void
	onError: () => void
}) => {
	return (
		<PayPalScriptProvider
			options={{
				clientId:
					'AbEy0Al6UkeEVNBADgJhwScVHNFfq2pSU5HHDzuK40tY2GBNPLr4cAUd6Vk-eij2fx88J-_-y8VgDlUW',
				currency: 'USD',
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
				onApprove={(data, actions) => {
					return actions.order!.capture().then(onSuccess)
				}}
				onError={onError}
			/>
		</PayPalScriptProvider>
	)
}

export default PayPalButton
