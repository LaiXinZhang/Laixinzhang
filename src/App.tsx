import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Collections from './pages/Collections'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
