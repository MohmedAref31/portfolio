import{Cursor,Typewriter} from 'react-simple-typewriter'
import {BsArrowRightCircle} from 'react-icons/bs' 
import mainImg from "../images/main.png"
const Main = () => {
  const  style1 = {
    ":hover":{
        color:"red",
    }
   }
  return (
    <>
    <div className=' gradiant' id='main'>

      <div className="container  pb-5 pb-md-3 d-flex flex-column-reverse flex-md-row  justify-content-evenly align-items-center" style={{height:"100vh"}}>
      <div className="text-content col-12 col-md-5">
        <p className="hello-message text-capitalize color-ld2 border text-center p-1 px-2 bg-color-gray d-inline-block">
          welcome all in my portfolio
        </p>
        <h1 className='color-ld2 text-capitalize ' >
            hi i'm mohamed aref i'm a 
            <span className='d-bolck color-main'>
                <Typewriter 
                words = {[" frontend developer", " backend developer", " fullstack developer"]}
                loop={0}
                ></Typewriter>
                
                <Cursor cursorStyle="✏"></Cursor>
            </span>
            
        </h1>

        <p className='text-capitalize color-ld2 my-5'> hello everybody i have 1 year of experience in web development</p>

        <a className='color-ld2 text-decoration-none h4 main-contact-btn' href='#contact' style={style1}>lets contact <span><BsArrowRightCircle></BsArrowRightCircle></span></a>

      </div>
      <div className="main-image d-flex ">
        <img src={mainImg} alt="mohamed image" className='col-10 col-lg-8 d-block mx-auto'></img>
      </div>
      </div>
      </div>

    </>
  );
};
export default Main;
