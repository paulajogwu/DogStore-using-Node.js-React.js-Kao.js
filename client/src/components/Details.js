import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal, Button, Input,Tooltip } from "antd";
import ShoppingOutlined from '@ant-design/icons/ShoppingOutlined';
import Index   from '@ant-design/icons/HomeOutlined';



import "bootstrap/dist/css/bootstrap.min.css";
const { TextArea } = Input;
function Details() {
  
  let [message, setMessage] = useState("");
  let [dogs, setDogs] = useState([]);
  // let [userid, setUserid] = useState("");
  // let [staffId, setStaffId] = useState("");
  
 
  let [breeds, setState] = useState([]);

  let sender_id='2';
  let receiver_id='1';
  var date = new Date().toDateString();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  let {id} = useParams();
console.log('dogs',dogs)
  const GetDogById = () => {
    fetch("http://localhost:4000/api/v1/dog/getdog/"+`${id}`)
      .then((response) => response.json())
      .then((response) => setDogs(response));
  };
  useEffect(() => {
    GetDogById();
  }, []);

  const submit = () => {
    fetch("http://localhost:4000/api/v1/Message/SendMessage", {
      method: "POST",
      body: JSON.stringify({
        message,sender_id,receiver_id,date
      }),
      headers: { "Content-Type": "application/json" },
    });
 
  };
  const send = <span>Message Us</span>;
  const home = <span>Back to home</span>;
  const order = <span>Order Dog</span>;
  return (
    <>
    {dogs.map((data) => ( 
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{data.name}</h1>
          </div>
        </div>
     
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={data.image}
              className="img-fluid"
              alt=""
            />
          </div>
         
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>
              Breed : <span>{data.breed}</span>
            </h2>
          
            <h4 className="text-blue">
              <strong>
                price : <span>$</span>
                {data.price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about Dog :
            </p>
            <p className="text-muted lead">
           {data.description}
            </p>
            <div>
              &nbsp; &nbsp;
              <Tooltip placement="topLeft" title={home}>
              <Button style={{height:'45px'}} >
              <Link to="/home">
                <Index style={{fontSize:'25px'}}/>
              </Link>{" "}
              </Button>
              </Tooltip>
            
              &nbsp;&nbsp;
              <Tooltip placement="topLeft" title={order}>
              <Button style={{height:'45px'}} >
              <Link to="/DogDetail">
                <ShoppingOutlined style={{fontSize:'25px'}}/>
              </Link>
              </Button>
              </Tooltip>
              &nbsp;&nbsp;
            
              <Tooltip placement="topLeft" title={send}>
              <Button style={{height:'45px'}} onClick={showModal}>
                <img src="images/chat_bubble_96px.png" width="40" alt="" />
              </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
))}
      <Modal
        title="Message Us"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}



        footer={[
         
          <Button key="submit" type="primary"  onClick={submit}>
            Send
          </Button>,
         
        ]}
      >
        <TextArea  onChange={(e) => {
                  setMessage(e.target.value);
                }} placeholder="Type your Message" rows={8} />
      </Modal>
    </>
  );}
export default Details;

