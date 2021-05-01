import React, { useState, useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  let [Name, setName] = useState("");
  let [Age, setAge] = useState("");
  let [Breed, setBreed] = useState("");
  let [Location, setLocation] = useState("");
  let [image, setImage] = useState("");

  let [listDog, setState] = useState([]);
  console.log("list", listDog);
  const GetDogs = () => {
    //alert(`Hello`);
    fetch("http://localhost:4000/api/v1/dog/four")
      .then((response) => response.json())
      .then((response) => setState(response.dog));
  };
  useEffect(() => {
    GetDogs();
  }, []);
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <h1>Check out these Breeds of Dogs</h1>
          <ul className="cards__items">
            {listDog.map((data) => (
              <CardItem
                src={data.image}
                text={data.description}
                label={data.breed}
                path="/services"
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
