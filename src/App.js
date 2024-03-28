
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadLinesCard from './components/HeadLinesCard'
import Food from './components/food/Food';
import Category from './components/Category'





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadLinesCard/>
      <Food/>
      <Category/>
    </div>
      );
    }
      

      

export default App;
