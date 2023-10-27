import React from "react";
import {
  Row,
  Col,
  Input,
  TreeSelect,
  Slider,
  Menu,
  Layout,
  Form,
  Select,
  Switch,
  Radio,
  Card,
  message,
  Button,
  Upload,
  DatePicker,
  Progress,
  Dropdown,
  Badge,
  List,
} from "antd";
 
const App2 = () =>{

  const label_style = {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 3,
    color: '#4185e0', //"#ba48f0"
  };
 
  return( <>
 
<Form
          // form={mainForm}
          // layout="vertical"
          // name="wrap"
          // labelAlign="left"
          // labelWrap
          // wrapperCol={{
          //   flex: 1,
          // }}
          // colon={false}
          // onFinish={onFinish}
        >
          <Row gutter={24}>
            <Col span={15}>
              <Form.Item
                label={<a style={label_style}>Job ID</a>}
                name="job_id"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                {/* <InputNumber min={1}/> */}
                <Input name='job_id' min={1} type='number' placeholder='Please type'/>                
              </Form.Item>
            </Col>
            {/* <Col span={1}></Col> */}
            <Col span={5}>
              <Form.Item
                name="project_name"
                label={<a style={label_style}>Project Name</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Project Name',
                  },
                ]}
              >
                <TreeSelect
                  showSearch
                  style={{
                    width: '80%',
                  }}
                  dropdownStyle={{
                    maxHeight: 400,
                    overflow: 'auto',
                  }}
            
                  placeholder="Please select"
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                name="task_category"
                label={<a style={label_style}>Task Category</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Task Category',
                  },
                ]}
              >
                <Select
                  style={{ width: '80%' }}
                  status="warning"
                  placeholder="Please select"
                  name="task_category"
                >
               
                </Select>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                name="team"
                label={<a style={label_style}>Team Name</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Team Name',
                  },
                ]}
              >
                <Select
                  style={{ width: '80%' }}
                  status="warning"
                  placeholder="Please select"
                  name="team"
                >
                   
                </Select>
              </Form.Item>
            </Col>
            </Row>
        </Form>
</>
 )
}
  
export default App2;