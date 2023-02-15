import { useEffect } from "react";
import { useState } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);

  const [film, setFilm] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://www.omdbapi.com/?apikey=3ac4f183&s&i=" + params.filmId
      );
      if (res.ok) {
        const data = await res.json();
        // Creo una costante per entrare in Search e dunque lavorare su array
        // const film = data.Search;
        // console.log(film);
        // Setto lo state passandogli i dati della chiamata
        /*           this.setState({
          film: [data],
          isLoading: false,
        }); */
        setFilm(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Img className="imgDetails" variant="top" src={film.Poster} />
            <Card.Body>
              <Card.Title>{film.Title}</Card.Title>
              <Card.Text>{film.Plot}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
