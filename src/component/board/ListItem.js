import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './shared/theme'

const ListItemWrapper = styled.div`
  padding: 10px 0;
  max-height: 200px;
  transition: 0.4s;
  &.list-item-wrapper--hide {
    padding: 0;
    max-height: 0px;
  }
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    padding: 13px 0;
  }
`
const ListItemContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
  color: #8855ff;
  background: #fff;
  border: 1px solid ${props => props.theme.borderGray};
  border-radius: 3px;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  flex-wrap: wrap;
  &:active {
    background: ${props => props.theme.lightGray};
    transform: scale(0.98);
  }
  &.list-item-content--deleted {
    transform: scale(0);
    transform-origin: center 70%;
  }
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    padding: 20px;
  }
`
const ListItemImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 10px;
  flex: 0 0 auto;
  img {
    width: 100%;
    height: auto;
  }
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
`
const ListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  flex: 2 0 auto;
  min-width: calc(100% - 100px);
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    min-width: auto;
  }
`
const ListItemText = styled.form`
  margin-bottom: 4px;
  cursor: default;
  font-size: 14px;
  span {
    font-size: inherit;
    color: ${props => props.theme.black};
  }
  input {
    font-size: inherit;
    color: ${props => props.theme.black};
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0;
    margin: 0;
    &::-moz-selection {
      background: #63a0fb;
      color: #fff;
    }
    &::selection {
      background: #63a0fb;
      color: #fff;
    }
  }
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    font-size: 20px;
    margin-bottom: 10px;
    input {
      min-width: 320px;
    }
  }
`
const ListItemTextSecond = styled.div`
  font-size: 10px;
  color: ${props => props.theme.mediumGray};
`
const ListItemPeople = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-top: 20px;
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    margin-top: 0;
  }
`
const ListItemPerson = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  & + & {
    margin-left: 10px;
  }
  &:after {
    content: none;
    position: absolute;
    bottom: -4px;
    right: -3px;
    font-size: 13px;
    z-index: 10;
  }
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    width: 40px;
    height: 40px;
    &:after {
      font-size: 16px;
    }
    &:nth-child(1) {
      &:after {
        content: '💬';
      }
    }
    &:nth-child(2) {
      &:after {
        content: '👍';
      }
    }
  }
`
const ListItemSelect = styled.div`
  width: 90px;
  background-color: #fff;
  font-size: 13px;
  position: relative;
  cursor: pointer;
  align-self: flex-end;
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    align-self: auto;
  }
  .listitem__select__text {
    width: 100%;
    padding: 7px 20px 7px 0;
    color: ${props =>
      props.showSelect ? props.theme.mediumGray : props.theme.black};
    border-bottom: 1px solid ${props => props.theme.borderGray};
    font-size: inherit;
    border: 1px solid ${props => props.theme.borderGray};
    border-radius: 2px;
    background-color: #fff;
    transition: background-color 0.2s ease-out;
    position: relative;
    z-index: 2;
    & > div {
      opacity: ${props => (props.showSelect ? `0.3` : `1`)};
    }
    @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
      padding: 10px 20px 10px 0;
      &:hover {
        background-color: ${props => props.theme.lightGray};
      }
    }
  }
  .listitem__select__list {
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    max-height: 0;
    position: absolute;
    left: 0;
    top: 36px;
    z-index: 1;
    width: 100%;
    background-color: #fff;
    animation: slide 0.5s ease-in-out reverse;
    &--show {
      max-height: 500px;
      animation: slide 0.5s ease-in-out;
    }
  }
  @keyframes slide {
    0% {
      max-height: 0px;
    }
    100% {
      max-height: 500px;
    }
  }
  .listitem__select__list__item {
    width: 100%;
    padding: 10px 0;
    color: ${props => props.theme.black};
    font-size: inherit;
    border: 1px solid ${props => props.theme.borderGray};
    border-top: none;
    &:hover {
      background-color: ${props => props.theme.lightGray};
    }
  }
