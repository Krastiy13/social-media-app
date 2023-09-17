import React, { useState } from "react";
import "./Share.scss";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const [file, setFile] = useState();
  const [desc, setDesc] = useState();
  const [fileURL, setFileURL] = useState("");
  const authUser = useSelector((state) => state.userAuth.userAuth);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);

      console.log(res, "respuesta o que ????");
      return res.data;
    } catch (err) {
      console.log(err, 313123123);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/post", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setFileURL(URL.createObjectURL(e.target.files[0]));
    }
  };

  console.log(fileURL, "url");
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={authUser.coverPic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${authUser.username} ?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <label htmlFor="file">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <div className="item">
                <img /*src={Image}*/ alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img /*src={Map}*/ alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img /*src={Friend}*/ alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
