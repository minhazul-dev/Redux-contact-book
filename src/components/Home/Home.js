import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {

    const contacts = useSelector(state => state)
    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({ type:"DELETE_CONTACT", payload:id });
        toast.success("Contact deleted successfully")
    }
    return (
        <div className="container">
            <h3 className="mt-5 text-center">Welcome to our contact book</h3>
            <div className="row">

                <div className="col-md-4 my-5">
                    <Link to="/add" className="btn btn-outline-dark"> Add Contact</Link>
                </div>
                <div className="col-md-8 mx-auto">
                    <table className="table table-hover">
                        <thead className=" bg dark text-center">
                            <tr>
                                <th scope="col">Sl</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact,id) =>(
                                     <tr key={id}>
                                         <td> {id+1} </td>
                                         <td>{contact.name}</td>
                                         <td>{contact.email}</td>
                                         <td>{contact.number}</td>
                                         <td>
                                         {/* <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary ms-4"> Edit </Link>  */}
                                         <button onClick={()=> deleteContact(contact.id)}  className="btn btn-small btn-primary "> Delete </button> 
                                         <a href={`/edit/${contact.id}`}> <button className="btn btn-small btn-primary"> Edit </button> </a>

                                         </td>
                                     </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    );
};

export default Home;