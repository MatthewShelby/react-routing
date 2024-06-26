import logo from './logo.svg';
import './App.css';
import MainLayout from './components/mainLayout';
import HomeBigTitle from './components/homehead';

import { Routes, Route, BrowserRouter } from "react-router-dom"
import About from "./components/about"
import Contact from "./components/contact"
import DetailsPage from './components/detail';

function App() {
  return (
    <div className="App">
      {/* <MainLayout> */}

      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path="/" element={<HomeBigTitle />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

          </Route>
          <Route exact path="details/:id/:name?/:age?" element={<DetailsPage />} />

        </Routes>
      </BrowserRouter>

      {/* </MainLayout> */}

    </div>
  )
}







function AppOld() {
  return (
    <MainLayout>
      <HomeBigTitle />
      <h3>h3 from app while index is new one.</h3>

    </MainLayout>
  );
}

export default App;
