import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const allProjects = [
	{
		id: 1,
		title: 'Snake Game',
		tags: ['Java', 'Java Swing'],
		description: 'A unique charm and simplicity that has captivated players for decades.',
		link: 'https://github.com/elisarxd120/Snake-Game-Java',
		link2: 'https://docs.google.com/presentation/d/1zjlhPounmCVnsBliTbIRiMsPJEJuA7Go/edit?usp=sharing&ouid=101598005122259403730&rtpof=true&sd=true',
	},
	{
		id: 2,
		title: 'CS Calorie Tracker',
		tags: ['Java', 'Java OOP'],
		description: 'A personalized system to optimize calorie deficits for effective weight management.',
		link: 'https://github.com/elisarxd120/Cs-Calorie-Traker',
		link2: 'https://docs.google.com/document/d/1sAZGAxrEF82mTmgUP_C7VQ9PwVURhDpK/edit?usp=sharing&ouid=101598005122259403730&rtpof=true&sd=true',
	},
	{
		id: 3,
		title: 'QueuePoint System',
		tags: ['Html', 'CSS', 'Php', 'Sql'],
		description: 'A system in resolving the inconvenience and congestion during the traditional queueing process.',
		link: 'https://github.com/elisarxd120/QueuePoint-Project',
		link2: 'https://docs.google.com/document/d/1noOBznTrwTUZz1SVeRPws5rVebCKvfaOBzvxeRN0d6Q/edit?usp=sharing',
	},
	{
		id: 4,
		title: 'Delicious Ice Cream Shop Project',
		tags: ['Javascript', 'Html','CSS'],
		description: 'A family-owned ice cream shop dedicated to bringing you the finest and freshest ice cream. Our recipes have been passed down through generations, and we take pride in every scoop we serve.',
		link: 'https://github.com/elisarxd120/Ice-Cream-Shop-Project',
	}
]

const tabs = [
	{ key: 'all', label: 'All' },
	{ key: 'Java', label: 'Java' },
	{ key: 'Html', label: 'Html' },
	{ key: 'Php', label: 'Php' },
	{ key: 'Javascript', label: 'Javascript' },
]

export default function Projects() {
	const [active, setActive] = useState('Java')

	const filtered = useMemo(() => {
		if (active === 'all') return allProjects
		return allProjects.filter(p => p.tags.includes(active))
	}, [active])

	return (
		<section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-transparent to-gray-50/10 dark:from-transparent dark:to-gray-900/20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto space-y-8">
					<div className="flex flex-col sm:flex-row mt-10 justify-between gap-6 items-center">
						<h2 className="text-4xl sm:text-5xl font-bold tracking-tight">My <span className="text-red-500">Projects</span></h2>
						<div className="flex gap-2 flex-wrap justify-center">
							{tabs.map(t => (
								<Button 
									key={t.key} 
									variant={active === t.key ? 'default' : 'outline'} 
									onClick={() => setActive(t.key)}
									className={`px-6 ${active === t.key ? 'bg-red-500 hover:bg-red-600' : 'hover:border-red-500 hover:text-red-500'}`}
								>
									{t.label}
								</Button>
							))}
						</div>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{filtered.map(p => (
							<Card key={p.id} className="border-2 border-red-500/20 bg-white/5 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300">
								<CardHeader>
									<CardTitle>
										<h3 className="text-2xl text-red-500 font-bold">{p.title}</h3>
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-base text-muted-foreground">{p.description}</p>
									<div className="flex flex-wrap gap-2">
										{p.tags.map(t => (
											<span key={t} className="rounded-full bg-red-500/10 text-red-500 px-3 py-1 text-sm font-medium">{t}</span>
										))}
									</div>
									<div className="flex gap-4">
										{p.link && (
											<a href={p.link} target="_blank" rel="noopener noreferrer" 
											className="flex-1 border-2 border-red-500 text-red-500 py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-colors">
												<i className="bx bxl-github text-lg"></i> View Project
											</a>
										)}
										{p.link2 && (
											<a href={p.link2} target="_blank" rel="noopener noreferrer" 
											className="flex-1 border-2 border-red-500 text-red-500 py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-colors">
												<i className="bx bxs-file-doc text-xl"></i> View Docs
											</a>
										)}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}


