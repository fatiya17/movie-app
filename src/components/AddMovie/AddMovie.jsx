import { useState, useContext } from "react";
import styled from "styled-components";
import Alert from "../Alert/Alert";
import { Form, Label, Input } from "../UI/Form";
import { Heading } from "../UI/Typography";
import Button from "../UI/Button";
import MoviesContext from "../context/MoviesContext";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;


function AddMovieForm() {
  const {movies, setMovies} = useContext(MoviesContext);
  const navigation = useNavigate();
  const [formData, setFormData] = useState({ title: "", year: "" });
  const [errors, setErrors] = useState({});
  // const { movies, setMovies } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate() {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.year) newErrors.year = "Release year is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function AddMovie() {
    const movie = {
      id: "xyz",
      title: formData.title,
      year: formData.year,
      type: "movie",
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, movie]);
    navigation("/");
    setFormData({ title: "", year: "" });
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate() && AddMovie();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Heading>Add Movie</Heading>

        <FormGroup>
          <Label htmlFor="title">Title:</Label>
          <Input
            id="title"
            type="text"
            value={formData.title}
            name="title"
            placeholder="Enter movie title"
            onChange={handleChange}
          />
          {errors.title && <Alert>{errors.title}</Alert>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="year">Release Year:</Label>
          <Input
            id="year"
            type="text"
            value={formData.year}
            name="year"
            placeholder="Enter release year (e.g., 2023)"
            onChange={handleChange}
          />
          {errors.year && <Alert>{errors.year}</Alert>}
        </FormGroup>

        <Button color="green" type="submit">Add Movie</Button>
      </Form>
    </Container>
  );
}

export default AddMovieForm;
