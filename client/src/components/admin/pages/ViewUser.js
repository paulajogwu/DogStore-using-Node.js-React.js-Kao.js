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
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "@ant-design/icons/EditOutlined";
const { Option } = Select;

export default function ViewUser() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //let [id, setId] = useState([]);
  let [role, setRole] = useState({});
  let [users, setUsers] = useState([]);
  let [user, setData] = useState([]);

  //console.log("hello2", role, id);
  const GetUsers = () => {
    fetch("http://localhost:4000/api/v1/users/")
      .then((response) => response.json())
      .then((response) => setUsers(response.user));
  };
  //GetUsers();

  useEffect(() => {
    GetUsers();
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const GetRoles = (value) => {
    setRole(value);
  }
  
  const GetById = (id) => {
    fetch("http://localhost:4000/api/v1/users/userId/" + `${id}`)
      .then((response) => response.json())
      .then((response) => setData(response.user));
    showModal();
  };

  // useEffect(() => {
  //   GetById();
  // }, []);

  const submit = (id) => {
    fetch("http://localhost:4000/api/v1/users/roleUpdate/"+`${id}`, {
      method: "POST",
      body: JSON.stringify({
        role,
        
      }),
      headers: { "Content-Type": "application/json" },
    });
    GetUsers();
  
    handleCancel()
  };

  const details = <span>Change Role</span>;
  return (
    <div style={{ margin: "auto" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container style={{ marginTop: "-10px" }}>
        <h5 style={{ textAlign: "center", textTransform: "uppercase" }}>
          List of users
        </h5>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
              <th>Date</th>
              <th>Role</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data) => (
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>

                <td>{data.date}</td>
                <td>{data.role}</td>
                <td>
                  {" "}
                  <Tooltip placement="left" title={details}>
                    <a
                      onClick={() => {
                        GetById(`${data.id}`);
                      }}
                      className="btn"
                    >
                      <Edit style={{ color: "green", fontSize: "20px" }} />
                    </a>{" "}
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
   
      </Container>

      <Modal
        title="Change User Role"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
         
          null
        ]}
      >
        <div style={{ margin: "auto" }}>
          <Form name="complex-form">
            <Row>
              <Col span={24}>
                <Form.Item
                  name="breeds"
                  rules={[{ required: true }]}
                  style={{ display: "inline-block", width: "calc(100% - 8px)" }}
                >
                  <label>Roles</label> &nbsp;

                  <Select
                    onChange={GetRoles}
                    style={{ width: "370px", height: "30px" }}
                  >
                    <Option value="staff">staff</Option>
                    <Option value="user">user</Option>
                  </Select>

                 
                </Form.Item>

               
              </Col>
            </Row>
           <Row>
           {user.map((datas) => (
           <Button
            type="primary"
            onClick={() => {
              submit(`${datas.id}`);
            }}

            style={{margin: "auto" }}
          >
            Submit
          </Button>
           ))}
           </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
