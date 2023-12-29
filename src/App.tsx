import useRouteElements from './hooks/useRouteElements'

export default function App() {
  const routeElements = useRouteElements()

  return <div>{routeElements}</div>
}
