import { RouterProvider } from 'react-router-dom'
import './App.css'
import appRouter from './routes/appRouter'
import { Provider } from 'react-redux'
import { appStore } from './utils/appStore'

const App = () => {
  return (
    <Provider store={appStore}>
    <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
