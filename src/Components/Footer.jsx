import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()

    return (

        <footer>
            <div className="row bg-dark mt-5">
                <div className="col-lg-12 text-light text-center">
                <img className="bg-warning my-3 img-starwars-footer" src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000" style={{width:"70px", height: "50px", objectFit:"cover", cursor: "pointer", borderRadius: "5px"}} onClick={() => navigate("/")} />
                    <p>Copyright &copy; Star Wars 2024</p> 
                    <p> </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;