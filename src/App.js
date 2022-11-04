import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './LandingPage/landing_page';
import PostView from './components/post-view/post-view';
import Upload from './components/uploadpage/upload';
function App() {
  
  return (
   <>
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/post" element={<PostView/>}/>
          <Route exact path="/upload" element={<Upload/>}/>
        </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
