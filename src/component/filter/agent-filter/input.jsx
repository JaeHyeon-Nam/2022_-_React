import React from "react";
import debounce from "lodash.debounce";

import AgentSuggestions from "./agent-suggestions";

class AgentFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSuggestions: false,
      filterList: {
        AGENT_NAME: ""
      }
    };

    this.displaySuggestions = debounce(this.displaySuggestions, 500);
  }

  displaySuggestions = () => {
    const { AGENT_NAME } = this.state.filterList;

    if (!AGENT_NAME) {
      this.setState({ showSuggestions: false }, () => {
        this.props.handleAgentChange(this.state.filterList);
      });
    } else {
      this.setState({ showSuggestions: true });
    }
  };

  handleAgentChange = evt => {
    const { id, value } = evt.target;

    const newState = {
      ...this.state.filterList,
      [id]: value
    };

    this.setState({ filterList: newState }, () => {
      this.displaySuggestions();
    });
  };

  handleSelectedAgent = agent => {
    console.warn("The selected agent was:", agent);

    const newState = {
      showSuggestions: false,
      filterList: {
        ...this.state.filterList,
        AGENT_NAME: agent.name
      }
    };

    this.setState({ ...newState }, () => {
      this.props.handleAgentChange(this.state.filterList);
    });
  };

  render() {
    const { filterList, showSuggestions } = this.state;

    return (
      <React.Fragment>
        <input
          id="AGENT_NAME"
          type="text"
          onChange={this.handleAgentChange}
          value={filterList.AGENT_NAME}
          className="common agent-name"
          placeholder="Try to search L "
        />

        {showSuggestions && (
          <AgentSuggestions
            agentName={filterList.AGENT_NAME}
            propagateChanges={this.handleSelectedAgent}
          />
        )}
      </React.Fragment>
    );
  }
}

export default AgentFilter;
