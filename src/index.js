import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import 'antd/dist/antd.css'
import { LocaleProvider } from 'antd'
import es_ES from 'antd/lib/locale-provider/es_ES'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <LocaleProvider locale={es_ES}>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
)
registerServiceWorker()
