import React from 'react'
import { withFormsy } from 'formsy-react'
import { Form, DatePicker } from 'antd'
import moment from 'moment'
import locale from 'antd/lib/date-picker/locale/es_ES'
const { Item } = Form

class MyInput extends React.Component {
  static defaultProps = {
    feedBack: true,
    format: 'LL'
  }

  state = { error: false, blurred: false }

  changeValue = value => {
    const date = value ? moment(value).format(this.props.format) : undefined
    console.log(date)
    this.props.setValue(date)
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
          <DatePicker
            locale={locale}
            placeholder={placeholder}
            id={name}
            name={name}
            type={type}
            onChange={this.changeValue}
            onBlur={this.onBlur}
          />
        </Item>
      </div>
    )
  }
}

export default withFormsy(MyInput)
