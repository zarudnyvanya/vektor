import { GlobalStyle } from './globalStyles'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Food from './components/Food'

const Home = lazy(() => import('./Pages/Home'))
const Header = lazy(() => import('./components/Header/index'))
const Footer = lazy(() => import('./components/Footer/index'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop/index'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <ScrollToTop />
      </>
    ),
  },
  {
    path: '/catalog',
    element: (
      <>
        <Header />
        <Food />
      </>
    ),
  },
])

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />

        <RouterProvider router={router} />

        <Footer />
      </Suspense>
    </>
  )
}

export default App
