import React from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Details() {
  return (
    <> 
    <Navbar/>
    {/* // <h2> Dog Details</h2> */}
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <div className="card">
            <img
              src="images/1800x1200_dog_cool_summer_other.jpg"
              className="img-fluid"
              alt=""
            />

            <h2>
              Breed : <span>German Shepherd</span>
            </h2>

            <h4 className="text-blue">
              <strong>
                price : <span>$</span>
                100
              </strong>
            </h4>

            {/* buttons */}
            <div>
              &nbsp; &nbsp;
              <Link to="/">
                <img src="images/home2_48px.png" width="40" alt="" />
              </Link>{" "}
              &nbsp;&nbsp;
              <Link to="/DogDetail">
                <img src="images/dislike_96px.png" width="40" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============== */}

      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <div className="card">
            <img
              src="images/1800x1200_dog_cool_summer_other.jpg"
              className="img-fluid"
              alt=""
            />

            <h2>
              Breed : <span>German Shepherd</span>
            </h2>

            <h4 className="text-blue">
              <strong>
                price : <span>$</span>
                100
              </strong>
            </h4>

            {/* buttons */}
            <div>
              &nbsp; &nbsp;
              <Link to="/">
                <img src="images/home2_48px.png" width="40" alt="" />
              </Link>{" "}
              &nbsp;&nbsp;
              <Link to="/DogDetail">
                <img src="images/dislike_96px.png" width="40" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Details;
