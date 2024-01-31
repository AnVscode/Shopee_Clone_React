import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import useRouteElements from './hooks/useRouteElements'

export default function App() {
  const routeElements = useRouteElements()

  return (
    <div>
      {routeElements}
      <ToastContainer />
    </div>
  )
}
