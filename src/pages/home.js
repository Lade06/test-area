import React from "react";
import "./home.css";
import Navbar from "../components/navbar";
import puzzle1 from "../Assets/puzzle1.jpg";
import puzzle from "../Assets/puzzle.jpeg";
import cubic1 from "../Assets/cubic1.png";
import affirmations from "../Assets/affirmations.png";
import affirmations1 from "../Assets/affirmations1.jpg";
import affirmations2 from "../Assets/affirmations2.jpg";
import imatter from "../Assets/imatter.jpeg";
import incharge from "../Assets/incharge.jpg";
import projectidea from "../Assets/projects idea.jpeg";




const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1>Hi, there!</h1>
            <h6>This is a Test-Area</h6>
            <img src={imatter} alt="imatter" width={"100%"}/>
            <img src={affirmations} alt="affirmations" width={"100%"} height={"20%"} className="mt-5"/>
            <img src={affirmations1} alt="affirmations" width={"100%"} height={"20%"} className="mt-5"/>
            <img src={affirmations2} alt="affirmations" width={"100%"} height={"20%"} className="mt-5"/>
          </div>

          <div className="col-md-6 mt-5">
            <img src={puzzle} alt="puzzle" />
            <img src={puzzle1} alt="puzzle" width={"100%"} className="mt-5" />
            <img src={cubic1} alt="cubic" className="mt-5" />
            <img src={incharge} alt="incharge" className="mt-5" />
            <img src={projectidea} alt="project_idea" width={"100%"} height={"20%"} className="mt-5" />

          </div>
        
        </div>
      </div>
      
    </div>
  );
};

export default Home;
