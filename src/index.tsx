import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { store } from './redux/store'

import './index.scss'

const rootEl = document.getElementById('root')

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <HashRouter>
      <App />
    </HashRouter>
  )
}
