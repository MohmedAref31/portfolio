import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Progres from './gradiant';
const Skills = ()=>{
    

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tabletb: {
    breakpoint: { max: 1024, min: 767 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 766, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

    return(
        <>

            <div className="container " id="skills" >

            <div className='mx-auto bg-color-gray color-ld2 p-3 text-center' style={{width:"90%",borderRadius:"20px",}}>
                <h2 className='h1 text-capitalize'>skills</h2>
                <p className='text-capitalize mb-5'>you can see my skills</p>
               
               <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  
  transitionDuration={500}
  containerClass="carousel-container"
  
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
 <div>
 <Progres percent={90}></Progres>
    <h3 className="mt-2 text-uppercase">HTML</h3>
 </div>
 <div>
 <Progres percent={80}></Progres>
    <h3 className="mt-2 text-uppercase">css</h3>
 </div>
 <div>
 <Progres percent={75}></Progres>
    <h3 className="mt-2 text-uppercase">bootstrap</h3>
 </div>
 <div>
 <Progres percent={75}></Progres>
    <h3 className="mt-2 text-uppercase">js</h3>
 </div>
 <div>
 <Progres percent={60}></Progres>
    <h3 className="mt-2 text-uppercase">react</h3>
 </div>
</Carousel>
            </div>        
            </div>
        
        </>

    )
}
export default Skills;