
import HomePage from "./pages/HomePage";
import {Routes, Route, Link,Router} from 'react-router-dom';
import MainPage from "./components/library/MainPage";
import FooterPage from "./pages/FooterPage";
import ExMainPage from "./components/exercise/ExMainPage";
import DiMainPage from "./components/dictionary/DiMainPage";
import MainSharing from "./components/sharing/MainSharing";
import MainDiscuss from "./components/discussion/MainDiscuss";
import MainVideo from "./components/video/MainVideo";
import NoMatchPage from "./pages/NoMatchPage";
import HeaderPage from "./pages/HeaderPage";

function App() {
  return (
    <>
      <HeaderPage/>
  <Routes>
        
        <Route path="/home" element={<HomePage/>}/> 
          <Route path="/home/library" element={<MainPage/>}/>
          <Route path="/home/exercise" element={<ExMainPage/>}/> 
          <Route path='/home/dictionary' element={<DiMainPage/>}/>
          <Route path="/home/sharing" element={<MainSharing/>}/> 
          <Route path='/home/discussion' element={<MainDiscuss/>}/>
          <Route path="/home/video" element={<MainVideo/>}/> 
        
        <Route path="*" element={<NoMatchPage/>} />
  </Routes>
  <FooterPage/>
      
    </>
  );
}

export default App;
