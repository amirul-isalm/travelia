import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import useAuth from '../Context/useAuth';
import "./MyBooking.css"

const MyBooking = () => {
    const {user}=useAuth()
    const [allBooking, setAllBooking] = useState([])
    useEffect(() => {
          if (!user.email) {
            return (
              <div>
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={80}
                  width={80}
                />
              </div>
            );
          }
       fetch(`http://localhost:5000/allBooking/${user.email}`)
         .then((res) => res.json())
         .then((data) => setAllBooking(data));
     }, [user]);
    
   console.log(allBooking)

    
  

    return (
        <div className="myBooking">
            
        </div>
    );
};

export default MyBooking;