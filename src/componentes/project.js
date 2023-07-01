import { useState } from "react";
import siteImg from "../images/project.png";
const Projects = () => {
    const [x ,setX] = useState(1);
  return (
    <>
      <div className="container py-5" id="projects">
        <h2 className="text-center h1 color-ld2">Projects</h2>
        <p
          className="text-center color-ld2 text-capitalize"
          style={{ fontSize: "18px" }}
        >
          my name is mohamed, i live in beni sweif and this is my 1st project in
          react
        </p>

        <ul className="tabs d-flex justify-content-center text-center w-100 w-md-75">
          <li className={`tab col-4 ${x==1?"active":""}`} onClick={()=>setX(1)}>1st setcion</li>
          <li className={`tab col-4 ${x==2?"active":""}`} onClick={()=>setX(2)}>2nd setcion</li>
          <li className={`tab col-4 ${x==3?"active":""}`} onClick={()=>setX(3)}>3rd setcion</li>
        </ul>

        <div className={` proj-cards px-2 py-3 ${x==1?"d-flex":"d-none"} gap-4 justify-content-around align-items-center flex-wrap ` }>
          <div className="project-card col-10 col-md-5 col-lg-3 position-relative ">
            <div className="card-image " style={{ borderRadius: "10px" }}>
              <img
                src={siteImg}
                className="w-100"
                style={{ borderRadius: "10px" }}
              ></img>
            </div>
            <h3>Quran Site</h3>
          </div>
          <div className="project-card col-10 col-md-5 col-lg-3 position-relative ">
            <div className="card-image " style={{ borderRadius: "10px" }}>
              <img
                src={siteImg}
                className="w-100"
                style={{ borderRadius: "10px" }}
              ></img>
            </div>
            <h3>Quran Site</h3>
          </div>
          <div className="project-card col-10 col-md-5 col-lg-3 position-relative ">
            <div className="card-image " style={{ borderRadius: "10px" }}>
              <img
                src={siteImg}
                className="w-100"
                style={{ borderRadius: "10px" }}
              ></img>
            </div>
            <h3>Quran Site</h3>
          </div>
          <div className="project-card col-10 col-md-5 col-lg-3 position-relative ">
            <div className="card-image " style={{ borderRadius: "10px" }}>
              <img
                src={siteImg}
                className="w-100"
                style={{ borderRadius: "10px" }}
              ></img>
            </div>
            <h3>Quran Site</h3>
          </div>
          <div className="project-card col-10 col-md-5 col-lg-3 position-relative ">
            <div className="card-image " style={{ borderRadius: "10px" }}>
              <img
                src={siteImg}
                className="w-100"
                style={{ borderRadius: "10px" }}
              ></img>
            </div>
            <h3>Quran Site</h3>
          </div>
          <div className="project-card col-10 col-md-5 col-lg-3 position-relative ">
            <div className="card-image " style={{ borderRadius: "10px" }}>
              <img
                src={siteImg}
                className="w-100"
                style={{ borderRadius: "10px" }}
              ></img>
            </div>
            <h3>Quran Site</h3>
          </div>
        </div>

        <p
          className={`${x==2?"d-block":"d-none"}  text-center color-ld2 text-capitalize px-2 py-3 `}
          style={{ fontSize: "18px" }}
        >
          my name is mohamed, i live in beni sweif and this is my 1st project in
          react
        </p>
       
      </div>
    </>
  );
};
export default Projects;
