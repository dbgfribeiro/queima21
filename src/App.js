import './App.css';
import Data from "./products.json";

function App() {
  return (
    <div className="App">
    <h1>Produtos</h1>
      <div className="products">
        { Data.map(product => {
          return(
            <div className="product" key={product.id}>
              <img src={product.image} alt="logo" />
              <div className="product-description">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
