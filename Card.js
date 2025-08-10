import './Card.css';
export default function Card({products}) {
  return (
  
    <div className="app">
      <h1>Product List</h1>
      <div className="card-container">
         {products.map((products,index) => 
          <div className="card" key={index}>
            <img src={products.images} alt={products.title} />
            <h3>{products.title}</h3>
            <p className="description">{products.description}</p>
            <p className="price">Price: ${products.price}</p>
          </div>
      )}
      </div>
    </div>
  );
}



