import { Component } from "react";
import { Container, Row } from "react-bootstrap";

class NewReleases extends Component {
  state = {
    film: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    try {
      const res = await fetch(
        "https://www.omdbapi.com/?apikey=3ac4f183&s=Twilight"
      );
      if (res.ok) {
        const data = await res.json();
        const film = data.Search;
        this.setState({
          film: [film[0], film[1], film[2], film[3], film[4], film[5]],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container fluid>
        <h4>New Releases</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
          {this.state.film.map((el) => {
            return (
              <div key={el.imdbID} className="col mb-2 px-1">
                <img className="img-fluid" src={el.Poster} alt="Movie Pic" />
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default NewReleases;
