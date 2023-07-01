import { Progress } from "antd";

function Progres (props){


    return (

        <Progress type="circle" percent={props.percent} strokeColor={{ '0%': '#899afb', '100%': '#0f33ff' }} />

    );
}

export default Progres;