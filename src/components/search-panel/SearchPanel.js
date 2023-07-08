import { Component } from "react";
import "./SearchPanel.css";
class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  updateTerm = (e) => {
    const term = e.target.value;
    this.setState({
      term: term,
    });
    this.props.updateTerm(term);
  };
  render() {
    return (
      <input
        className="input"
        type="text"
        onChange={this.updateTerm}
        value={this.state.term}
        placeholder="Kinolarni qidirish"
      />
    );
  }
}
export default SearchPanel;
