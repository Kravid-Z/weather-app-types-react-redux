import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { WeatherData } from "../redux/types";

interface WeatherProps {
  data: WeatherData;
}

const Home = ({ data }: WeatherProps) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <>
      <Container className="text-center p-3">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Jumbotron fluid>
              <Container>
                <Row className="city">
                  <Col>
                    <h2>
                      {data.name} - {data.sys.country}
                    </h2>
                  </Col>
                </Row>
                <Row className="temperature">
                  <Col>
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/>
                    <h1>
                      {fahrenheit}
                      <sup>&#8457;</sup> / {celsius}
                      <sup>&#8451;</sup>{" "}
                    </h1>
                    <h2>{data.weather[0].description}</h2>
                  </Col>
                </Row>
                <Row className="icons">
                    <Col className="wind">{data.wind.speed}</Col>
                    <Col className="humidity">{data.main.humidity} </Col>
                    <Col className="pressure">{data.main.pressure}</Col>
                </Row>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;