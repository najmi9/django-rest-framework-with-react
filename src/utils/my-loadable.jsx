import Loadable from 'react-loadable';
import Loader from '../components/Loader';
import React from 'react';

const ErrorHandle = (props) => (<div className="bg-light m- p-5">
    <h1>Error! </h1>
    <button onClick={props.retry} className="btn btn-warning text-light">
        Retry <i className="fas fa-load"></i>
    </button>
</div>)

function Loading(props) {
    if (props.error) {
        return (<ErrorHandle />);
    } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
    }
    else if (props.pastDelay) {
        return <Loader />;
    } else {
        return null;
    }
}

export default function MyLoadable(opts) {
    return Loadable(Object.assign({
        loading: Loading,
        delay: 200,
        timeout: 10000,
    }, opts));
};
