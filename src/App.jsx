import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { Footer } from './components/Footer'
import Photologo from './assets/elisarlogo.png'


export default function App() {
	const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

	useEffect(() => {
		const root = document.documentElement
		if (theme === 'dark') {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<div className="min-h-screen bg-background text-foreground dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
			<nav className="sticky top-0 z-50 bg-red-600/95 dark:bg-gray-900/90 backdrop-blur-md border-b border-red-700/20 dark:border-gray-700/30 shadow-lg">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
					<div className="text-2xl font-bold">
						<img src={Photologo} alt="Logo" className="w-auto h-14 sm:h-16 inline-block transform hover:scale-105 transition-transform duration-300" />
					</div>
					<div className="flex gap-4 sm:gap-8 text-center text-sm sm:text-base font-medium">
						<a href="#home" className="hover:text-underline hover:text-red-200 dark:hover:text-red-400 transition-colors">Home</a>
						<a href="#about" className="hover:text-red-200 dark:hover:text-red-400 transition-colors">About</a>
						<a href="#projects" className="hover:text-red-200 dark:hover:text-red-400 transition-colors">Projects</a>
						<a href="#contact" className="hover:text-red-200 dark:hover:text-red-400 transition-colors">Contact</a>
					</div>
					<div className="border-2 border-red-400/50 dark:border-red-700/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
						<Button 
							variant="outline" 
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className="text-xl hover:bg-red-500/10 dark:hover:bg-red-900/20"
						>
							{theme === 'dark' ? '☀️' : '🌑'}
						</Button>
					</div>
				</div>
			</nav>
			<main>

				<Home />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</div>
	)
}


