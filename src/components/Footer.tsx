import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
} from 'reactstrap'

const Footer = () => {
  return (
    <div style={{}} className='darkbg'>
      <Container>
        <div className='darkbg'>
          <Row className='text-center spacer' color='dark'>
            <h1>Our Location</h1>
            <p className='spacer'>1179 Chauncey St, Brooklyn, NY, 11233</p>
          </Row>

          <Row className='text-center spacer'>
            <h1 className='spacer'>Contact Info</h1>
            <a
              role='button'
              className='btn btn-link spacer nav-link '
              href='tel:+17185901886'
            >
              1-(718) 723-1886
            </a>
            <br />
            <a
              role='button'
              className='btn btn-link spacer nav-link '
              // href='Classycutz@gmail.com'
            >
              Classycutz@gmail.com
            </a>
          </Row>
          <Row className='text-center spacer'>
            <Col>
              <a
                className='btn btn-social-icon btn-instagram'
                href='http://instagram.com/'
              >
                <i className='fa fa-instagram'></i>
              </a>
            </Col>
            <Col>
              <a
                className='btn btn-social-icon btn-facebook'
                href='http://facebook.com/'
              >
                <i className='fa fa-facebook'></i>
              </a>
            </Col>
            <Col>
              <a
                className='btn btn-social-icon btn-twitter'
                href='http://twitter.com/'
              >
                <i className='fa fa-twitter'></i>
              </a>
            </Col>
            <Col>
              <a
                className='btn btn-social-icon btn-google '
                href='http://youtube.com/'
              >
                <i className='fa fa-youtube'></i>
              </a>
            </Col>
          </Row>

          <Row className='text-center spacer'>
            <h1 className='spacer'>Working Hours</h1>
            <p className='spacer'>Mon-Fri: 9:00 AM - 8:00 PM</p>
            <p className=''>Sat-Sun: 11:00 AM - 5:00 PM</p>
          </Row>
        </div>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Footer
