import React from 'react'
import { withFormsy } from 'formsy-react'
import { Form, Checkbox } from 'antd'
const { Item } = Form

class MyInput extends React.Component {
  static defaultProps = {
    feedBack: true
  }

  state = { error: false, blurred: false, checked: undefined }

  changeValue = () => {
    this.setState(({ checked }) => {
      let check = typeof checked === 'undefined' ? true : undefined
      console.log(typeof checked)
      console.log(check)
      this.props.setValue(check)
      return { checked: check }
    })
  }

  onBlur = () => {
    this.setState({ blurred: true })
  }

  render() {
    const errorMessage = this.props.getErrorMessage()
    const value = this.props.getValue() || ''
    const { feedBack, label, name, placeholder, type } = this.props
    const { blurred } = this.state
    // console.log(this.state.checked)
    return (
      <div>
        {/* <Item
          layout="vertical"
          label={label}
          validateStatus={errorMessage ? 'error' : value ? 'success' : null}
          help={blurred ? (errorMessage ? errorMessage : null) : null}
          hasFeedback={feedBack && blurred}
        > */}
        <Checkbox
          placeholder={placeholder}
          id={name}
          name={name}
          //   type={type}
          onChange={this.changeValue}
          //   onBlur={this.onBlur}
        >
          {label}
        </Checkbox>
        {/* </Item> */}
      </div>
    )
  }
}

export default withFormsy(MyInput)
