const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <div className="font-normal bg-gray-600 text-justify">
                <p>© {date.getFullYear()} Vedansh Taraviya</p>
            </div>
        </footer>
    )
}

export default Footer;