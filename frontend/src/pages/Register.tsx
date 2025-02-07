import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import registerImg from '../assets/register.webp'
const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('register: ', {name, email,password})

  }

	return (
		<div className='flex'>
			<div className='w-full md:w-1/2  flex flex-col justify-center items-center p-8 md:p-12'>
				<form
					onSubmit={handleSubmit}
					className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'

				>
					<div className='flex justify-center mb-6'>
						<h2 className='text-xl font-medium'>Rabbit</h2>
					</div>
					<h2 className='text-2xl font-bold text-center mb-6'>Heyyy There!</h2>
					<p className='text-cenet mb-6'>
						Enter your email and password to log in
					</p>
					<div className='mb-4'>
						<label className='block text-sm font-semibold mb-2'>Name</label>
						<input
							type='name'
							className='w-full p-2 border rounded'
							placeholder='Enter your name'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-semibold mb-2'>Email</label>
						<input
							type='email'
							className='w-full p-2 border rounded'
							placeholder='Enter your email'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-semibold mb-2'>Password</label>
						<input
							type='password'
							className='w-full p-2 border rounded'
							placeholder='Enter your password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-400 hover:text-gray-100 transition-colors duration-300'
					>
						Sign Up
					</button>
					<p className='mt-6 text-center text-sm'>
						Already have an account?
						<Link
							to='/login'
							className='text-blue-500 ml-1 hover:text-blue-700'
						>
							Login
						</Link>
					</p>
				</form>
			</div>

			{/* Image */}
			<div className='hidden md:block w-1/2 bg-gray-800'>
				<div className='h-full flex flex-col justify-center items-center'>
          <img src={registerImg} alt="Login" className="h-[750px] w-full object-cover" />
        </div>
			</div>
		</div>
	)
}

export default Register
