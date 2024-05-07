import { GlobalStyle } from './globalStyles'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
      </>
    ),
  },
  {
    path: '/catalog',
    element: (
      <>
        <Header />
        catalog
      </>
    ),
  },
])

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />

        <ScrollToTop />

        <RouterProvider router={router} />

        <Footer />
      </Suspense>
    </>
  )
}

export default App
