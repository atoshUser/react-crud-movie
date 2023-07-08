import "./App-info.css";
import { Component } from "react";
class AppInfo extends Component {
  render() {
    const { data } = this.props;

    const isLiked = (obj) => {
      const newArr = obj.filter((obj) => {
        return obj.isLiked;
      });
      return newArr;
    };
    return (
      <div className="app-info">
        <h2>Barcha ko'rilgan kinolar soni:{data.length}</h2>
        <h3>Yoqtirilgan kinolar soni: {isLiked(data).length}</h3>
      </div>
    );
  }
}

export default AppInfo;
