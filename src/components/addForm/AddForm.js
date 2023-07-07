import { Component } from "react";
import "./AddForm.css";
class AddForm extends Component {
  render() {
    return (
      <div className="form">
        <h2>Yangi kino qo'shish</h2>
        <form className="wrapper-input">
          <input type="text" placeholder="Kino nomi ?" />
          <input type="text" placeholder="Nechi marta ko'rilgan ?" />
          <button type="submit">Qo'shish</button>
        </form>
      </div>
    );
  }
}
export default AddForm;
