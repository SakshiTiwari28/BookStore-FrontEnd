import React from 'react'
import "../styles.css"
import Menu from './Menu'

const Base = ({
    title = "My title",
    description = "This is description",
    className = "bg-dark text-white p-4",
    children 

}) => {

    return (
        <div>
            <Menu />
            <div className = "container-fluid">
                <div className = "jumbotron bg-dark text-white text-center">
                    <h2 className = "display-7">{title}</h2>
                    <p className = "lead">{description}</p>
                </div>
                <div className = {className}>
                    {children}
                </div>
                <footer className = "footer bg-dark  mt-auto ">
                    <div className = "container-fluid bg-success text-white text-center">
                        <h4> If you got questions feel free to reach out!!</h4>
                        <button className = "btn btn-warning btn-lg">Contact Us</button>
                    </div>
                </footer>
            </div> 
        </div>
    )
}

export default Base;