import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../redux/actions/alertActions";
import { getWeather, setLoading } from "../redux/actions/weatherActions";

interface SearchInputProps {
  title: string;
}

const SearchInput = ({ title }: SearchInputProps) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispatch(setAlert("City is required!"));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
        {/* <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Today</Nav.Link>
          <Nav.Link href="#features">Next Days</Nav.Link>
        </Nav>
        </Navbar.Collapse> */}
        <Form inline onSubmit={handleSearch}>
          <Form.Control onChange={handleInput} value={city} type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
          <Button type="submit" variant="outline-info">Search</Button>
      </Navbar>
    </>
  );
};

export default SearchInput
