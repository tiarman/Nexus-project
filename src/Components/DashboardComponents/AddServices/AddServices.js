import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const AddServices = () => {
    const [servicesInput, setservicesInput] = useState({
        tittle: '',
        description: '',
    });

    const [picture, setPicture] = useState([]);
    const [errorList, setError] = useState([]);

    const handleInput = (e) =>{
        e.persist();
        setservicesInput({...servicesInput, [e.target.name]:e.target.value});

    }

    const handleImage = (e) => {
        setPicture({image: e.target.files[0]});

    }

    const submitServices =(e) => {
        e.preventDefault();

        const formData = new FormData();
        
        formData.append('tittle', servicesInput.tittle);
        formData.append('description', servicesInput.description);
        formData.append('image', picture.image);
        // console.log(formData.get('image'));
        // console.log(formData.get('tittle'));
        // console.log(formData.get('description'));


        axios.post(`http://127.0.0.1:8000/api/store-services`, formData).then(res=>{
            console.log("Datas",res.formData);

            if(res.data.status === 200)
            {
                swal("Success", res.data.message, "success");
                setError([]);
            }
            else if(res.data.status === 422)
            {
                swal("All Failed are mendatory","errors");
                setError(res.data.errors);
            }
        });
    }
    return (
        <div className="container-fluid px-4">
                      <div className="card mt-4">
                                  <div className="card-header">
                                      <h4>
                                          <Link to={'/dashboard/manage-services'} className="btn btn-danger btn-sm float-end"> Manage Services</Link>
                                      </h4>
                                  </div>
                                  <div className="card-body">
      
      
                                    <div className='tab-content' id='myTab' role='tablist'>
                                        <div className='tab-pane card-body border fade show active' id='home' role='tabpanel' aria-label='home-tab'>

                                       

                                   
                                      
                                      <form onSubmit={submitServices} encType='multipart/form-data'>
                                          <div className="form-group mb-3">
                                              <label>Service Tittle</label>
                                              <input type="text" name="tittle" onChange={handleInput} value={servicesInput.tittle} className="form-control" />
                                              <small className="text-danger">{errorList.tittle}</small>
                                          </div>
                                          <div className="form-group mb-3">
                                              <label>Service Description</label>
                                              <input spellcheck="true" type="text" name="description" onChange={handleInput} value={servicesInput.description}  className="form-control" />
                                              <small className="text-danger">{errorList.description}</small>
                                          </div>
      
      
                                          <div className="form-group mb-3">
                                              <label>Image</label>
                                              <input type="file" name="image" onChange={handleImage}  className="form-control" />
                                              <small className="text-danger">{errorList.image}</small>
                                          </div>
                                         
      
                                          <div className="form-group mb-3">
                                              <button type="submit" className="btn btn-primary">Submit</button>
                                          </div>

                                      </form>
                                      </div>
                                      </div>
                                  </div>
                
                      </div>
                  </div>
    );
};

export default AddServices;