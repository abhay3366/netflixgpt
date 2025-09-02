import { RouterProvider } from 'react-router-dom'
import './App.css'
import appRouter from './routes/appRouter'

const App = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
