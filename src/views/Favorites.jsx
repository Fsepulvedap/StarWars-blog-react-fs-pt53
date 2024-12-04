import React, { useContext } from "react";
import FavContext from "../store/FavContext";
import { useNavigate, } from "react-router-dom";


const Favorites = () => {
    const { favActions, favs } = useContext(FavContext)
    const navigate = useNavigate()




    return (
        <>
            <div className="text-center mt-5">
                <h1 className="text-warning text-center">Tus Favoritos!!</h1>
            </div>
            <div className="card container mb-5 bg-dark text-light custom-card" >
                <div className=" d-flex mx-auto mt-5">
                    <img src="https://i.pinimg.com/736x/a7/24/6f/a7246fb04eee515e2d47d402c81aa423.jpg" className="card-img-top img-detail" alt="..." style={{ Width: "540px;" }} />
                </div>
                <div className="card-body container">

                    <ul className="custom-list">
                        {favs && favs.map((fav, index) => (
                            <p key={index} ><button className="btn btn-secondary d-flex justify-content-between mx-auto text-black my-2 custom-element" onClick={() => navigate("/detail/" + fav.uid + "/" + fav.tipo)} href="#">{fav.name}<i className="fa-solid fa-trash"
                                onClick={(e) => { e.stopPropagation(); favActions({ type: "delete", payload: { uid: fav.uid, name: fav.name, tipo: fav.tipo } }) }}></i></button></p>
                        ))}
                    </ul>
                </div >
                <div className="go-home me-0">
                    <button className="btn btn-warning text-dark float-end" onClick={() => navigate("/")}> Home <i class="fa-solid fa-backward"></i></button>
                </div>
            </div >
        </>
    )
}

export default Favorites;