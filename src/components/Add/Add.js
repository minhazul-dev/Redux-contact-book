import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const Add = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch()

    const history = useHistory()
    console.log(contacts);
    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkPhone = contacts.find(contact => contact.phone === parseInt(phone))

        const checkName = contacts.find(contact => contact.name === name && name)
        if(!email || !phone || !name){
            return toast.warning("Please fill in all fields")
        }
        if(checkEmail){
            return toast.error("This email already exists")
        }
        if(checkName){
            return toast.error("This name already exists")
        }
        const data = {
            id: contacts[contacts.length -1].id + 1, 
            name,
            email,
            phone
        }
        dispatch({type: "ADD_CONTACT", payload:data})
        toast.success("Thanks!! Information Added Successfully")
        history.push("/")
    }
    return (

        <div className="container">
            <div className="row">

                <h2 className="display-3 text-center">
                    Add Student
                </h2>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" placeholder="Enter your Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="phone" placeholder="Enter phone" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group ">
                            <input type="Submit" value="Add Student" className=" btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>


        </div>

    );
};

export default Add;