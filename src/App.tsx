import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux";
import SearchInput from "./components/SearchInput";
import Home from "./components/Home";
import Alert from "./components/Alert";
import { setAlert } from "./redux/actions/alertActions";
import { setError } from "./redux/actions/weatherActions";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <>
      <SearchInput title="Please type a city" />
      {loading ? (
        <>
          <Spinner animation="grow" size="sm" variant="dark" />
          <Spinner animation="grow" size="sm" variant="dark" />
          <Spinner animation="grow" size="sm" variant="dark" />
        </>
      ) : (
        weatherData && <Home data={weatherData} />
      )}
      {alertMsg && (
        <Alert
          display={alertMsg ? true : false}
          message={alertMsg}
          closeAlert={() => dispatch(setAlert(""))}
        />
      )}
      {error && (
        <Alert
          display={error ? true : false}
          message={error}
          closeAlert={() => dispatch(setError())}
        />
      )}
    </>
  );
};

export default App;
