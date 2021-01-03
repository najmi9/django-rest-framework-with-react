import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";
import AsideBar from "../components/AsideBar";

const Blog = ({ history }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    return (
        <div>
            <Helmet>
                <title>najmi-imad.com| My Blog</title>
            </Helmet>
            {!loading && <Loader />}
            {loading && (
                <section className="container mt-5">
                    <div className="title has-text-white"> List of Articles: </div>
                    <AsideBar />
                </section>
            )}
        </div>
    );
};
export default Blog;
