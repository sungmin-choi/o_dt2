import moment from "moment";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

import React, { useCallback } from 'react';

const DataPicker = () => {
   const range= useCallback((start, end)=> {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      },[]);
    const disabledDate= useCallback((current)=>{
        return current && current < moment().endOf('day');
    },[]);
    
    const disabledDateTime= useCallback(()=> {
        return {
          disabledHours: () => range(0, 12).concat(23)
        }
      },[]);
    
  return  <Space direction="vertical" size={12}>
  <DatePicker
    format="YYYY-MM-DD HH:mm"
    disabledDate={disabledDate}
    disabledTime={disabledDateTime}
    showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
  />
  </Space>
};

export default DataPicker;
