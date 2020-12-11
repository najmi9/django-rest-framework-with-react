import React, { useState } from 'react';
import { authenticate } from '../service/AuthAPI';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import FinalPage from '../Components/FinalPage';

const Login = ({ history }) => {
    const [credentials, setCredentials] = useState({
        'email': '',
        'password': ''
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setCredentials({ ...credentials, [name]: value })
    };


    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
        try {
            await authenticate(credentials);
            toast.success('Votre connexion a été bien fait');
            setLoading(false);
            history.push("/");
        } catch (error) {
            setError(error)
        }
    }
    return (<div className="bg-light container p-4 mt-4" id="login-desktop">
        <h5 className="text-center text-success m-3"> Connexion au site</h5>
        <div className="bg-light text-center m-2">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input type="email" placeholder="Entrez votre email ..."
                            className="form-control" onChange={handleChange}
                            value={credentials.email} name="email" required={true} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-lock"></i>
                            </div>
                        </div>
                        <input type="password" placeholder="Entrez votre mot de pass ..."
                            className="form-control" name="password"
                            onChange={handleChange} value={credentials.password}
                            required={true} />
                    </div>
                </div>
                <button type="submit"
                    className="btn btn-primary"> login  !
                </button>

            </form>
            <div className="m-3">
                <Link to="/reset-password" className="btn">
                    I forget my passsword?
                </Link>
            </div>
        </div>
    </div>);
}


export default Login;