`
const SelectArrowDown = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto;
  right: 2.5px;
  svg {
    width: 100%;
  }
`

class ListItem extends Component {
  state = {
    showSelect: false,
    editName: false,
    hasActions: true,
    textValue: '',
    textSecond: ``,
    isDeleted: false,
    isAlive: true
  }
  // textSecond: `Last edited ${this.props.number.daysAgo} days ago by `,
  componentDidMount() {
    this.setState({ textValue: this.props.number.textValue })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dragging !== this.props.dragging) {
      this.setState({ showSelect: false })
    }
  }

  toggleSelect = () => {
    this.setState(prevState => {
      return {
        showSelect: !prevState.showSelect
      }
    })
  }

  toggleEditName = event => {
    event.preventDefault()
    this.setState(prevState => {
      return {
        editName: !prevState.editName
      }
    })
  }

  selectInput = event => {
    event.target.focus()
    event.target.select()
  }

  handleChange = event => {
    this.setState({ textValue: event.target.value })
  }

  deleteItem = () => {
    this.setState({ isDeleted: true })
    this.toggleSelect()
    setTimeout(() => {
      this.setState({ isAlive: false })
    }, 150)
    setTimeout(() => {
      this.props.onDeleteItem(this.props.number.id)
    }, 250)
  }

  render() {
    const { dragging } = this.props
    const {
      showSelect,
      editName,
      textSecond,
      textValue,
      isDeleted,
      isAlive
    } = this.state
    const {
      lastUser,
      hasActions,
      image,
      person1_image,
      person2_image
    } = this.props.number
    let listItemContentClass = ``
    if (isDeleted) listItemContentClass += ` list-item-content--deleted`
    return (
      <ThemeProvider theme={theme}>
        <ListItemWrapper className={isAlive ? `` : `list-item-wrapper--hide`}>
          <ListItemContent className={listItemContentClass}>
            <ListItemImageWrapper>
              <img src={image} alt={textValue} />
            </ListItemImageWrapper>
            <ListItemInfo>
              <ListItemText onSubmit={this.toggleEditName}>
                {editName ? (
                  <input
                    type="text"
                    value={textValue}
                    onChange={this.handleChange}
                    onClick={this.selectInput}
                  />
                ) : (
                  <span onClick={this.toggleEditName}>{textValue}</span>
                )}
              </ListItemText>
              <ListItemTextSecond>
                {textSecond}
                {lastUser}
              </ListItemTextSecond>
            </ListItemInfo>
            <ListItemPeople>
              <ListItemPerson
                style={{ backgroundImage: `url(${person1_image})` }}
              />
              {/* <ListItemPerson
                style={{ backgroundImage: `url(${person2_image})` }}
              /> */}
            </ListItemPeople>
            {hasActions && (
              <ListItemSelect showSelect={showSelect}>
                <div
                  className="listitem__select__text"
                  onClick={this.toggleSelect}
                >
                  Actions
                  <SelectArrowDown>
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 125"
                      style={{ enableBackground: 'new 0 0 100 100' }}
                    >
                      <g>
                        <polygon points="64.4,40.4 51.1,54 37.6,40.7 34.8,43.6 51.2,59.7 67.3,43.2  " />
                      </g>
                    </svg>
                  </SelectArrowDown>
                </div>
                {showSelect && (
                  <div
                    className={`listitem__select__list ${
                      showSelect ? 'listitem__select__list--show' : ''
                    }`}
                  >
                    <div
                      className="listitem__select__list__item"
                      onClick={this.toggleSelect}
                    >
                      Download
                    </div>
                    <div
                      className="listitem__select__list__item"
                      onClick={this.deleteItem}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </ListItemSelect>
            )}
          </ListItemContent>
        </ListItemWrapper>
      </ThemeProvider>
    )
  }
}

export default ListItem
