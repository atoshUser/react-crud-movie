import { AppInfo, AppFilter, SearchPanel, MovieList, AddForm } from "../index";
import "./App.css";
const App = () => {
  return (
    <div className="container app">
      <AppInfo />
      <div className="wrapper-form">
        <SearchPanel />
        <AppFilter />
      </div>
      <div className="movie_list">
        <MovieList />
        <div className="add-form">
          <AddForm />
        </div>
      </div>
    </div>
  );
};
export default App;
