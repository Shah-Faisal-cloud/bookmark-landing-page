function Button({text, variant, className="", onClick}) {
    const base = "hover:bg-transparent px-2 md:px-6 py-2 border-2 rounded-md transition-all duration-300 ease-in ";
    const style = {
        red: "text-[var(--gray)] bg-[var(--red)] border-[var(--red)] hover:text-[var(--red)]",
        blue: "text-[var(--gray)] bg-[var(--voilet)] border-[var(--voilet)] hover:text-[var(--voilet)]",
        gray: "text-[var(--blue)] bg-[var(--gray)] border-var[var(--gray)] hover:border-[var(--blue)] hover:text-[var(--blue)]",
        transparent: "text-[var(--blue)] border-[var(--gray)] bg-[var(--gray)] hover:text-[var(--gray)]",
    }

    return <button className={`${base} ${style[variant]} ${className}`} onClick={onClick}>{text}</button>
}

export default Button;