import React, { useState } from 'react';
import UserAPI from '../Services/UserAPI';
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet';

const Activation = ({ history }) => {
    const [activationCode, setCode] = useState('');
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({
        "activationCode": ""
    })
    const apiErrors = {};

    const handleChange = ({ currentTarget }) => {
        setCode(currentTarget.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(false);
        try {
            const response = await UserAPI.activate({ "activationCode": parseInt(activationCode) });
            setErrors({});
            toast.success("votre compte est bien activé, se connecter maintenant !")
            history.push("/login")
        } catch (e) {
            setLoading(true);
            if (e.response) {
                const { violations } = e.response.data;
                if (violations) {
                    violations.forEach(violation => {
                        document.querySelector("input[name=" + violation.propertyPath + "]").classList.add('is-invalid')
                        apiErrors[violation.propertyPath] = violation.message;
                    });
                }
                if (e.response.data.message) {
                    toast.error(e.response.data.message);
                }
                setErrors(apiErrors);
            }

            toast.error("des erreurs dans votre code  !")
        }
    }

    return (<div className="container p-5 m-4">
        <Helmet>
            <title>najmi-imad.com|Account Verification</title>
        </Helmet>
        <h3 className="bg-light text-warning text-center"> 
            Tapez le code d'activation qui a été envoyé à vote email d'inscription : 
        </h3>
        {!loading && (
            <div className="d-flex justify-content-center text-info"
            role="status" id="spinner">
                <div className="spinner-border" role="status" style={{ "width": 3 + "rem", "height": 3 + "rem", "margin": 40 + "px" }} >
                    <span className="sr-only">Loading...</span>
                </div>
            </div>)
        }

        {loading && (
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <input type="number" className='form-control' name="activationCode" value={activationCode}
                    onChange={handleChange} placeholder="code d'activation de compte !" />
                    <div className="invalid-feedback"> {errors.activationCode} </div>
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-success'>
                        Activer Mon Compte
                    </button>
                </div>
            </form>)
        }
    </div>
    );
};

export default Activation;
