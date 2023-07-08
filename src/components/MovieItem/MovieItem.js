import { Component } from "react";
import "./MovieItem.css";
class MovieItem extends Component {
  render() {
    const { text, isLiked, trashHandler, handlerLiked, views } = this.props;
    return (
      <li className="movie-item">
        {text}
        <span className="viewrs">{views}</span>
        <div className="wrapper-controller">
          <span
            className="fa-solid fa-trash trash"
            onClick={trashHandler}
          ></span>
          <span className="fa-solid fa-check check"></span>
          {isLiked ? (
            <span
              className="fa-solid fa-heart heart"
              onClick={handlerLiked}
            ></span>
          ) : (
            <span
              className="fa-solid fa-thumbs-up finger"
              onClick={handlerLiked}
            ></span>
          )}
        </div>
      </li>
    );
  }
}
export default MovieItem;
