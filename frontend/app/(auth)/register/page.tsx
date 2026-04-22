'use client'

import AuthForm from '@/components/input/input'

export default function RegisterPage() {
	return (
		<>
			<AuthForm
				type="register"
				onSubmit={(data) => console.log('register', data)}
			/>
		</>
		
	)
}