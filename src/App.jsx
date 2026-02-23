import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/mainlayout';
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx';
import Members from './pages/member/members.jsx';
function App() {
    return(
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members/>} />
          <Route path="about" element={<About/>} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App;
