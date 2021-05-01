import React, { Component } from "react";
//import styled from "styled-components";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

    export default function Modal() {
    return (      
            //   <ModalContainer>
            <div style={{ margin: "auto" }}>
            <br/>     <br/>     <br/>  <br/>
            <div className="container-fluid h-100">
              <div className="row justify-content-center h-100">
            
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
                          <span>Chat with Khalid</span>
                          <p>1767 Messages</p>
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
                      <div className="d-flex justify-content-start mb-4">
                        <div className="img_cont_msg">
                          <img
                            src="images/user_male_96px.png"
                            className="rounded-circle user_img_msg"
                          />
                        </div>
                        <div className="msg_cotainer">
                          Hi, how are you samim?
                          <span className="msg_time">8:40 AM, Today</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-4">
                        <div className="msg_cotainer_send">
                          Hi Khalid i am good tnx how about you?
                          <span className="msg_time_send">8:55 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src="images/circled_user_female_skin_type_7_96px.png " className="rounded-circle user_img_msg" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-start mb-4">
                        <div className="img_cont_msg">
                          <img
                            src="images/user_male_96px.png"
                            className="rounded-circle user_img_msg"
                          />
                        </div>
                        <div className="msg_cotainer">
                          I am good too, thank you for your chat template
                          <span className="msg_time">9:00 AM, Today</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-4">
                        <div className="msg_cotainer_send">
                          You are welcome
                          <span className="msg_time_send">9:05 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src="images/circled_user_female_skin_type_7_96px.png " className="rounded-circle user_img_msg" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-start mb-4">
                        <div className="img_cont_msg">
                          <img
                            src="images/user_male_96px.png"
                            className="rounded-circle user_img_msg"
                          />
                        </div>
                        <div className="msg_cotainer">
                          I am looking for your next templates
                          <span className="msg_time">9:07 AM, Today</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-4">
                        <div className="msg_cotainer_send">
                          Ok, thank you have a good day
                          <span className="msg_time_send">9:10 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src="images/circled_user_female_skin_type_7_96px.png " className="rounded-circle user_img_msg" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-start mb-4">
                        <div className="img_cont_msg">
                          <img
                            src="images/user_male_96px.png"
                            className="rounded-circle user_img_msg"
                          />
                        </div>
                        <div className="msg_cotainer">
                          Bye, see you
                          <span className="msg_time">9:12 AM, Today</span>
                        </div>
                      </div>
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
                            <i className="fas fa-location-arrow"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
             // {/* </ModalContainer> */}
  
    );
  }


// const ModalContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.3);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   #modal {
//     background: var(--mainWhite);
//   }
// `;
