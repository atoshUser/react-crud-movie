import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddForm.css";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addFormObj({
      text: this.state.name,
      views: this.state.views,
      id: uuidv4(),
    });
    this.setState({
      name: "",
      views: "",
    });
  };

  render() {
    const { name, views } = this.state;
    return (
      <div className="form">
        <h2>Yangi kino qo'shish</h2>
        <form className="wrapper-input" onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Kino nomi ?"
            name="name"
            value={name}
            onChange={this.changeHandler}
            autoComplete="off"
          />
          <input
            type="text"
            name="views"
            onChange={this.changeHandler}
            autoComplete="off"
            placeholder="Nechi marta ko'rilgan ?"
            value={views}
          />
          <button type="submit">Qo'shish</button>
        </form>
      </div>
    );
  }
}
export default AddForm;
