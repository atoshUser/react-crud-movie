import { AppInfo, AppFilter, SearchPanel } from "../index";
import "./App.css";
const App = () => {
  return (
    <div className="container app">
      <AppInfo />
      <div className="wrapper-form">
        <SearchPanel />
        <AppFilter />
      </div>
    </div>
  );
};
export default App;
