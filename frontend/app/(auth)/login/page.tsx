'use client'

import AuthForm from '@/components/input/input'

export default function LoginPage() {
	return (
		<>
			<AuthForm
				type="login"
				onSubmit={(data) => console.log('login', data)}
			/>
		</>
	)
}