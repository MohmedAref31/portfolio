
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
const Icons = ()=>{
    return(
        <div className="icons d-flex gap-1 justify-content-end">
        <div className="icon  ">
         <a className ="border rounded-circle color-ld2" href="https://web.facebook.com/mohmed.aref.980" target="_blank" > <FiFacebook></FiFacebook> </a>
        </div>
        <div className="icon ">
        <a className ="border rounded-circle color-ld2" href="/#" target="_blank"> <FiLinkedin></FiLinkedin> </a>
        </div>
        <div className="icon ">
        <a className ="border rounded-circle color-ld2" href="/#" target="_blank"> <FiTwitter></FiTwitter> </a>
        </div>
      </div>
    )
}
export default Icons;