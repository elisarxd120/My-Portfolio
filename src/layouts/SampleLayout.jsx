import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'

export default function SampleLayout() {
	return (
		<div className="min-h-screen">
			<section className="bg-white text-black dark:bg-gray-900 dark:text-white border-b" id="sample-hero">
				<div className="container mx-auto px-4 py-16 sm:py-24">
					<h1 className="text-4xl sm:text-5xl font-extrabold">Your Name</h1>
					<p className="mt-3 max-w-2xl text-lg">Short headline about what you do. This section is intentionally high-contrast so you can see it even if theme tokens fail.</p>
					<div className="mt-6 flex gap-3">
						<a href="#sample-projects"><Button>See Projects</Button></a>
						<a href="#sample-contact"><Button variant="outline">Contact</Button></a>
					</div>
				</div>
			</section>

			<section className="bg-gray-50 text-black dark:bg-gray-800 dark:text-white border-b" id="sample-about">
				<div className="container mx-auto px-4 py-12">
					<h2 className="text-2xl font-bold">About</h2>
					<div className="mt-6 grid gap-6 sm:grid-cols-2">
						<div className="space-y-3">
							<p>Write a concise bio. Mention your core skills and interests.</p>
							<ul className="list-disc list-inside">
								<li>React, Hooks, Context</li>
								<li>TailwindCSS, shadcn/UI</li>
								<li>Testing, CI/CD</li>
							</ul>
						</div>
						<div className="rounded-lg border bg-white text-black dark:bg-gray-900 dark:text-white p-6">
							<p className="text-sm opacity-80">Tip: Replace this entire SampleLayout once you confirm styles render correctly.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white text-black dark:bg-gray-900 dark:text-white border-b" id="sample-projects">
				<div className="container mx-auto px-4 py-12">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold">Projects</h2>
						<div className="text-sm">Sample cards</div>
					</div>
					<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{[1,2,3].map(i => (
							<Card key={i}>
								<CardHeader>
									<CardTitle>Project {i}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm opacity-80">Brief description goes here. Replace with your real project.</p>
									<div className="mt-4 flex gap-2 text-xs">
										<span className="rounded-full bg-black/10 dark:bg-white/10 px-2 py-1">react</span>
										<span className="rounded-full bg-black/10 dark:bg.white/10 px-2 py-1">ui</span>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="bg-gray-50 text-black dark:bg-gray-800 dark:text-white" id="sample-contact">
				<div className="container mx-auto px-4 py-12">
					<h2 className="text-2xl font-bold">Contact</h2>
					<form className="mt-6 grid gap-4 max-w-xl">
						<div>
							<label className="block text-sm mb-2">Name</label>
							<Input placeholder="Your Name" />
						</div>
						<div>
							<label className="block text-sm mb-2">Email</label>
							<Input type="email" placeholder="you@example.com" />
						</div>
						<div>
							<label className="block text-sm mb-2">Message</label>
							<Textarea rows={5} placeholder="Say hello..." />
						</div>
						<Button type="button">Send</Button>
					</form>
				</div>
			</section>
		</div>
	)
}


