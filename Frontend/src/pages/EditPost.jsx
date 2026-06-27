import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!slug) {
            navigate("/");
            return;
        }

        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/posts/slug/${slug}`)
            .then((res) => {
                if (res.data.success) {
                    setPost(res.data.data);
                } else {
                    toast.error("Post not found!", { autoClose: 2000 });
                    navigate("/");
                }
            })
            .catch(() => {
                toast.error("Failed to fetch post!", { autoClose: 2000 });
                navigate("/");
            });
    }, [slug, navigate]);

    

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
                
            </Container>
        </div>
    ) : null;
}

export default EditPost;
