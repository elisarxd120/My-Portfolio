import React from 'react'

const base =
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

const variants = {
	default: "bg-primary text-primary-foreground hover:opacity-90",
	outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
	ghost: "hover:bg-accent hover:text-accent-foreground"
}

export const Button = ({ variant = 'default', className = '', ...props }) => {
	return (
		<button className={`${base} ${variants[variant]} h-10 px-4 py-2 ${className}`} {...props} />
	)
}


