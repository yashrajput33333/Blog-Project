import React from "react";
import { Container, PostForm } from "../components";
import { toast } from "react-toastify";

function AddPost() {
    return (
        <div className="py-8">
            <Container>
                <PostForm />
            </Container>
        </div>
    );
}
//test
export default AddPost;
