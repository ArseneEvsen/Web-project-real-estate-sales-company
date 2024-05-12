import {useState, useEffect} from 'react'
import axios from 'axios';
import {Container} from 'react-bootstrap';
import SaleCard from '../saleCard/SaleCard';
import "./SalesBoard.css";

const SalesBoard = () => {
  const [sales, setSales] = useState([]);

    useEffect(() => {
      let url = `http://localhost:3005/houses`;
      axios.get(url)
      .then(res => setSales(res.data))
      .catch(err => console.log(err));
    }, []);

  return (
    <section className='bgSection pt-5 pb-5' id="salesBoard">
      <Container className='pt-3 pb-3'>
        <h2 className='pb-3'>Maisons en ventes actuellement :</h2>
        {sales.map((sale)=> {
          return <SaleCard address={sale.address} city={sale.city} price={sale.price} department={sale.department} region={sale.region} surface={sale.surface}></SaleCard>
        })}
      </Container>
    </section>
  )
}

export default SalesBoard;