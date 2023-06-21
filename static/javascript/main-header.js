function MainHead(props){
    return [
        <div class="notepad-margin"></div>,
        <div class="notepad-head-contents">
            <img class="main-logo" src="static/images/logo.svg" width="88px" alt="logo" />
            <NavBar pageId = {props.pageId} />
        </div>
    ]
}

function NavBar(props){
    return[
        <nav>
            <NavItem display="Home" url="/" wantLink = {props.pageId != "home"} />
            <NavItem display="Projects" url="/projects.html" wantLink = {props.pageId != "projects"} />
            <NavItem display="About" url="/about.html" wantLink = {props.pageId != "about"} />
            <NavItem display="Contact" url="/contact.html" wantLink = {props.pageId != "contact"} />

            <div class="nav-item nav-icon-container">
                <NavIcon url="https://github.com/Alex-Symonds" imgfile="GitHub-Mark-32px.png" alt="GitHub" />
                <NavIcon url="#" imgfile="LI-In-Bug.png" alt="LinkedIn" />
            </div>
        </nav>
    ];
}

function NavItem(props){
    if(props.wantLink){
        return <div class="nav-item"><a href={props.url} class="nav-text-box"><span>{props.display}</span></a></div>
    } else {
        return <div class="nav-item"><div class="nav-text-box"><span>{props.display}</span></div></div>
    }
}

function NavIcon(props){
    return <a href={props.url}><img src={"static/images/" + props.imgfile} width="32px" alt={props.alt} /></a>
}

// Render it to the page
ReactDOM.render(<MainHead pageId={window.pageId} />, document.querySelector(".notepad-head"));