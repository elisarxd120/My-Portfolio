import { Button } from '../components/ui/button'

export default function About() {
	return (
		<section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50/10">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="max-w-4xl mx-auto text-center mt-10">
					<h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">About <span className="text-red-500">Me</span></h2>
					<div className="prose prose-lg max-w-3xl mx-auto mb-12">
						<p className="text-lg sm:text-xl leading-relaxed">
							Hi! My name is <span className="font-semibold text-red-500">Elisar R. Pamotongan</span>, and I'm a Computer Science student who is passionate about developing systems that empower users and exploring digital worlds that spark imagination. 
							I really love to convert vague goals into user-friendly, safe, and significant technology experiences bringing in the mood and the clear understanding of my work from anime, dramas, and games quite often. 
						</p>
						<p className="text-lg sm:text-xl leading-relaxed mt-4">
							As far as I'm concerned, programming is not just a craft but also a dialogue: every function is a choice and every UI is a story. Whether I'm coordinating student events or guiding my colleagues, 
							my mission is to establish communities that are meaningful and linked, instead of just making systems.
						</p>
					</div>
					
					{/* Resume download and stats */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
						<a href={"/EliResume.pdf"} className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-900 to-red-500 opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
							<Button className="relative px-8 py-6 text-lg text-color-white">
								<i className="bx bx-download mr-2 text-xl"></i>
								View Resume
							</Button>
						</a>
					</div>

					{/* Interface cards */}
					<div className="grid sm:grid-cols-2 mt-10 gap-6 mb-12">
						<div className="p-6 rounded-xl border-2 border-red-500/20 bg-white/5 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
							<h3 className="text-xl font-bold mb-4 text-red-500">Programming Languages</h3>
							<ul className="space-y-3 text-base">
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									Python
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									Java
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									JavaScript
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									HTML, CSS
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									Tailwind CSS
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									ReactJS
								</li>
							</ul>
						</div>
						<div className="p-6 rounded-xl border-2 border-red-500/20 bg-white/5 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
							<h3 className="text-xl font-bold mb-4 text-red-500">Design & Tools</h3>
							<ul className="space-y-3 text-base">
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									Visual Studio Code
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									Canva
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									Figma
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									Git & GitHub
								</li>
								<li className="flex items-center justify-center gap-2">
									<span className="w-2 h-2 bg-red-500 rounded-full"></span>
									Lucide Chart
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


