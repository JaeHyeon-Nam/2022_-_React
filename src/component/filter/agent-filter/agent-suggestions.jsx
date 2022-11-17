import React from "react";

class AgentSuggestions extends React.Component {
  state = {
    selectedAgent: {},
    currentAgents: [],
    agents: [
      { id: 1, name: "José Carlos" },
      { id: 2, name: "Thulio Philipe" },
      { id: 3, name: "Nicolle Cysneiros" }
    ]
  };

  handleClick = (id = null) => {
    if (!id) return;
    const agent = this.state.agents.find(el => el.id === id);
    if (agent) this.updateCurrentAgent(agent);
  };

  updateCurrentAgent = agent => {
    this.setState({ selectedAgent: agent }, () => {
      this.props.propagateChanges(this.state.selectedAgent);
    });
  };

  filterAgents = (agentName = null) => {
    if (!agentName) return;
    const normalizedInput = agentName.toLowerCase();

    const currentAgents = this.state.agents.filter(({ name }) =>
      name.toLowerCase().includes(normalizedInput)
    );

    this.setState({ currentAgents });
  };

  componentDidMount() {
    if (this.props.agentName) this.filterAgents(this.props.agentName);
  }

  componentDidUpdate(prevProps) {
    if (this.props.agentName !== prevProps.agentName) {
      this.filterAgents(this.props.agentName);
    }
  }

  render() {
    const { currentAgents } = this.state;

    return (
      <React.Fragment>
        {currentAgents.length >= 1 && (
          <ul className="agents-list">
            {currentAgents.map(item => (
              <li key={item.id} onClick={() => this.handleClick(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    );
  }
}

export default AgentSuggestions;
