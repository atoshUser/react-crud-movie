import { Component } from "react";
import { MovieItem } from "../index";
import "./MovieList.css";
class MovieList extends Component {
  render() {
    const { data, trashHandler, handlerLiked } = this.props;
    return (
      <ul className="movie-list">
        {data.map((item) => (
          <MovieItem
            key={item.id}
            {...item}
            trashHandler={() => trashHandler(item.id)}
            handlerLiked={() => handlerLiked(item.id)}
          />
        ))}
      </ul>
    );
  }
}
export default MovieList;
