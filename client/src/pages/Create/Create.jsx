import "./create.scss";
import { SideBar } from "../../components/";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

export const Create = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, postData, error } = useFetch(
    `http://localhost:5000/blog/create`,
    "POST"
  );

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const addCategory = () => {
    if (tag && !tags.includes(tag)) {
      let c = tag.trim().toLowerCase();
      setTag("");
      setTags((prevValue) => {
        return [...prevValue, c];
      });
    }
  };

  const handlePublish = () => {
    const blogData = {
      title: title,
      author: user.userName,
      body: desc,
      tags: tags,
    };
    postData(blogData);
  };

  useEffect(() => {
    if (user) {
      return;
    } else {
      navigate("/signin");
    }

    console.log(data, error);
  }, [user, navigate, data, error]);

  if (user) {
    return (
      <div className="create">
        <SideBar />
        <div className="create-container">
          <h1 className="title">Create</h1>
          <div className="create-blog-form">
            <div className="input-container">
              <input
                type="text"
                name="title"
                required
                placeholder=" "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="title" className="placeholder">
                Title
              </label>
            </div>
            <div className="input-container category">
              <input
                id="catInput"
                type="text"
                name="category"
                required
                placeholder=" "
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <label htmlFor="category" className="placeholder">
                Tags
              </label>
              <button className="std-btn" onClick={addCategory}>
                +
              </button>
            </div>
            {tags && (
              <div className="cat-container">
                {tags.map((tag, index) => (
                  <div
                    className="tags"
                    key={index}
                    onClick={() => {
                      setTags(tags.filter((ftag) => ftag !== tag));
                    }}
                  >
                    {tag}
                    <span className="tags-cross">x</span>
                  </div>
                ))}
              </div>
            )}
            <textarea
              name="body"
              id="blogBody"
              cols="30"
              rows="10"
              placeholder="Tell Your Story..."
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>

            <button className="std-btn publish-btn" onClick={handlePublish}>
              Publish
            </button>
          </div>
        </div>
      </div>
    );
  }
};
