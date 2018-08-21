import React from 'react'
import { withFormsy } from 'formsy-react'
import { Form, Select } from 'antd'
const { Item } = Form
const { Option } = Select

class MyInput extends React.Component {
  static defaultProps = {
    feedBack: true,
    type: 'text'
  }

  state = { error: false, blurred: false }

  changeValue = value => {
    this.props.setValue(value)
  }

  onBlur = () => {
    this.setState({ blurred: true })
  }

  render() {
    const errorMessage = this.props.getErrorMessage()
    const value = this.props.getValue() || ''
    const { feedBack, label, name, placeholder, type } = this.props
    const { blurred } = this.state
    return (
      <div>
        <Item
          layout="vertical"
          label={label}
          validateStatus={errorMessage ? 'error' : value ? 'success' : null}
          help={blurred ? (errorMessage ? errorMessage : null) : null}
          hasFeedback={feedBack && blurred}
        >
          <Select
            placeholder={placeholder}
            id={name}
            name={name}
            type={type}
            onChange={this.changeValue}
            onBlur={this.onBlur}
          >
            <Option value="1">Hola</Option>
            <Option value="2">Hola</Option>
            <Option value="3">Hola</Option>
          </Select>
        </Item>
      </div>
    )
  }
}

export default withFormsy(MyInput)
