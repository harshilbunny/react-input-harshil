import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export default class InputHarshil extends Component {
  static propTypes = { value: PropTypes.string, placeholder: PropTypes.string }
  state = { value: '' }
  componentDidMount() {
    const { value } = this.props
    this.setState({ value: value })
  }
  handleInputChange = e => {
    const { value } = e.target

    this.setState({ value: value })
  }

  inputNode = () => {
    const { placeholder } = this.props
    const { value } = this.state
    return (<input className={styles.input} type='text' placeholder={placeholder} value={value} onChange={this.handleInputChange} />)
  }

  render() { return <div className={styles.container}>{this.inputNode()}</div> }
}