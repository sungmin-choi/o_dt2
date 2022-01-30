import React from 'react';
import DataPicker from '../dataPicker/dataPicker';
import { Radio, Form } from 'antd';
const Reservation = () => {
  return <div style={{width:'80%',margin:'auto'}}>
    <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          >
    <Form.Item name='isDirectly'>
    <Radio.Group defaultValue="directly" buttonStyle="solid">
      <Radio.Button value="directly">먹고갈게요</Radio.Button>
      <Radio.Button value="packaging">포장할게요</Radio.Button>
    </Radio.Group>
    </Form.Item>
    <Form.Item>
        <DataPicker/>
    </Form.Item>
    </Form>
        </div>;
};

export default Reservation;
