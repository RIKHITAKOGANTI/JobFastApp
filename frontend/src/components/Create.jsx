import React, { useState } from "react";
import axios from "axios";
import { Typography, TextField, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Create.css"; // Import the CSS file

const initial = {
  post_id: "",
  postProfile: "",
  reqExperience: 0,
  postTechStack: [],
  postDesc: "",
};

const Create = () => {
  const skillSet = [
    {
      name: "Javascript",
    },
    {
      name: "Java",
    },
    {
      name: "Python",
    },
    {
      name: "Django",
    },
    {
      name: "Angular",
    },
    {
      name: "ReactJS",
    },
  ];

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/jobPost", form)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  const { postId, postProfile, reqExperience, postDesc } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      postTechStack: [...form.postTechStack, e.target.value],
    });
  };

  return (
    <div className="create-container">
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Add a New Job Post
      </Typography>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className="create-form"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            min="0"
            type="number"
            onChange={(e) => setForm({ ...form, postId: e.target.value })}
            label="Enter your Post ID"
            value={postId}
          />
          <TextField
            type="string"
            required
            onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
            label="Job-Profile"
            value={postProfile}
          />
          <TextField
            min="0"
            type="number"
            required
            onChange={(e) =>
              setForm({ ...form, reqExperience: e.target.value })
            }
            label="Years of Experience"
            value={reqExperience}
          />
          <TextField
            type="string"
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
            label="Job-desc"
            value={postDesc}
          />
          <Box sx={{ margin: "1% auto" }} className="skill-set">
            <h3>Please mention required skills</h3>
            <ul>
              {skillSet.map(({ name }, index) => {
                return (
                  <li key={index}>
                    <div>
                      <div>
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                          onChange={handleChange}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>
                          {name}
                        </label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Box>
          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Create;
