import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-surface dark:text-slate-100">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
