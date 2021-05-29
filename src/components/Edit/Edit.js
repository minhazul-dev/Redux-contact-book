import React from 'react';
import {Link} from 'react-router-dom';
const Edit = () => {
    return (
        <div>
           <div className="container">
            <div className="row">

                <h2 className="display-3 text-center">
                    Add Student
                </h2>
                <div className="col-md-6 shadow mx-auto p-5">
                <form action="">
                    <div className="form-group mb-3">
                        <input type="text" placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" placeholder="Enter your Email" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="number" placeholder="Enter number" className="form-control" />
                    </div>
                    <div className="form-group ">
                        <input type="Submit" value="Update Student" className="  btn btn-dark" />
                        <Link to="/" className=" btn btn-dark ml-3" >Cancel</Link>
                    </div>
                </form>
                </div>
            </div>

            
        </div>
        </div>
    );
};

export default Edit;