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
        <section>
            <Helmet>
                <title>najmi-imad.com| My Blog</title>
            </Helmet>
            {!loading && <Loader />}
            {loading && (
                <section className="container mt-5">
                    <h2 className="text-danger bg-light border-bottom p-2">
                     List of Articles: 
                    </h2>
                    <AsideBar />
                </section>
            )}
        </section>
    );
};
export default Blog;
