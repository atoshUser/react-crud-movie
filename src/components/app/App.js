import { Component } from "react";
import { AppInfo, AppFilter, SearchPanel, MovieList, AddForm } from "../index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, text: "Salom Uzbekiston", views: "15", isLiked: false },
        { id: 2, text: "Elon musk", views: "20", isLiked: true },
        { id: 3, text: "Iron man 2", views: "15", isLiked: false },
      ],
      term: "",
    };
  }
  trashHandler = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((obj) => {
          return obj.id !== id;
        }),
      };
    });
  };

  handlerLiked = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((obj) => {
          return obj.id === id ? { ...obj, isLiked: !obj.isLiked } : { ...obj };
        }),
      };
    });
  };
  addFormObj = (obj) => {
    this.setState(({ data }) => {
      return {
        data: [...data, { ...obj, isLiked: false }],
      };
    });
  };

  updateSearchHandler = (data, term) => {
    if (term.length === 0) {
      return data;
    } else {
      return data.filter((obj) => obj.text.toLowerCase().includes(term));
    }
  };

  updateTerm = (text) => {
    const newText = text.toLowerCase();
    this.setState({
      term: newText,
    });
  };
  render() {
    const { data, term } = this.state;
    const updateTerm = this.updateSearchHandler(data, term);
    return (
      <div className="container app">
        <AppInfo data={this.state.data} />
        <div className="wrapper-form">
          <SearchPanel updateTerm={this.updateTerm} />
          <AppFilter />
        </div>
        <div className="movie_list">
          <MovieList
            data={updateTerm}
            trashHandler={this.trashHandler}
            handlerLiked={this.handlerLiked}
          />
          <div className="add-form">
            <AddForm addFormObj={this.addFormObj} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
