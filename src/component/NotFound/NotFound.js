import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import "./NotFound.css"
const NotFound = () => {
   

    const history = useHistory()
    
    const clickGotoHome = () => {
        history.push("./home")
    }

    return (
        <div className="notfound">
            <button onClick={clickGotoHome}> <FontAwesomeIcon icon={faBackspace}/> Back To Home </button>
        </div>
    );
};

export default NotFound;