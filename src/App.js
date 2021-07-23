import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer.jsx';
import Footer from './SortingVisualizer/Footer';
import Header from './SortingVisualizer/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <SortingVisualizer/>
      <Footer/>
    </div>
  );
}

export default App;
