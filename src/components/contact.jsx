import React, { useState } from 'react';
import { createContact } from '../service/ContactAPI';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
const Contact = () => {

    const [data, setData] = useState({
        email: '',
        message: ''
    });

    const handleSubmit = async () => {
        try {
            await createContact({
                'email': data.email,
                'message': data.message
            });
            toast.success('Your Messages Sended Successfly');
            Redirect('/');
        } catch (e) {
            toast.error('Sorry Your message not Sended')
        }
    }
    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setData({ ...data, [name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="m-2">
                <input type="text" name="email"
                className="form-control" value={data.email}
                onChange={handleChange}
                />
            </div>
            <div className="m-2">
            <textarea name="message"
                className="form-control"
                value={data.message}
                onChange={handleChange}
            >Message</textarea>
             </div>
            <div className="m-2">
                <button type="submit" className="btn btn-success">
                send message
                </button>
            </div>
        </form>
    );
};

export default Contact;
