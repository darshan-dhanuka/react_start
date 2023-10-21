function MainContent(){
    return (
        <div>
            <h1 className="header">Hi, This is my first React Project</h1>
            <p>Hi, This is darshan</p>
        </div>
    )
}


const page = (
    <nav>
        <h1>First React nav . </h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(page , 
document.getElementById("root"));