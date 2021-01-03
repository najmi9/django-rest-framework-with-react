import React, { useEffect, useState } from 'react';

const Contact = () => {

	const [data, setData] = useState({
		email: "",
		message: ""
	});

	const handleChange = ({ currentTarget }) => {
		const { value, name } = currentTarget;
		setData({ ...data, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		alert(JSON.stringify(data))
	}

	return (
		<main className="m-4">
			<div className="container">
				<div className="title has-text-light"> Contact me: </div>
				<form method="post" onSubmit={handleSubmit}>
					<div class="field">
						<p class="control has-icons-left has-icons-right">
							<input class="input" type="email" name="email" value={data.email}
								placeholder="Email" required onChange={handleChange}
							/>
							<span class="icon is-small is-left">@</span>
							<span class="icon is-small is-right">
								<i class="fas fa-check"></i>
							</span>
						</p>
					</div>
					<div class="field">
						<p class="control">
							<textarea class="textarea is-medium" onChange={handleChange} value={data.message} name="message" placeholder="Type here your message" required></textarea>

						</p>
					</div>
					<div className="buttons">
						<button class="button is-success is-medium">
							<i className="fas fa-paper-plane has-text-info-dark"></i>  Send</button>
					</div>
				</form>
			</div>
		</main>
	);
}


export default Contact;