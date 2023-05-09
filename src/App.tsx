import { Route, Routes } from 'react-router-dom'

import FavoriteVacancies from './pages/FavoriteVacancies'
import Home from './pages/Home/Home'
import Main from './pages/Main/Main'
import { OneCard } from './pages/OneCard/OneCard'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './scss/app.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/vacancies/:id" element={<OneCard />} />
          <Route path="/favorites" element={<FavoriteVacancies />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" />
    </Provider>
  )
}

export default App
