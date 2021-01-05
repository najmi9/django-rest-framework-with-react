import React from 'react';

const Loader = ({ color }) => {

    if (!color) {
        color = 'blue';
    }

    return (
        <section className="d-flex justify-content-center align-items-center"
            style={{ 'minHeight': 100 + 'vh' }}>
            <spinning-dots
                style={{ "width": 200 + "px", "strokeWidth": 20 + "px", "color": color }}
                dots="8">
            </spinning-dots>
        </section>
    );
}

export default Loader;

