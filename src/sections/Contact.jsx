import { useEffect, useMemo, useState } from 'react'

export default function Contact() {
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	const [submitted, setSubmitted] = useState(false)
	const [errors, setErrors] = useState({})

	const isValidEmail = (v) => /.+@.+\..+/.test(v)

	const validations = useMemo(() => ({
		name: form.name.trim().length >= 2,
		email: isValidEmail(form.email),
		message: form.message.trim().length >= 10
	}), [form])

	useEffect(() => {
		const nextErrors = {}
		if (!validations.name) nextErrors.name = 'Please enter at least 2 characters.'
		if (!validations.email) nextErrors.email = 'Please enter a valid email.'
		if (!validations.message) nextErrors.message = 'Message must be at least 10 characters.'
		setErrors(nextErrors)
	}, [validations])

	const onSubmit = (e) => {
		e.preventDefault()
		if (Object.keys(errors).length === 0) {
			setSubmitted(true)
		}
	}

	return (
		<section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50/10">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
				<div className="flex flex-col items-center text-center">
					<h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide">Let's <span className="text-red-500">Connect</span></h2>
					<p className="mb-8 text-lg sm:text-xl max-w-2xl">Whether you have a question, a collaboration idea, or just want to say hi—I'd love to hear from you. Drop me a message and I'll get back to you as soon as I can!</p>
					<div className="flex flex-wrap gap-4 justify-center ">
						<a href="mailto:elisarxd120@gmail.com" className="border border-red-500  text-red-500 py-3 px-6 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-300 transitionbackdrop-blur-sm shadow-lg transform hover:scale-110 hover:text-black transition-all duration-300">
							<i className="bx bx-envelope text-xl"></i>Email Me
						</a>
						<a href="https://github.com/elisarxd120" target="_blank" rel="noopener noreferrer" 
						className="border border-red-500 text-red-500 py-3 px-6 rounded-full flex items-center gap-2 backdrop-blur-sm shadow-lg transform hover:scale-110 hover:bg-gray-300 hover:text-black transition-all duration-300">
							<i className="bx bxl-github text-xl"></i>GitHub
						</a>
						<a href="https://www.linkedin.com/in/elisar-pamotongan-17613234a/" target="_blank" rel="noopener noreferrer" 
						className="border border-red-500 text-red-500 py-3 px-6 rounded-full flex items-center gap-2 backdrop-blur-sm shadow-lg transform hover:scale-110 hover:bg-gray-300 hover:text-black transition-all duration-300">
							<i className="bx bxl-linkedin-square text-xl"></i>LinkedIn
						</a>
						<a href="https://www.instagram.com/rivas.elisar/" target="_blank" rel="noopener noreferrer" 
						className="border border-red-500 text-red-500 py-3 px-6 rounded-full flex items-center gap-2 backdrop-blur-sm shadow-lg transform hover:scale-110 hover:bg-gray-300 hover:text-black transition-all duration-300">
							<i className="bx bxl-instagram-alt text-xl"></i>Instagram
						</a>
						<a href="https://www.facebook.com/rivas.elisar/" target="_blank" rel="noopener noreferrer" 
						className="border border-red-500 text-red-500 py-3 px-6 rounded-full flex items-center gap-2 backdrop-blur-sm shadow-lg transform hover:scale-110 hover:bg-gray-300 hover:text-black transition-all duration-300">
							<i className="bx bxl-facebook text-xl"></i>Facebook
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}


