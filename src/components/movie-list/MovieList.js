import { Component } from "react";
import { MovieItem } from "../index";
import "./MovieList.css";
class MovieList extends Component {
  render() {
    return (
      <ul className="movie-list">
        <MovieItem />
        <MovieItem />
      </ul>
    );
  }
}
export default MovieList;
