import imge from'../images/main.png'

const Contact = ()=>{
    return(
        <>
        <div className='container-fluid gradiant'>

       
        <div className="contact-sec container  d-flex flex-wrap justify-content-center" id='contact'>

            <div className="contact-image col-10 col-lg-5">
                <img src={imge} className='w-75 d-block m-auto'></img>
            </div>
            <from className="col-10 col-lg-6 gap-1 d-flex  flex-column justify-content-start ">
              <h3 className='col-12  color-ld2 text-capitalize mb-3' 
              style={{fontSize:"50px",fontWeight:"700"}}>get in touch</h3>
             <div className='d-flex gap-1'> 
             <div className='input  ' data-placeholder='first name' style={{flexGrow:"1"}}>  <input type='text' className='w-100 d-block'></input> <span>first name</span></div>
               <div className='input 'data-placeholder='last name' style={{flexGrow:"1"}}> <input type='text' className='w-100 d-block'></input> <span> last name</span></div>
             </div>
             <div className='d-flex gap-1' >
             <div className='input ' data-placeholder='email address' style={{flexGrow:"1"}}> <input type='email' className='w-100 d-block'></input> <span>email </span> </div>
               <div className='input 'data-placeholder='phone no' style={{flexGrow:"1"}}> <input type='number' className='w-100 d-block'></input> <span>phone no.</span></div>
             </div>
               <div className='input 'data-placeholder='message' style={{flexGrow:"1"}}> <textarea className='w-100 d-block h-100'></textarea> <span>message</span></div>
                <input className='col-5 text-uppercase btn bg-color-ld2 mt-3 py-3' type="submit" value="sabmit"></input>
            </from>
        </div>
        </div>
        </>
    )
}

export default Contact;