import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddNewService.css"

const AddANewService = () => {
 const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
     
console.log(data)
        axios
          .post("https://polar-basin-99537.herokuapp.com/addNewSevice", {
            data,
          })
          .then((res) => {
            if (res.data.insertedId) {
              alert("Service add Successfully");
              reset();
            } else {
              alert("Added  Faield");
            }
          });


 };


    return (
      <div className="newService">
        <h1>Add A New Package For Your Service </h1>
        <hr className="w-75 mx-auto" />
        <form className=" w-75 my-5 mx-auto row" onSubmit={handleSubmit(onSubmit)}>
          <input
            className=" col-12 mx-auto rounded-3 p-2 my-3  col-md-5"
            placeholder="Package/Service Name"
            {...register("name", { required: true })}
          />
          <input
            className=" col-12 mx-auto rounded-3 p-2 my-3 col-md-5"
            placeholder="Tour Duration(day)"
            {...register("duration", { required: true })}
          />
          <input
            className=" col-12 mx-auto rounded-3 p-2 my-3 col-md-5"
            placeholder="Tour Location"
            {...register("location", { required: true })}
          />
                <input
                    type="number"
            className=" col-12 mx-auto rounded-3 p-2 my-3 col-md-5"
            placeholder="Package Price"
            {...register("price", { required: true })}
          />
          <input
            className=" col-12 mx-auto rounded-3 p-2 my-3  col-md-5"
            placeholder="Tour place photo url"
            {...register("photo", { required: true })}
          />
                <textarea
                    rows="6"
            className=" col-12 col-md-11 rounded-3 mx-auto mb-5 "
            placeholder="Add tour description"
            {...register("description", { required: true })}
          />

          <input className="w-50 mx-auto py-2 bg-warning rounded-3"  type="submit" />
        </form>
      </div>
    );
};

export default AddANewService;