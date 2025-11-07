import { useState } from 'react'
import { Button } from '../components/ui/button'
import profilePhoto from '../assets/elisar_pic.JPG'

export default function Home() {
    const [reaction, setReaction] = useState(null)
	return (
		<section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50/10">
			<div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<div className=" mt-10 grid gap-12 md:grid-cols-2 items-center justify-items-center">
					<div className="space-y-6 text-center max-w-xl">
						<h1 className="text-4xl sm:text-5xl md:text-6xl text-red-500 font-bold tracking-tight leading-tight">Elisar Pamotongan</h1>
						<p className="text-muted-foreground text-lg sm:text-xl">is a dedicated <span className="text-red-500">student leader</span> and passionate developer known for creating simple yet highly functional websites.
							With a strong work ethic and a heart for service, I blend technical skill with purpose-driven leadership to make a meaningful impact in every project I take on.
						</p>
						<div className="flex gap-4 justify-center ">
							<a href="#projects" className="border-2 rounded-lg border-red-500 hover:bg-red-500 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
								<Button className="text-lg px-6 py-2">View Projects</Button>
							</a>
							<a href="#contact" className="border-2 rounded-lg border-red-500 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
								<Button variant="outline" className="text-lg px-6 py-2">Contact Me</Button>
							</a>
						</div>
					</div>
					<div className="flex flex-col items-center max-w-md w-full">
						<div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-red-500 bg-card shadow-xl transform hover:scale-105 transition-transform duration-300">
							<img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
						</div>
						{/* Message */}
						{reaction && (
							<p className="mt-4 text-lg font-medium text-red-500">
								You {reaction.toLowerCase()} this picture <span className="text-2xl">{
									{
										'Like': '👍',
										'Heart': '❤️',
										'Haha': '😂',
										'Sad': '😢',
										'Wow': '😮',
										'Angry': '😡'
									}[reaction]
								}</span>
							</p>
						)}
						{/* Reactions UI */}
						<div className="mt-4">
							<div className="flex flex-wrap gap-3 justify-center">
								{[
									{ key: 'Like', label: '👍' },
									{ key: 'Heart', label: '❤️' },
									{ key: 'Haha', label: '😂' },
									{ key: 'Sad', label: '😢' },
									{ key: 'Wow', label: '😮' },
									{ key: 'Angry', label: '😡' }
								].map((r) => (
									<button
										key={r.key}
										onClick={() => setReaction(r.key)}
										className={`p-3 rounded-full border-2 bg-white text-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${
											reaction === r.key 
												? 'border-red-500 ring-2 ring-red-500 ring-offset-2' 
												: 'border-gray-200 hover:border-red-300'
										}`}>
										<span>{r.label}</span>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


