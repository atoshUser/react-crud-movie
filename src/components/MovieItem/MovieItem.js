import { Component } from "react";
import "./MovieItem.css";
class MovieItem extends Component {
  render() {
    return (
      <li className="movie-item">
        Iron man
        <div className="wrapper-controller">
          <span className="fa-solid fa-trash trash"></span>
          <span className="fa-solid fa-thumbs-up finger"></span>
          <span className="fa-solid fa-heart heart"></span>
        </div>
      </li>
    );
  }
}
export default MovieItem;
