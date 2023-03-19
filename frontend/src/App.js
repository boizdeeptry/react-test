import { useRoutes } from 'react-router-dom'
import routesConfig from './router/router'

function App() {
  const routes = useRoutes(routesConfig)
  return <div>{routes}</div>
}

export default App
