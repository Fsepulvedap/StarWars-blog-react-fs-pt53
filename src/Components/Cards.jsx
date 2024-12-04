import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavContext from "../store/FavContext";


const Card = ({ name, uid, tipo }) => {
    const navigate = useNavigate()
    const {favActions, favs} = useContext(FavContext)

    return (
        <div className="container d-flex flex-wrap gap-3 ">
            <div className="card mb-3 " style={{ width: "18rem", borderColor:"black" }}>
                <img src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png" className="card-img-top" alt="..." />
                <div className="card-body bg-dark" >
                    <h5 className="card-title text-light">{name}</h5>
                    <p className="card-text text-light">{tipo}</p>
                    <div className="d-flex justify-content-between">
                        <button href="#" className="btn btn-secondary text-warning" onClick={() => navigate("/detail/"+uid+"/"+tipo)} >Learn more</button>
                        {favs.find((element) => element.uid == uid && element.tipo == tipo) ?
                        <button type="button" className="btn btn-outline-warning" onClick={() => favActions({type:"delete", payload:{uid, name, tipo}})}><i className="fa-solid fa-heart"></i></button> :
                        <button type="button" className="btn btn-outline-warning" onClick={() => favActions({type:"add", payload:{uid, name, tipo}})}><i className="fa-regular fa-heart"></i></button> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;