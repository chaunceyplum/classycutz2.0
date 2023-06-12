// import Table from 'bootstrap'

import { Container } from 'reactstrap'

const PricingTable = () => {
  return (
    <div>
      <Container>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Barber</th>
              <th>Barber</th>
              <th>Barber</th>
              <th>Barber</th>
              <th>Barber</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>barber1</td>
              <td>barber1</td>
              <td>barber1</td>
              <td>barber1</td>
              <td>barber1</td>
            </tr>
            <tr>
              <td>barber2</td>
              <td>barber2</td>
              <td>barber2</td>
              <td>barber2</td>
              <td>barber2</td>
            </tr>
            <tr>
              <td>barber3</td>
              <td>barber3</td>
              <td>barber3</td>
              <td>barber3</td>
              <td>barber3</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  )
}

export default PricingTable
