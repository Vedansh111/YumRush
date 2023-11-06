const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <div className="font-mono text-center bg-slate-300">
                <p>© {date.getFullYear()} Vedansh Taraviya</p>
            </div>
        </footer>
    )
}

export default Footer;