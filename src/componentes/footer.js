import Icons from "./icons";
import Logo from "./logo";
const Footer = () => {
  return (
    <>
      <div className="container footer ">
        <div
          className="container bg-color-ld2  gap-4 d-flex flex-wrap   p-3 py-5 justify-content-center align-items-center text-center"
          style={{ borderRadius: "20px" }}
        >
          <h3 className=" text-capitalize col-10 col-md-5 col-lg-4">
            See My Projects At Once & leave Here Your E-mail address
          </h3>
          <div className="input p-1 col-10 col-md-5 col-lg-4 " style={{border:"2px solid var(--m-color)",borderRadius:"5px",height:"fit-content"}}>
            <input className="col-8" type="email"></input>
            <span>Email address</span>
            <input className=" col-4 bg-color-main rounded color-ld2 text-uppercase font-weight-bold" type="submit" value={"sabmit"} ></input>
          </div>
          
        </div>
        <div className="content d-flex justify-content-between align-items-center flex-wrap gap-4">
            <div><Logo></Logo></div>
            <div>
                <Icons className="justify-content-end"></Icons>
                <p className="color-ld2">--Copyrights 2023— All Rights Reserved here By Mohamed Aref Ali</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Footer;
