import React, { useState } from 'react';
import UserAPI from '../Services/UserAPI';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

const Register = ({ history }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({})
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });


    const [user, setUser] = useState({
        'username': '',
        'email': '',
        'password': '',
        'passwordConfirm': ''
    })

    const apiErrors = {};

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const data = await UserAPI.register(user);
            setErrors({});
            toast.success("Votre compte à été bien crée !, il reste juste que t'activer.")
            document.getElementById('js-action').style.display = "none";
            history.push("/email-confirmation");

        } catch (error) {
            setError(error)
        }
    }


    const Component = () => (<div className="p-2 mt-2 container bg-light border text-center" id="js-action">
        <h4 className="text-center text-info m-3"> Création de compte : </h4>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" name="username" onChange={handleChange}
                    value={user.username}
                    placeholder="entrer votre username..."
                    className="form-control" />
                <div className="invalid-feedback"> {errors.username} </div>
            </div>

            <div className="form-group">
                <input type="email" name="email" onChange={handleChange}
                    value={user.email}
                    placeholder="entrer votre email..."
                    className="form-control"
                />
                <div className="invalid-feedback"> {errors.email} </div>
            </div>

            <div className="form-group">
                <input type="password" name="password" onChange={handleChange}
                    value={user.password}
                    placeholder="entrer votre password..."
                    className="form-control"
                />
                <div className="invalid-feedback"> {errors.password} </div>
            </div>

            <div className="form-group">
                <input type="password" name="passwordConfirm" onChange={handleChange}
                    value={user.passwordConfirm}
                    placeholder="confirmer votre password..."
                    className="form-control"
                />
                <div className="invalid-feedback"> {errors.passwordConfirm} </div>
            </div>

            <button type="submit" className="btn btn-outline-success btn-xl">
                S'iscrire !
            </button>
        </form>
    </div>);

    return (<Component />);
}
export default Register;