import React from 'react';
import { DatePicker } from 'redux-form-material-ui';
import moment from 'moment';

const Datepicker = ({
    input, 
    placeholder, 
    dateFormat,
    defaultValue, 
    meta: {touched, error} 
    }) => (
    <div>
          <DatePicker 
            floatingLabelStyle={{color: 'blue'}}
            autoOk={true}
            {...input}
            {...custom}
            errorText={touched && error}
            value={input.value !== '' ? new Date(input.value) : null}
            onChange={(e, date) => input.onChange(date)}
          />
    </div>
  );

  
export default Datepicker;
/* 
  import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const Datepicker = ({
    input, 
    placeholder, 
    dateFormat,
    defaultValue, 
    meta: {touched, error} 
    }) => (
    <div>
          <DatePicker 
          {...input} 
          className="form-input"
          dateForm={dateFormat}
          placeholderText={placeholder}
          selected={input.value ? moment(input.value, dateFormat) : null} />
          {touched && error && <span>{error}</span>}
    </div>
  );

  
  export default Datepicker; */