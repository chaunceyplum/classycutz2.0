import { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
const BasicDateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <DatePicker
      closeOnScroll={true}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat='HH:mm'
      timeIntervals={15}
      timeCaption='time'
      dateFormat='MMMM d, yyyy h:mm aa'
    />
  )
}
export default BasicDateTimePicker
