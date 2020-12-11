import React, { useEffect } from 'react';

const Loader = ({ color }) => {

    if (!color) {
        color = 'orange';
    }

    return (
        <section className="is-flex is-justify-content-center is-align-items-center"
            style={{ 'min-height': 100 + 'vh' }}>
            <spinning-dots
                style={{ "width": 200 + "px", "strokeWidth": 20 + "px", "color": color }}
                dots="8">
            </spinning-dots>
        </section>
    );
}

export default Loader;

