import React, { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom";


const Detail = () => {

    const { id, tipo } = useParams()
    const [detailElements, setDetailElements] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (tipo == "Planet") {
            fetch("https://www.swapi.tech/api/planets/" + id)
                .then(res => res.json())
                .then(data => setDetailElements(data.result))
                .catch(err => console.error(err))
        }
        else if (tipo == "Vehicle") {
            fetch("https://www.swapi.tech/api/vehicles/" + id)
                .then(res => res.json())
                .then(data => setDetailElements(data.result))
                .catch(err => console.error(err))
        }
        else if (tipo == "Character") {
            fetch("https://www.swapi.tech/api/people/" + id)
                .then(res => res.json())
                .then(data => setDetailElements(data.result))
                .catch(err => console.error(err))
        }

    }, [id, tipo])


    return (
        <>
            <div className="card container mb-5 bg-dark text-light custom-card" >
                <div className=" d-flex mx-auto mt-5">
                    <img src="https://i.pinimg.com/736x/a7/24/6f/a7246fb04eee515e2d47d402c81aa423.jpg" className="card-img-top img-detail" alt="..." style={{ Width: "540px" }} />
                </div>
                <div className="card-body container ">
                    <h2 className="card-title text-warning">{detailElements && detailElements.properties.name}</h2>
                    {detailElements && detailElements.properties.diameter ? <p className="card-text">Diameter: {detailElements.properties.diameter}</p> : null}
                    {detailElements && detailElements.properties.climate ? <p className="card-text">Climate: {detailElements.properties.climate} </p> : null}
                    {detailElements && detailElements.properties.terrain ? <p className="card-text">Terrain: {detailElements.properties.terrain} </p> : null}
                    {detailElements && detailElements.properties.population ? <p className="card-text">Population: {detailElements.properties.population} </p> : null}
                    {detailElements && detailElements.properties.cost_in_credits ? <p className="card-text">Cost in Credits: {detailElements.properties.cost_in_credits} </p> : null}
                    {detailElements && detailElements.properties.passengers ? <p className="card-text">Passangers: {detailElements.properties.passengers} </p> : null}
                    {detailElements && detailElements.properties.cargo_capacity ? <p className="card-text">Cargo Capacity: {detailElements.properties.cargo_capacity} </p> : null}
                    {detailElements && detailElements.properties.manufacturer ? <p className="card-text">Manufacturer: {detailElements.properties.manufacturer} </p> : null}
                    {detailElements && detailElements.properties.height ? <p className="card-text">Height: {detailElements.properties.height} </p> : null}
                    {detailElements && detailElements.properties.hair_color ? <p className="card-text">Hair Color: {detailElements.properties.hair_color} </p> : null}
                    {detailElements && detailElements.properties.eye_color ? <p className="card-text">Eye Color: {detailElements.properties.eye_color} </p> : null}
                    {detailElements && detailElements.properties.gender ? <p className="card-text">Gender: {detailElements.properties.gender} </p> : null}
                </div>
                <div className="go-home me-0">
                    <button className="btn btn-warning text-dark float-end" onClick={() => navigate("/")}> Home <i class="fa-solid fa-backward"></i></button>
                </div>
            </div>
        </>
    )
}

export default Detail;