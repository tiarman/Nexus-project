import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageServices = () => {
    const [loading, setLoading] = useState([true])
    const [viewServices, setServices] = useState([])


    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/view-services`).then(res=>{
            if(res.data.status === 200)
            {
                setServices(res.data.servicess)
                setLoading(false);
                // console.log("Datas", res.data.servicess);
            }
        });
        

    }, []);

    
        if(loading)
        {
            return <h4>Loading View Services....</h4>
        }
        else
        
            {
                var display_services = "";
               
                display_services = viewServices.map( (item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.tittle}</td>
                            <td>{item.description}</td>
                            <td><img src={`http://127.0.0.1:8000/${item.image}`} width='50px' alt="Images"/></td>
                            <td>
                                <Link to={`edit-student/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                            </td>
                            <td><button type='button' className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                    );
                });
            

        }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    <Link to={'/dashboard/add-services'} className="btn btn-primary btn-sm float-end"> Add Services</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className='table-responsive'>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tittle</th>
                                            <th>Description</th>
                                            <th>Images</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {display_services}
                                    </tbody>
                                </table>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;