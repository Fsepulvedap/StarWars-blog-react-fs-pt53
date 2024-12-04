import React, { useContext } from "react"
import FavContext from "../store/FavContext";
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {

    const { favActions, favs } = useContext(FavContext)
    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
            <div className="container d-flex justify-content-between">
                <img className="navbar-brand bg-warning img-starwars" src="https://img.icons8.com/?size=100&id=38539&format=png&color=000000" style={{ width: "50px", height: "40px", objectFit: "cover", cursor: "pointer", borderRadius: "10px" }} onClick={() => navigate("/")} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown d-flex">
                            <button className="btn btn-dark nav-link  btn-fav text-light" onClick={() => navigate("/favorites")} >
                                Favorites {favs && favs.length}
                            </button>
                            <Link
                                className="dropdown-toggle text-light btn btn-dark flecha"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ></Link>
                            <ul className="dropdown-menu" >
                                {favs && favs.map((fav, index) => (
                                    <li key={index} ><a className="dropdown-item d-flex justify-content-between custom-li" href="#">{fav.name}<i className="fa-solid fa-trash" onClick={() => favActions({ type: "delete", payload: { uid: fav.uid, name: fav.name, tipo: fav.tipo } })}></i></a></li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;