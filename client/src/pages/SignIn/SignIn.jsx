import "./signin.scss";
import { useContext, useEffect, useState } from "react";
import { formFormat } from "../../data/signInFormat";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignIn = () => {
  // const { data, postData, error } = useFetch(
  //   `http://localhost:5000/auth/signIn`,
  //   "POST"
  // );

  let [data, setData] =useState();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const { user, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmission = () => {
    axios.post('http://localhost:5000/auth/signIn', formData)
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  useEffect(() => {
    if (user) {
      console.log(data);
      navigate("/");
    }
    if (data) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    }
  }, [data, dispatch, navigate, user]);

  return (
    <div className="signup">
      <div className="form-container">
        <div className="logo">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <h1 className="title">Sign In</h1>
        {formFormat.map((input, index) => (
          <div className="input-container" key={index}>
            <input
              type={input.type}
              name={input.name}
              required={input.required}
              placeholder=" "
              value={formData[input.name]}
              onChange={handleChange}
            />
            <label htmlFor={input.name} className="placeholder">
              {input.label}
            </label>
          </div>
        ))}
        <button className="std-btn" onClick={handleSubmission}>
          Sign In
        </button>
        {/* {error && <span>{error.message}</span>} */}
      </div>
    </div>
  );
};
