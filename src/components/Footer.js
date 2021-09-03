

function Footer(props) {
    return (
        <footer id="footer" className="structure-div">

            <div className="credits">      
                <p>made with </p>
                <i className="fas fa-heart"></i>
                <p>and</p>
                <i className="fas fa-brain"></i>
                <p> by blake montgomery</p>
            </div>
            <div className="links">
                <a href="https://www.linkedin.com/in/blake-montgomery312/" target="_blank" rel="noreferrer" ><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/montblake" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a>
                <a href="mailto:blakemontgomery312@gmail.com"><i className="fas fa-envelope"></i></a>              
            </div>            
        </footer>
    )
}

export default Footer;