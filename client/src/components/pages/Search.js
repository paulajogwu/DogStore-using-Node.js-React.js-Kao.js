import React,{useState, useEffect} from "react";
import '../../App.css';
import Navbar from '../Navbar';
import { Modal, Button, Input, Tooltip } from "antd";
import Footer from '../Footer';
import { Link, useParams } from "react-router-dom";
import LikeOutlined from '@ant-design/icons/LikeOutlined';
import Index   from '@ant-design/icons/HomeOutlined';

export default function Search() {
  let {breed} = useParams();
  
  let [dogList, setState] = useState([]);
  const GetDogByBreed = () => {
    //alert(`Hello`);
    fetch("http://localhost:4000/api/v1/dog/Search/"+`${breed}`)
      .then((response) => response.json())
      .then((response) => setState(response.dog));
  };
  useEffect(() => {
    GetDogByBreed();
  }, []);

  return (
  <> 
  <Navbar/>
  <div className="container py-5">
      <div className="row">
        {dogList.map((data)=>(
        <div className="col-10 mx-auto col-md-6 my-3">
          <div className="card">
          <Tooltip placement="left" title="">
          {/* <Link   onClick={() => {
                      GetDogById(`${data.id}`);
                    }}> */}
            <img
              src={data.image}
              className="img-fluid"
              alt=""
              style={{ height: "350px", width: "537px" }}
            />

            <h2>
              Breed : <span>{data.breed}</span>
            </h2>
            {/* </Link> */}
            </Tooltip>
            <h4 className="text-blue">
              <strong>
                price : <span>$</span>
                {data.price}
              </strong>
            </h4>

            {/* buttons */}
            <div>
              &nbsp; &nbsp;
              <Link to="/">
                <Index style={{fontSize:'25px'}}/>
              </Link>
              &nbsp;&nbsp;
              <Link to="#">
                <LikeOutlined style={{fontSize:'25px'}}/>
              </Link>
            </div>
          </div>
        </div>
       ))}



        
      </div>
    </div>
   <Footer/>
  </>
 
  );
}



// import React,{useState, useEffect} from "react";
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { Link, Redirect } from "react-router-dom";
// import { Modal, Button, Input,Tooltip } from "antd";
// import LikeOutlined from '@ant-design/icons/LikeOutlined';
// import Index   from '@ant-design/icons/HomeOutlined';
// import LikeFilled from '@ant-design/icons/LikeFilled';
// import MessageOutlined from '@ant-design/icons/MessageOutlined';
// import MessageFilled from '@ant-design/icons/MessageFilled';
// import PushpinOutlined from '@ant-design/icons/PushpinOutlined';


// import "bootstrap/dist/css/bootstrap.min.css";


// function Details() {
//   let [Name, setName] = useState("");
//   let [Age, setAge] = useState("");
//   let [Breed, setBreed] = useState("");
//   let [Location, setLocation] = useState("");
//   let [image, setImage] = useState("");
 
 

//   const GetDogById = (id) => {
//     fetch("http://localhost:4000/api/v1/dog/getdog/:id?id=" + `${id}`)
//       .then((response) => response.json())
//       .then((response) => setData(response.dog))
//       .then(<Redirect to="/DogDetail"/>);
   
//   };
//   const details = <span>View Dog Details</span>;
//   return (
//     <>
//     <Navbar/>
//     <div className="container py-5">
//       <div className="row">
//         {dogList.map((data)=>(
//         <div className="col-10 mx-auto col-md-6 my-3">
//           <div className="card">
//           <Tooltip placement="left" title={details}>
//           <Link   onClick={() => {
//                       GetDogById(`${data.id}`);
//                     }}>
//             <img
//               src={data.image}
//               className="img-fluid"
//               alt=""
//               style={{ height: "350px", width: "537px" }}
//             />

//             <h2>
//               Breed : <span>{data.breed}</span>
//             </h2>
//             </Link>
//             </Tooltip>
//             <h4 className="text-blue">
//               <strong>
//                 price : <span>$</span>
//                 {data.price}
//               </strong>
//             </h4>

//             {/* buttons */}
//             <div>
//               &nbsp; &nbsp;
//               <Link to="/">
//                 <Index style={{fontSize:'25px'}}/>
//               </Link>
//               &nbsp;&nbsp;
//               <Link to="#">
//                 <LikeOutlined style={{fontSize:'25px'}}/>
//               </Link>
//             </div>
//           </div>
//         </div>
//        ))}



        
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default Details;



// =============

// <div className="col-10 mx-auto col-md-6 my-3">
//   <div className="card">
//     <img
//       src="images/1800x1200_dog_cool_summer_other.jpg"
//       className="img-fluid"
//       alt=""
//     />

//     <h2>
//       Breed : <span>German Shepherd</span>
//     </h2>

//     <h4 className="text-blue">
//       <strong>
//         price : <span>$</span>
//         100
//       </strong>
//     </h4>

//     {/* buttons */}
//     <div>
//       &nbsp; &nbsp;
//       <Link to="/">
//         <Index style={{fontSize:'25px'}} />
//       </Link>{" "}
//       &nbsp;&nbsp;
//       <Link to="/DogDetail">
//       <LikeOutlined style={{fontSize:'25px'}}/>
//       </Link>
//     </div>
//   </div>
// </div>
// </div>

// {/* ============== */}

// <div className="row">
// <div className="col-10 mx-auto col-md-6 my-3">
//   <div className="card">
//     <img
//       src="images/1800x1200_dog_cool_summer_other.jpg"
//       className="img-fluid"
//       alt=""
//     />

//     <h2>
//       Breed : <span>German Shepherd</span>
//     </h2>

//     <h4 className="text-blue">
//       <strong>
//         price : <span>$</span>
//         100
//       </strong>
//     </h4>

//     {/* buttons */}
//     <div>
//       &nbsp; &nbsp;
//       <Link to="/">
//         <Index style={{fontSize:'25px'}} />
//       </Link>{" "}
//       &nbsp;&nbsp;
//       <Link to="/DogDetail">
//       <LikeOutlined style={{fontSize:'25px'}}/>
//       </Link>
//     </div>
//   </div>
// </div>

// {/* ============= */}

// <div className="col-10 mx-auto col-md-6 my-3">
//   <div className="card">
//     <img
//       src="images/1800x1200_dog_cool_summer_other.jpg"
//       className="img-fluid"
//       alt=""
//     />

//     <h2>
//       Breed : <span>German Shepherd</span>
//     </h2>

//     <h4 className="text-blue">
//       <strong>
//         price : <span>$</span>
//         100
//       </strong>
//     </h4>

//     {/* buttons */}
//     <div>
//       {" "}
//       &nbsp; &nbsp;
//       <Link to="/">
//         <Index style={{fontSize:'25px'}} />
//       </Link>{" "}
//       &nbsp;&nbsp;
//       <Link to="/DogDetail">
//       <LikeOutlined style={{fontSize:'25px'}}/>
//       </Link>
//     </div>
//   </div>
// </div>
