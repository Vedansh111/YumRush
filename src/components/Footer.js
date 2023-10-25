const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <div className="footer">
                <p>© {date.getFullYear()} Vedansh Taraviya</p>
            </div>
        </footer>
    )
}

export default Footer;