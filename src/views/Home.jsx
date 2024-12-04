import { useEffect, useState } from "react";
import Card from "../Components/Cards";


function Home() {

    const [planets, setPlanets] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/")
            .then(res => res.json())
            .then(data => setPlanets(data.results))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles/")
            .then(res => res.json())
            .then(data => setVehicles(data.results))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/")
            .then(res => res.json())
            .then(data => setCharacters(data.results))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <h1 className="text-warning p-5 text-center mt-3 ">Planets</h1>
            <div className="container d-flex overflow-auto custom-scrollbar">
                {planets && planets.map((planet) => (
                    <Card key={planet.uid} name={planet.name} uid={planet.uid} tipo={"Planet"} />
                ))}
            </div>
            <h1 className="text-warning p-5 text-center">Vehicles</h1>
            <div className="container d-flex overflow-auto custom-scrollbar">
                {vehicles && vehicles.map((vehicle) => (
                    <Card key={vehicle.uid} name={vehicle.name} uid={vehicle.uid} tipo={"Vehicle"} />
                ))}
            </div>
            <h1 className="text-warning p-5 text-center">Characters</h1>
            <div className="container d-flex overflow-auto mb-5 custom-scrollbar">
                {characters && characters.map((character) => (
                    <Card key={character.uid} name={character.name} uid={character.uid} tipo={"Character"} />
                ))}
            </div>
        </>
    )
}

export default Home;