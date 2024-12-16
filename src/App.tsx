import { Container, EstiloGlobal } from './style'
import Home from './pages/home'
import { Provider } from 'react-redux'
import store from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Cabecalho from './components/header'

const rota = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <EstiloGlobal />
        <Cabecalho />
        <Container>
          <RouterProvider router={rota} />
        </Container>
      </Provider>
    </>
  )
}

export default App
