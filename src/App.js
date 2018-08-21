import React, { Component } from 'react'
import Form from './components/Form'
import Input from './components/Input'
import Select from './components/Select'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Switch from './components/Switch'
import Datepicker from './components/Datepicker'

class App extends Component {
  state = { loading: false }

  submit = model => {
    console.log('model from app', model)
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }
  render() {
    const { loading } = this.state
    return (
      <Form submit={this.submit} loading={loading}>
        <Input
          defaultValue="luisg@mobkii.com"
          label="Nombre completo"
          name="nombre"
          validations="isEmail"
          validationError="This is not a valid email"
          required
        />
        <Input
          label="Nombre completo"
          name="edad"
          validations="isNumeric"
          validationError=""
          defaultValue={6}
          min={5}
          max={10}
          required
          type="number"
        />
        <Select
          label="Selecciona un option"
          name="selectname"
          defaultValue="3"
          required
        />
        <Radio label="Selecciona un option" name="radioname" required />
        <Checkbox label="Selecciona un option" name="Checkboxname" />
        <Datepicker
          label="Selecciona una fecha"
          name="datepicker"
          defaultValue="August 22, 2018"
          required
        />
        <Switch
          label="Selecciona un option"
          name="Switchname"
          checkedText="Si"
          uncheckedText="No"
        />
      </Form>
    )
  }
}

export default App
