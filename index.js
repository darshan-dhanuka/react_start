function MainContent(){
    return (
        <h1 className="header">Hi, This is my first React Project</h1>
    )
}


ReactDOM.render(<div>
                    <MainContent />
                </div> , 
document.getElementById("root"));