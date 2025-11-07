export const Footer = () => {
	return (
		<footer className="border-t bg-gradient-to-b from-transparent to-gray-50/10">
			<div className="container mx-auto px-4 py-6 text-sm text-muted-foreground flex flex-col
			 sm:flex-row items-center justify-center gap-2">
				<p>© {new Date().getFullYear()} <span class="text-red-500 font-semibold">
					Elisar Pamotongan</span>. All rights reserved.</p>
			</div>
		</footer>
	)
}


