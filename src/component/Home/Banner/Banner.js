import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
      <div className="banner ">
        <h1>Explore Your Travel</h1>
        <h3 className="text-light">
          Discover your next great adventure, become an explorer to get started!
        </h3>
        <InputGroup className="mb-3 search">
         
                <FormControl
                    className="forom"
            placeholder="Search"
          
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    );
};

export default Banner;