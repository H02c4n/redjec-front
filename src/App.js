import "./App.css";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  console.log(products);

  return (
    <div className="row">
      {products?.map((product) => {
        const { product_name, quantity, price, total } = product;
        return (
          <div className="col-md-4 d-flex justify-content-center mb-2">
            <Card style={{ width: "18rem" }}>
              <Card.Header>{product_name}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Quantiy: {quantity}</ListGroup.Item>
                <ListGroup.Item>Price: {price}</ListGroup.Item>
                <ListGroup.Item>Total :{total}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default App;
