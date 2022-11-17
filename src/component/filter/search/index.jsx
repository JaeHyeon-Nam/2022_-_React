import React from "react";
import debounce from "lodash.debounce";

const AddressInput = ({ inputValue, handleInput }) => (
  <input
    className="common filter-search"
    type="text"
    placeholder="지역 입력"
    value={inputValue}
    onChange={handleInput}
  />
);
// , 여행지 입력Enter City, Address, Zip/Postal Code, Neighborhood, School or MLS#
const AgentInput = ({ inputValue, handleInput }) => (
  <input
    className="common filter-search"
    type="text"
    placeholder="여행지 입력"
    value={inputValue}
    onChange={handleInput}
  />
);

// Enter Agent Name

const Suggestions = ({ list, handleSuggestionClick }) => (
  <ul className="agents-list search-suggestions">
    {list.map(({ id, name }) => (
      <li key={id} id={id} onClick={handleSuggestionClick}>
        {name}
      </li>
    ))}
  </ul>
);

class FilterSearch extends React.Component {
  state = {
    inputValue: "",
    currentSearch: "Address",
    suggestions: [],
    currentSuggestions: [],
    showSuggestions: false
  };

  constructor(props) {
    super(props);

    this.displaySuggestions = debounce(this.displaySuggestions, 500);
  }

  handleInputChange = evt => {
    this.setState({ inputValue: evt.target.value }, this.displaySuggestions);
  };

  handleSelectChange = evt => {
    const { value } = evt.target;

    const suggestions = this.getSuggestions(value);

    this.setState({ currentSearch: value, inputValue: "", suggestions });
  };

  getSuggestions = value => {
    let suggestions;

    if (value === "Agent") {
      suggestions = [
        { id: 1, name: "Thulio Philipe" },
        { id: 2, name: "José Carlos" },
        { id: 3, name: "Nicolle Cysneiros" }
      ];
    }

    if (value === "Address") {
      suggestions = [
        { id: 1, name: "Indianapolis" },
        { id: 2, name: "Haddonfield Avenue" },
        { id: 3, name: "Indian Hill" }
      ];
    }

    return suggestions;
  };

  displaySuggestions = () => {
    const { inputValue } = this.state;

    if (!inputValue) {
      this.setState({ showSuggestions: false });
    } else {
      this.setState(
        { showSuggestions: true },
        this.filterSuggestions(inputValue)
      );
    }
  };

  filterSuggestions = (inputValue = null) => {
    if (!inputValue) return;
    const normalizedInput = inputValue.toLowerCase();

    const currentSuggestions = this.state.suggestions.filter(({ name }) =>
      name.toLowerCase().includes(normalizedInput)
    );

    this.setState({ currentSuggestions });
  };

  handleSuggestionClick = evt => {
    const { id } = evt.target;

    const currentClicked = this.state.currentSuggestions.find(
      el => el.id === Number(id)
    ).name;

    this.setState({ showSuggestions: false, inputValue: currentClicked });
  };

  componentDidMount() {
    // set address suggestions as default
    const suggestions = this.getSuggestions("Address");
    this.setState({ suggestions });
  }

  renderInput = () => {
    const { currentSearch, inputValue } = this.state;

    return currentSearch === "Address" ? (
      <AddressInput
        inputValue={inputValue}
        handleInput={this.handleInputChange}
      />
    ) : (
      <AgentInput
        inputValue={inputValue}
        handleInput={this.handleInputChange}
      />
    );
  };

  render() {
    const { showSuggestions, currentSuggestions } = this.state;

    return (
      <React.Fragment>
        <select className="common select" onChange={this.handleSelectChange}>
          <option value="Address">지역명</option>
          <option value="Agent">여행지명</option>
        </select>

        {this.renderInput()}

        {showSuggestions && (
          <Suggestions
            list={currentSuggestions}
            handleSuggestionClick={this.handleSuggestionClick}
          />
        )}
      </React.Fragment>
    );
  }
}

export default FilterSearch;
