import './App.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
import Bar from '../bar/bar';


function App() {
  return (
    <div className="container">
      <Header/>
      <Main/>
      <Bar/>
      <Footer/>
    </div>
  );
}

export default App;
