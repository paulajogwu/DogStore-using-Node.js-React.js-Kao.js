import React,{useState,useEffect} from "react";
import "../../../App.css";

//import  "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  "antd";
import SendOutlined from '@ant-design/icons/SendOutlined';
import "./chat.css"
import { message } from "antd";
export default function Chat() {
  let [name, setName] = useState("");
  let [messages, setmessages] = useState([]);
  let [user, setUsers] = useState([]);
 console.log(messages)
  const GetMessage = (id) => {
    let sender_id = id;
    
    fetch("http://localhost:4000/api/v1/Message/getMessageByuserId/"+ `${sender_id}`)
      .then((response) => response.json())
      .then((response) => setmessages(response.message));
  };
  //GetUsers();

  useEffect(() => {
    GetMessage();
  }, []);

  const GetUsers = () => {
    fetch("http://localhost:4000/api/v1/users/role")
      .then((response) => response.json())
      .then((response) => setUsers(response.user));
  };


  useEffect(() => {
    GetUsers();
  }, []);
  return (
    <div style={{ margin: "auto" }}>
      <br/>     <br/>     <br/>  <br/>
      <div className="container-fluid h-100">
        <div className="row justify-content-center h-100">
          <div className="col-md-6 col-xl-4 chat">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
              <div style={{backgroundColor:"blue"}} className="card-header">
                <div className="input-group">
                <label style={{color:"white"}}>Customer Chat</label>
                
                </div>
              </div>
              <div style={{backgroundColor:"gray"}} className="card-body contacts_body">
                <ui className="contacts">
                  {user.map((data)=>(
                  <li className="">
                    <a onClick={() =>{GetMessage(`${data.id}`)}} >
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/circled_user_female_skin_type_7_96px.png"
                          className="rounded-circle user_img"
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span  onChange={(e) => {
                  setName(e.target.value);
                }}>{data.firstName}</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                    </a>
                  </li>
                  ))}

                 
                
                </ui>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>

          <div className="col-md-8 col-xl-6 chat">
            <div className="card">
              <div  style={{backgroundColor:"blue"}} className="card-header msg_head">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img
                      src="images/user_male_96px.png"
                      className="rounded-circle user_img"
                    />
                    <span className="online_icon"></span>
                  </div>
                  <div className="user_info">
                    <span>Chat </span>
                    <p>Messages</p>
                  </div>
                  <div className="video_cam">
                    <span>
                      <i className="fas fa-video"></i>
                    </span>
                    <span>
                      <i className="fas fa-phone"></i>
                    </span>
                  </div>
                </div>
                <span id="action_menu_btn">
                  <i className="fas fa-ellipsis-v"></i>
                </span>
                <div className="action_menu">
                  <ul>
                    <li>
                      <i className="fas fa-user-circle"></i> View profile
                    </li>
                    <li>
                      <i className="fas fa-users"></i> Add to close friends
                    </li>
                    <li>
                      <i className="fas fa-plus"></i> Add to group
                    </li>
                    <li>
                      <i className="fas fa-ban"></i> Block
                    </li>
                  </ul>
                </div>
              </div>

            
              <div style={{backgroundColor:"white"}} className="card-body msg_card_body">
              {messages.map((data)=>(
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/user_male_96px.png"
                      className="rounded-circle user_img_msg"
                    />
                  </div>
                  <div className="msg_cotainer">
                   {data.message}
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                ))}
                {/* <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img src="images/circled_user_female_skin_type_7_96px.png " className="rounded-circle user_img_msg" />
                  </div>
                </div> */}




              </div>

              
              <div className="card-footer">
                <div className="input-group">
                  <div className="input-group-append">
                    <span className="input-group-text attach_btn">
                      <i className="fas fa-paperclip"></i>
                    </span>
                  </div>
                  <textarea
                    name=""
                    className="form-control type_msg"
                    placeholder="Type your message..."
                  ></textarea>
                  <div className="input-group-append">
                    <span className="input-group-text send_btn">
                      <SendOutlined style={{color:'white', fontSize:'15px'}}/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
