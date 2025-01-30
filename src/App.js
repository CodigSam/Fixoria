
import './App.css';
import ProductList from './components/List-product';
import './App.css';
import Sidebar from './components/SideBar';
import Header from './components/Header';
function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="App">
        <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;


