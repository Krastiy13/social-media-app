import React from "react";
import Post from "../Post/Post";
import "./posts.scss";

import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Posts = () => {
  //TEMPORARY
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/post").then((res) => {
      return res.data;
    })
  );
  console.log(isLoading);
  console.log(13123123, data);
  console.log(error, 2222);

  return (
    <div className="posts">
      {error
        ? "Somethings is wrong"
        : isLoading
        ? "Is loading"
        : data.map((post, index) => <Post post={post} key={index} />)}
    </div>
  );
};

export default Posts;
