import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
