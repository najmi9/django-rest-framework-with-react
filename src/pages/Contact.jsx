import React, { useState } from 'react';
import '../styles/contact.css';
//import { createContact } from '../service/ContactAPI';
import Swal from 'sweetalert2'

const Contact = () => {

	const [data, setData] = useState({
		email: "",
		message: ""
	});

	const handleChange = ({ currentTarget }) => {
		const { value, name } = currentTarget;
		setData({ ...data, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			//await createContact(data);
			Swal.fire(
      			'Sent!',
      			'Thanks, your message has been sent, we will respond soon!',
      			'success'
    		);
		} catch(e) {
			Swal.fire(
      			'Oops...!',
      			'Unexpected error, try agin',
      			'error'
    		);
		}
	}

	return (
		<section className="container">
			<div className="custom-form mt-5">
				<h4 className="bg-light rounded p-2 text-success"> Contact me: </h4>
				<div className="bg-light rounded p-4 t">
					<form method="post" onSubmit={handleSubmit}>
						<div className="form-group mb-3">
							<label htmlFor="email"> Email :  </label>
								<input className="form-control" type="email" name="email" value={data.email}
									placeholder="Email" id="email"  
									required onChange={handleChange}
								/>
						</div>
						<div className="form-group mb-3">
							<label htmlFor="message"> Message :  </label>
							<textarea className="form-control" 
							onChange={handleChange} value={data.message} 
							name="message" id="message" placeholder="Type here your message" required>
							</textarea>
						</div>
						<div className="form-group">
							<button className="btn btn-success btn-md ">
								<i className="fas fa-paper-plane"></i> Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}


export default Contact;