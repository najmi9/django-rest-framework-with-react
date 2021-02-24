import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";
import getPosts from "../components/blog/posts-data";
import { Link } from 'react-router-dom';
import '../styles/blog.css';
import Footer from "../components/Footer";
import Pagination from "../components/pagination";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getPosts()
        .then((res) => setPosts(res))
        .then(() => setLoading(true));
    }, []);
    const itemsPerPage = 6;
    const handlePageChange = page => setCurrentPage(page);

    const paginatedPosts = Pagination.getData(
        posts,
        currentPage,
        itemsPerPage
    );

    return (<>
        <section>
            <Helmet>
                <title>najmi-imad.com| My Blog</title>
            </Helmet>
            {!loading && <Loader />}
            {loading && (
                <div className="container mt-5">
                    <h2 className="text-danger bg-light border-bottom p-2">
                        List of Articles:
                    </h2>
                    <div className="row d-felx justify-content-center align-items-center">
                        { paginatedPosts.map((post, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="card">
                                    <div className="card-header text-center">
                                        <img src={post.image} width="300" height="200"
                                            alt={post.title} className="blog-imge" />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <Link to={post.path} className="custom-link">
                                                {post.title}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                    <div className="navigation mt-4 d-flex justify-content-center">
                        {itemsPerPage <posts.length && (
                            <Pagination
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                length={posts.length}
                                onPageChanged={handlePageChange}
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
        <Footer />
    </>
    );
};



export default Blog;
