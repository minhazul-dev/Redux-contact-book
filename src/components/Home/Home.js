import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
             <h3 className="mt-5">Welcome to our contact book</h3>
            <div className="row">
           
                <div className="col-md-12  my-5">
                
                    <Link to="/add" className="btn btn-outline-dark"> Add Contact</Link>
                </div>
                <div className="col-md-6 mx-auto">

                </div>
            </div>

            
        </div>
    );
};

export default Home;