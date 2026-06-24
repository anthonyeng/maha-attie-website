import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import NoiseOverlay from './NoiseOverlay'
import ScrollProgress from './ScrollProgress'
import BackToTop from './BackToTop'

export default function Layout() {
  return (
    <>
      <NoiseOverlay />
      <Header />
      <ScrollProgress />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
