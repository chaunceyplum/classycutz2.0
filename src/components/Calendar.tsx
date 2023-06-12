import { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import { Container, Row } from 'reactstrap'

function Calendar() {
  const [value, onChange] = useState(new Date())
  const minDate = new Date()
  const addMonths = (date: any, months: number) => {
    date.setMonth(date.getMonth() + months)
    return date
  }
  const maxDate = addMonths(new Date(), 6)

  return (
    <div>
      <Container>
        <Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Row>
        <DateTimePicker
          monthAriaLabel='mm'
          monthPlaceholder='Month'
          minDate={minDate}
          maxDate={maxDate}
          onChange={() => onChange}
          value={value}
        />
      </Container>
    </div>
  )
}
export default Calendar
