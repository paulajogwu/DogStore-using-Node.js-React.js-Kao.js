import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, Redirect } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { Modal, Button, Input, Tooltip } from "antd";
import LikeOutlined from "@ant-design/icons/LikeOutlined";
import Index from "@ant-design/icons/HomeOutlined";
import LikeFilled from "@ant-design/icons/LikeFilled";
import MessageOutlined from "@ant-design/icons/MessageOutlined";
import MessageFilled from "@ant-design/icons/MessageFilled";
import PushpinOutlined from "@ant-design/icons/PushpinOutlined";

import "bootstrap/dist/css/bootstrap.min.css";

function Details() {
  let [Id, setIds] = useState("");

  let [Name, setName] = useState("");
  let [Age, setAge] = useState("");
  let [Breed, setBreed] = useState("");
  let [Location, setLocation] = useState("");
  let [image, setImage] = useState("");
  let [LikeDog, setLikes] = useState("");
  let [dogList, setState] = useState([]);
  let [dogById, setData] = useState([]);
  let [doglike, setStatez] = useState([]);
  
  let userId='2';
  let history = useHistory()
  const GetDogs = () => {
    //alert(`Hello`);
    fetch("http://localhost:4000/api/v1/dog/")
      .then((response) => response.json())
      .then((response) => setState(response.dog));
  };

  useEffect(() => {
    GetDogs();
  }, []);

  const GetDogById = (id) => {
    history.push("/DogDetail/"+`${id}`)
  
  };
  const details = <span>View Dog Details</span>;

  
  const Like = (id) => {
    //var dog_id = id;
    var user_id = userId
    console.log(user_id,id)
    fetch("http://localhost:4000/api/v1/favourite/like/" +`${id}`, {
      method: "POST",
      body: JSON.stringify({
        user_id
      }),
      headers: { "Content-Type": "application/json" },
    });
  };

  const likes = () => {
    
    fetch("http://localhost:4000/api/v1/favourite/likes/" +`${LikeDog}`)
      .then((response) => response.json())
      .then((response) => setStatez(response));
  };

  useEffect(() => {
    likes();
  }, []);
  return (
    <>
          <marquee>Our Visiting Days : <span style={{color:'red'}}> Monday to Friday</span> <span style={{color:'blue'}}> 9am - 4pm</span></marquee>
      <div className="container py-5">

        <div className="row">
          {dogList.map((data) => (
            <div className="col-10 mx-auto col-md-6 my-3">
              <div className="card">
                <Tooltip placement="left" title={details}>
                  <Link
                    onClick={() => {
                      GetDogById(`${data.id}`);
                    }}
                  >
                    <input onChange={(e) => {
              setLikes(e.target.value);
            }} value={data.id} hidden/>
                    <img
                      src={data.image}
                      className="img-fluid"
                      alt=""
                      style={{ height: "350px", width: "537px" }}
                    />

                    <h2>
                      Breed : <span>{data.breed}</span>
                    </h2>
                  </Link>
                </Tooltip>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {data.price}
                  </strong>
                </h4>

          
                <div>
                  &nbsp;&nbsp; &nbsp;&nbsp;
                  <Tooltip placement="topLeft" title="like">
                    <Link
                      onClick={() => {
                        Like(`${data.id}`);
                      }}
                    >
                      <LikeOutlined style={{ fontSize: "25px" }} />
                    </Link>
                  </Tooltip>
                  &nbsp;&nbsp;
                  {doglike.map((data) => (
                  <span>{data.likes}</span>
                  ))}/h
                  <input
                    defaultValue={data.id}
                    onChange={(e) => {
                      setIds(e.target.value);
                    }}
                    hidden
                  />
                  &nbsp;&nbsp;
                  <Tooltip placement="topLeft" title="Unlike">
                    <Link
                      // onClick={() => {
                      //   Unlike(`${data.id}`);
                      // }}
                    >
                      <LikeOutlined
                        style={{ fontSize: "25px", color: "red" }}
                      />
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Details;