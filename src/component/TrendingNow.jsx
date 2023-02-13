import { Component } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

class TrendingNow extends Component {
  // Creo stato con array vuoto
  state = {
    film: [],
    isLoading: true,
  };
  // richiamp funzione fetch dentro il component per far eseguire una sola volta
  componentDidMount = () => {
    this.getData();
  };

  // Faccio fetch
  getData = async () => {
    try {
      const res = await fetch(
        "https://www.omdbapi.com/?apikey=3ac4f183&s=harry%20potter"
      );
      if (res.ok) {
        const data = await res.json();
        // Creo una costante per entrare in Search e dunque lavorare su array
        const film = data.Search;
        console.log(film);
        // Setto lo state passandogli i dati della chiamata
        this.setState({
          film: [film[0], film[1], film[2], film[3], film[4], film[5]],
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container fluid>
        <h4>Trending Now</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
          {!this.state.isLoading &&
            this.state.film.map((el) => {
              return (
                <div key={el.imdbID} className="col mb-2 px-1">
                  <img className="img-fluid" src={el.Poster} alt="Movie Pic" />
                </div>
              );
            })}
          {this.state.isLoading && (
            <div>
              <Spinner as="span" animation="grow" size="sm" variant="danger" />
            </div>
          )}
        </Row>
      </Container>
    );
  }
}

export default TrendingNow;
