
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar';
import AppRouter from './Components/AppRouter';


function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <AppRouter />
   </BrowserRouter>
  );
}

export default App;
