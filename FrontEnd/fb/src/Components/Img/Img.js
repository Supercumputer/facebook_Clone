import { noImage } from "../../Image";
import { useState } from "react";
function Img({src, alt, ...props}) {
    const [ picter, setPicter ] = useState('')

    const handlerError = () =>{
        setPicter(noImage)
    }

    return ( 
        <img src={picter || src} alt={alt} {...props} onError={handlerError}/>
     );
}

export default Img;