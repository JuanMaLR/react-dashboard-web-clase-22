import React from 'react';
import imagenFondo from '../assets/img/404.jpg';

function NotFound(){
    return(
        <div className="text-center">
            <h1>404 Not Found</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={imagenFondo} alt="404 not found"/>
        </div>
        
    )
}


export default NotFound;