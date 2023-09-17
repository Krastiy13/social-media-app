import "./comments.scss";
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(["comment"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const mutation = useMutation(
    (newComments) => {
      return makeRequest.post("/comments", newComments);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comment"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  console.log(postId, 12123123);

  console.log(data, "data");

  return (
    <div className="comments">
      <div className="write">
        <img alt="" />
        <input
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          placeholder="write a comment"
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {data &&
        data.map((comment) => (
          <div className="comment">
            <img src={comment.coverPic} alt="" />
            <div className="info">
              <span>{comment.username}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        ))}
    </div>
  );
};

export default Comments;
