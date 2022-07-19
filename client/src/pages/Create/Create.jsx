import "./create.scss";
import { SideBar } from "../../components/";
import { useEffect, useState } from "react";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    console.log(
      `title: ${title}, desc: ${desc}, cat: ${cat}, category: ${category}`
    );
  }, [title, desc, cat, category]);

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
              type="text"
              name="category"
              required
              placeholder=" "
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="category" className="placeholder">
              Category
            </label>
            <button
              className="std-btn"
              onClick={() => {
                if (cat && !category.includes(cat)) {
                  let c = cat.trim().toLowerCase();
                  setCat("");
                  setCategory((prevValue) => {
                    return [...prevValue, c];
                  });
                }
              }}
            >
              +
            </button>
          </div>
          {category && (
            <div className="cat-container">
              {category.map((cat, index) => (
                <div
                  className="tags"
                  key={index}
                  onClick={() => {
                    setCategory(category.filter((fcat) => fcat !== cat));
                  }}
                >
                  {cat}
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

          <button className="std-btn publish-btn">Publish</button>
        </div>
      </div>
    </div>
  );
};
