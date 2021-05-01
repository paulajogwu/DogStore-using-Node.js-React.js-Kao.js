import React, { useState, useEffect } from "react";
//import "../../App.css";
import {
  Modal,
  Form,
  Input,
  Select,
  Card,
  Tooltip,
  Button,
  Space,
  Typography,
  Row,
  Col,
} from "antd";

import "antd/dist/antd.css";

import Edit from "@ant-design/icons/EditOutlined";
import Delete from "@ant-design/icons/DeleteOutlined";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const { Option } = Select;
export default function DogView() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [breed, setBreed] = useState("");
  //let [id, setID] = useState("");
  let [description, setDescription] = useState("");
  let [location_id, setLocate] = useState("");
  let [price, setPrice] = useState("");
  let staff_id = "1";

  var date = new Date().toDateString();

  let [image, setStates] = useState([]);
  let [locations, setLocations] = useState([]);
  let [dogs, setDogs] = useState([]);
  let [dogDetail, setDog] = useState([]);
  let [deletes, setData] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const GetDogs = () => {
    fetch("http://localhost:4000/api/v1/dog/")
      .then((response) => response.json())
      .then((response) => setDogs(response.dog));
  };
  //GetUsers();

  useEffect(() => {
    GetDogs();
  }, []);

  const GetBreeds = (value) => {
    setBreed(value);
    var breeds = value;
    var dogURL = breeds.replace(/-/g, "/");
    fetch("https://dog.ceo/api/breed/" + dogURL + "/images/random")
      .then((response) => response.json())
      .then((data) => setStates(data.message));
  };
  const deleteById = (id) => {
    fetch("http://localhost:4000/api/v1/dog/deleteDog/" + `${id}`)
      .then((response) => response.json())
      .then((response) => setData(response.dog));
    GetDogs();
  };
  const GetById = (id) => {
    console.log(id);
    fetch("http://localhost:4000/api/v1/dog/getdog/" + `${id}`)
      .then((response) => response.json())
      .then((response) => setDog(response));
    showModal();
  };
  const GetLocation = () => {
    fetch("http://localhost:4000/api/v1/location/")
      .then((response) => response.json())
      .then((response) => setLocations(response.location));
  };

  useEffect(() => {
    GetLocation();
  }, []);

  const submit = (id) => {
    console.log("hello",  id);
    fetch("http://localhost:4000/api/v1/dog/dogUpdate/"+`${id}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        age,
        breed,
        price,
        description,
        image,
        staff_id,
        location_id,
        date,
      }),
      headers: { "Content-Type": "application/json" },
    });
    GetDogs()

    handleCancel()
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleted = <span>Delete Dog</span>;

  const editing = <span>Edit dog Detail</span>;
  return (
    <div style={{ margin: "auto" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container style={{ marginTop: "-10px" }}>
        <h5 style={{ textAlign: "center", textTransform: "uppercase" }}>
          Dog List
        </h5>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Breed</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {dogs.map((data) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.breed}</td>
                <td>{data.price}</td>
                <td style={{ width: "350px" }}>{data.description}</td>
                <td>
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src={data.image}
                  />
                </td>
                <td>
                  {" "}
                  <Tooltip placement="left" title={editing}>
                    <a
                      onClick={() => {
                        GetById(`${data.id}`);
                      }}
                      className="btn"
                    >
                      <Edit style={{ color: "green", fontSize: "20px" }} />
                    </a>
                  </Tooltip>{" "}
                  &nbsp;{" "}
                  <Tooltip placement="left" title={deleted}>
                    <a
                      onClick={() => {
                        deleteById(`${data.id}`);
                      }}
                      className="btn"
                    >
                      <Delete style={{ color: "red", fontSize: "20px" }} />
                    </a>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal
        visible={isModalVisible}
        title="Edit"
        width="800px"
        flex="1"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
         null
        ]}
      >
        <div style={{ margin: "auto" }}>
          {dogDetail.map((data) => (
            <Form name="complex-form">
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="Name"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(100% - 8px)",
                    }}
                  >
                    {" "}
                    <label>Name</label>
                    <Input
                      type="text"
                      placeholder="Enter Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      defaultValue={data.name}
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="Age"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(100% - 8px)",
                    }}
                  >
                    <label>Age</label>
                    <Input
                      type="text"
                      placeholder="Enter Age or Months"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      defaultValue={data.age}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={12}>
                  <Form.Item
                    name="location"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(100% - 8px)",
                    }}
                  >
                    <label>location</label>
                    <br />
                    <select
                      onChange={(e) => {
                        setLocate(e.target.value);
                      }}
                      style={{ width: "370px", height: "30px" }}
                    >
                      {/* <option >select Location</option> */}
                      {locations.map((data) => (
                        <option value={data.id}>{data.name}</option>
                      ))}
                    </select>
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="breeds"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(100% - 8px)",
                    }}
                  >
                    <label>Breed</label>
                    <Select onChange={GetBreeds}>
                      <Option value="affenpinscher">affenpinscher</Option>
                      <Option value="african">african</Option>
                      <Option value="airedale">airedale</Option>
                      <Option value="akita">akita</Option>
                      <Option value="appenzeller">appenzeller</Option>
                      <Option value="australian-shepherd">
                        shepherd australian
                      </Option>
                      <Option value="basenji">basenji</Option>
                      <Option value="beagle">beagle</Option>
                      <Option value="bluetick">bluetick</Option>
                      <Option value="borzoi">borzoi</Option>
                      <Option value="bouvier">bouvier</Option>
                      <Option value="boxer">boxer</Option>
                      <Option value="brabancon">brabancon</Option>
                      <Option value="briard">briard</Option>
                      <Option value="buhund-norwegian">norwegian buhund</Option>
                      <Option value="bulldog-boston">boston bulldog</Option>
                      <Option value="bulldog-english">english bulldog</Option>
                      <Option value="bulldog-french">french bulldog</Option>
                      <Option value="bullterrier-staffordshire">
                        staffordshire bullterrier
                      </Option>
                      <Option value="cairn">cairn</Option>
                      <Option value="cattledog-australian">
                        australian cattledog
                      </Option>
                      <Option value="chihuahua">chihuahua</Option>
                      <Option value="chow">chow</Option>
                      <Option value="clumber">clumber</Option>
                      <Option value="cockapoo">cockapoo</Option>
                      <Option value="collie-border">border collie</Option>
                      <Option value="coonhound">coonhound</Option>
                      <Option value="corgi-cardigan">cardigan corgi</Option>
                      <Option value="cotondetulear">cotondetulear</Option>
                      <Option value="dachshund">dachshund</Option>
                      <Option value="dalmatian">dalmatian</Option>
                      <Option value="dane-great">great dane</Option>
                      <Option value="deerhound-scottish">
                        scottish deerhound
                      </Option>
                      <Option value="dhole">dhole</Option>
                      <Option value="dingo">dingo</Option>
                      <Option value="doberman">doberman</Option>
                      <Option value="elkhound-norwegian">
                        norwegian elkhound
                      </Option>
                      <Option value="entlebucher">entlebucher</Option>
                      <Option value="eskimo">eskimo</Option>
                      <Option value="finnish-lapphund">lapphund finnish</Option>
                      <Option value="frise-bichon">bichon frise</Option>
                      <Option value="germanshepherd">germanshepherd</Option>
                      <Option value="greyhound-italian">
                        italian greyhound
                      </Option>
                      <Option value="groenendael">groenendael</Option>
                      <Option value="havanese">havanese</Option>
                      <Option value="hound-afghan">afghan hound</Option>
                      <Option value="hound-basset">basset hound</Option>
                      <Option value="hound-blood">blood hound</Option>
                      <Option value="hound-english">english hound</Option>
                      <Option value="hound-ibizan">ibizan hound</Option>
                      <Option value="hound-plott">plott hound</Option>
                      <Option value="hound-walker">walker hound</Option>
                      <Option value="husky">husky</Option>
                      <Option value="keeshond">keeshond</Option>
                      <Option value="kelpie">kelpie</Option>
                      <Option value="komondor">komondor</Option>
                      <Option value="kuvasz">kuvasz</Option>
                      <Option value="labradoodle">labradoodle</Option>
                      <Option value="labrador">labrador</Option>
                      <Option value="leonberg">leonberg</Option>
                      <Option value="lhasa">lhasa</Option>
                      <Option value="malamute">malamute</Option>
                      <Option value="malinois">malinois</Option>
                      <Option value="maltese">maltese</Option>
                      <Option value="mastiff-bull">bull mastiff</Option>
                      <Option value="mastiff-english">english mastiff</Option>
                      <Option value="mastiff-tibetan">tibetan mastiff</Option>
                      <Option value="mexicanhairless">mexicanhairless</Option>
                      <Option value="mix">mix</Option>
                      <Option value="mountain-bernese">bernese mountain</Option>
                      <Option value="mountain-swiss">swiss mountain</Option>
                      <Option value="newfoundland">newfoundland</Option>
                      <Option value="otterhound">otterhound</Option>
                      <Option value="ovcharka-caucasian">
                        caucasian ovcharka
                      </Option>
                      <Option value="papillon">papillon</Option>
                      <Option value="pekinese">pekinese</Option>
                      <Option value="pembroke">pembroke</Option>
                      <Option value="pinscher-miniature">
                        miniature pinscher
                      </Option>
                      <Option value="pitbull">pitbull</Option>
                      <Option value="pointer-german">german pointer</Option>
                      <Option value="pointer-germanlonghair">
                        germanlonghair pointer
                      </Option>
                      <Option value="pomeranian">pomeranian</Option>
                      <Option value="poodle-miniature">miniature poodle</Option>
                      <Option value="poodle-standard">standard poodle</Option>
                      <Option value="poodle-toy">toy poodle</Option>
                      <Option value="pug">pug</Option>
                      <Option value="puggle">puggle</Option>
                      <Option value="pyrenees">pyrenees</Option>
                      <Option value="redbone">redbone</Option>
                      <Option value="retriever-chesapeake">
                        chesapeake retriever
                      </Option>
                      <Option value="retriever-curly">curly retriever</Option>
                      <Option value="retriever-flatcoated">
                        flatcoated retriever
                      </Option>
                      <Option value="retriever-golden">golden retriever</Option>
                      <Option value="ridgeback-rhodesian">
                        rhodesian ridgeback
                      </Option>
                      <Option value="rottweiler">rottweiler</Option>
                      <Option value="saluki">saluki</Option>
                      <Option value="samoyed">samoyed</Option>
                      <Option value="schipperke">schipperke</Option>
                      <Option value="schnauzer-giant">giant schnauzer</Option>
                      <Option value="schnauzer-miniature">
                        miniature schnauzer
                      </Option>
                      <Option value="setter-english">english setter</Option>
                      <Option value="setter-gordon">gordon setter</Option>
                      <Option value="setter-irish">irish setter</Option>
                      <Option value="sheepdog-english">english sheepdog</Option>
                      <Option value="sheepdog-shetland">
                        shetland sheepdog
                      </Option>
                      <Option value="shiba">shiba</Option>
                      <Option value="shihtzu">shihtzu</Option>
                      <Option value="spaniel-blenheim">blenheim spaniel</Option>
                      <Option value="spaniel-brittany">brittany spaniel</Option>
                      <Option value="spaniel-cocker">cocker spaniel</Option>
                      <Option value="spaniel-irish">irish spaniel</Option>
                      <Option value="spaniel-japanese">japanese spaniel</Option>
                      <Option value="spaniel-sussex">sussex spaniel</Option>
                      <Option value="spaniel-welsh">welsh spaniel</Option>
                      <Option value="springer-english">english springer</Option>
                      <Option value="stbernard">stbernard</Option>
                      <Option value="terrier-american">american terrier</Option>
                      <Option value="terrier-australian">
                        australian terrier
                      </Option>
                      <Option value="terrier-bedlington">
                        bedlington terrier
                      </Option>
                      <Option value="terrier-border">border terrier</Option>
                      <Option value="terrier-dandie">dandie terrier</Option>
                      <Option value="terrier-fox">fox terrier</Option>
                      <Option value="terrier-irish">irish terrier</Option>
                      <Option value="terrier-kerryblue">
                        kerryblue terrier
                      </Option>
                      <Option value="terrier-lakeland">lakeland terrier</Option>
                      <Option value="terrier-norfolk">norfolk terrier</Option>
                      <Option value="terrier-norwich">norwich terrier</Option>
                      <Option value="terrier-patterdale">
                        patterdale terrier
                      </Option>
                      <Option value="terrier-russell">russell terrier</Option>
                      <Option value="terrier-scottish">scottish terrier</Option>
                      <Option value="terrier-sealyham">sealyham terrier</Option>
                      <Option value="terrier-silky">silky terrier</Option>
                      <Option value="terrier-tibetan">tibetan terrier</Option>
                      <Option value="terrier-toy">toy terrier</Option>
                      <Option value="terrier-westhighland">
                        westhighland terrier
                      </Option>
                      <Option value="terrier-wheaten">wheaten terrier</Option>
                      <Option value="terrier-yorkshire">
                        yorkshire terrier
                      </Option>
                      <Option value="vizsla">vizsla</Option>
                      <Option value="waterdog-spanish">spanish waterdog</Option>
                      <Option value="weimaraner">weimaraner</Option>
                      <Option value="whippet">whippet</Option>
                      <Option value="wolfhound-irish">irish wolfhound</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Card>
                    <img
                      src={image}
                      style={{ height: "210px", width: "300px" }}
                    />
                  </Card>
                </Col>
                &nbsp; &nbsp;
                <Col>
                  <Form.Item
                    name="Age"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(80% - 4px)",
                    }}
                  >
                    <label>price</label>
                    <Input
                      type="text"
                      placeholder="Enter price"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      defaultValue={data.price}
                    />
                  </Form.Item>
                  <Form.Item
                    name="Description"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(80% - 4px)",
                    }}
                  >
                    {/* <label>Description</label> */}
                    <textarea
                      placeholder="Description"
                      style={{ height: "150px", width: "150px" }}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      defaultValue={data.description}
                    ></textarea>
                  </Form.Item>
                </Col>
              </Row>
             
              <Row>
                <div style={{margin:'auto'}}>
                <Button
            type="primary"
            onClick={() => {
              submit(`${data.id}`);
            }}
          >
            Update
          </Button>,
                </div>
              </Row>
            </Form>
          ))}
        </div>
      </Modal>
    </div>
  );
}
