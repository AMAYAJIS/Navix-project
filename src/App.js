import React, { useState, Fragment } from "react";
import {
  Row,
  Col,
  Input,
  TreeSelect,
  Slider,
  Breadcrumb,
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
  Pagination,
  Checkbox,
  Badge,
  List,
  Avatar
} from "antd";

import { LaptopOutlined, UserOutlined, NotificationOutlined,ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
import moment from "moment";

import ColorPicker from "./ColorPicker";
import darkVars from './dark.json';
import lightVars from './light.json';
import ClientProjectList from './ClientProjectList';
import './styles/main.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const label_style = {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 3,
    color: '#4185e0', //"#ba48f0"
  };
  const { TextArea } = Input;
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChange1 = (date, dateString) => {
    console.log(date, dateString);
  };
  const treeDataClientApp = ClientProjectList;
  const onFinish = (fieldsValue) => {
    // const userName = JSON.parse(sessionStorage.getItem('user'));
    const fd = new FormData();
    // console.log('tab value is drawn', fieldsValue, fieldsValue?.team);
    fd.append('job_id', fieldsValue?.job_id);
    fd.append('project_name', fieldsValue?.project_name);
    fd.append('task_category', fieldsValue?.task_category);
    fd.append('team', fieldsValue?.team);
    fd.append('name', fieldsValue?.name);
    fd.append('progress', fieldsValue?.progress);
    fd.append('status', fieldsValue?.status);
    fd.append('start_date', fieldsValue?.start_date.format('YYYY-MM-DD'));
    fd.append('completion_date', fieldsValue?.completion_date.format('YYYY-MM-DD'));
    fd.append('days_required', fieldsValue?.days_required);
    fd.append('comments', fieldsValue?.comments);
    fd.append('personal_comments', fieldsValue?.personal_comments);
   
    // const projectName = fieldsValue?.project_name.split('-')[0]; // Gets the part before the hyphen
    // fd.append('project_name', projectName);
    // console.log("clientname",projectName)
    // dispatch({
    //   type: 'teams/createTeamsData',
    //   payload: {
    //     data: {
    //       ...fieldsValue,
    //       start_date: fieldsValue?.start_date.format('YYYY-MM-DD'),
    //       completion_date: fieldsValue?.completion_date.format('YYYY-MM-DD')
    //     //   created_by_user: userName.name,
    //     //   client_name: projectName
    //     },
    //   },
    // });
    // console.log("printing fd", fd)
  };


const App = (props) => {
  const [vars, setVars] = useState(() => {
    let initialValue = lightVars;
    let storedVars;

    try {
      storedVars = localStorage.getItem("app-theme");
      if (!storedVars) {
        storedVars = initialValue;
      } else {
        storedVars = Object.assign({}, JSON.parse(storedVars));
      }
    } catch (e) {
      storedVars = initialValue;
    }

    window.less
      .modifyVars(storedVars)
      .then(() => {})
      .catch(() => {
        message.error(`Failed to update theme`);
      });

    return storedVars;
  });

  const [initialValue] = useState(lightVars);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
const [mainForm] = Form.useForm();
  
  const handleColorChange = (varname, color) => {
    const newVars = { ...vars, [varname]: color };

    window.less
      .modifyVars(newVars)
      .then(() => {
        setVars(newVars);
        localStorage.setItem("app-theme", JSON.stringify(newVars));
      })
      .catch(() => {
        message.error(`Failed to update theme`);
      });
  };

  const getColorPicker = (varName) => (
    <Fragment key={varName}>
      <Col xs={20}>{varName}</Col>
      <Col xs={4}>
        <ColorPicker
          type="sketch"
          small
          color={vars[varName]}
          position="bottom"
          presetColors={[
            "#F5222D",
            "#FA541C",
            "#FA8C16",
            "#FAAD14",
            "#FADB14",
            "#A0D911",
            "#52C41A",
            "#13C2C2",
            "#1890FF",
            "#2F54EB",
            "#722ED1",
            "#EB2F96"
          ]}
          onChangeComplete={color => handleColorChange(varName, color)}
        />
      </Col>
    </Fragment>
  );

  const resetTheme = () => {
    localStorage.setItem("app-theme", "{}");
    setVars(initialValue);
    window.less.modifyVars(initialValue).catch(() => {
      message.error(`Failed to reset theme`);
    });
  };

  const colorPickerOptions = ["@primary-color", "@secondary-color", "@text-color", "@text-color-secondary", "@heading-color", "@layout-header-background", "@btn-primary-bg"];
  const colorPickers = Object.keys(vars).filter(name => colorPickerOptions.indexOf(name) > -1).map(varName => getColorPicker(varName));

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  };

  const listData = [
    { title: "Ant Design Title 1" },
    { title: "Ant Design Title 2" },
    { title: "Ant Design Title 3" },
    { title: "Ant Design Title 4" }
  ];

  const menu = (
    <Menu>
     <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
    </Menu>
  );
    // State declarations
  const [previousLength, setPreviousLength] = useState(0);
  const [count, setCount] = useState(1);
  const [commentText, setCommentText] = useState('');

  // Handle text area input
  const handleInputTextArea = (event) => {
    const newLength = event.target.value.length;
    const characterCode = event.target.value.substr(-1).charCodeAt(0);
    if (newLength > previousLength) {
      if (characterCode === 10) {
        event.target.value = `${event.target.value}${count}. `;
        setCount((prevState) => prevState + 1);
      } else if (newLength === 1) {
        event.target.value = `${count}. ${event.target.value}`;
        setCount((prevState) => prevState + 1);
      }
    } else if (newLength < previousLength) {
      if (characterCode === 10) {
        setCount((prevState) => prevState - 1);
      } else if (newLength === 0) {
        setCount(1);
      }
    }
    setPreviousLength(newLength);
    setCommentText(event.target.value);
  };

  return (
    <div className="App">
      <Row>
          <Layout>
            
            <Layout>
              <Sider width={10}>
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  
                  
                  
                </Menu>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                  }}
                >
                  <Row>
                    <Col xs={24} sm={6}>
                      
                        </Col>
                        <Col xs={24} sm={{ span: 15, offset: 3 }}>
                          <Form onSubmit={handleSubmit}>
                            <Col xs={50} sm={50}>
                              <FormItem
                                {...formItemLayout}
                                label="Select[multiple]"
                                
                              >
                              </FormItem>  

{/* new form*/}
<Form
          form={mainForm}
          layout="vertical"
          name="wrap"
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          onFinish={onFinish}
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
                  treeData={treeDataClientApp}
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
                  <Option value="UI Development">UI Development</Option>
                  <Option value="Plan Creation">Plan Creation</Option>
                  <Option value="API Integration">API Integration</Option>
                  <Option value="Bug Fixing">Bug Fixing</Option>
                  <Option value="Research">Research</Option>
                  <Option value="Code Optimization">Code Optimization</Option>
                  <Option value="Testing">Testing</Option>
                  <Option value="Documentation">Documentation</Option>
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
                  <Option value="Analytics-DS">Analytics-DS</Option>
                  <Option value="Back-End">Back-End</Option>
                  <Option value="Front-End">Front-End</Option>
                  <Option value="Mobile">Mobile</Option>
                  <Option value="VDM">VDM</Option>
                  <Option value="Oceanix">Oceanix</Option>
                  <Option value="Software Review">Software Review</Option>
                  <Option value="Sales">Sales</Option>
                  <Option value="Client">Client</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={5}>
            <Form.Item
                name="name"
                label={<a style={label_style}>Personnel Name</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Personnel Name',
                  },
                ]}
              >
                <Input name='name' type='text' placeholder='Please type'/>
                {/* <Select
                  style={{ width: '80%' }}
                  status="warning"
                  placeholder="Please select"
                  name="team"
                >
                  <Option value="Analytics-DS">Analytics-DS</Option>
                  <Option value="Back-End">Back-End</Option>
                  <Option value="Front-End">Front-End</Option>
                  <Option value="Mobile">Mobile</Option>
                  <Option value="VDM">VDM</Option>
                  <Option value="Oceanix">Oceanix</Option>
                  <Option value="Software Review">Software Review</Option>
                  <Option value="Sales">Sales</Option>
                  <Option value="Client">Client</Option>
                </Select> */}
              </Form.Item>
            </Col>
            </Row>
            <Row gutter={24}>          
            <Col span={4}>
            <Form.Item
                name="progress"
                label={<a style={label_style}>Progress</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Progress Status',
                  },
                ]}
              >
              {/* <InputNumber
                        value={0}
                        style={{ margin: '0 8px', width: '70px' }}
                        min={0}
                        max={100}
                      ></InputNumber> */}
                   
               <Slider min={0}
                        max={100}  step={10}
                        // marks={{0: '0', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50', 60: '60', 70: '70', 80: '80', 90: '90', 100: '100'}}
                        ></Slider>
              </Form.Item>
            </Col>
            {/* <Col span={1}></Col> */}
            <Col span={5}>
            <Form.Item
                name="status"
                label={<a style={label_style}>Status</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Progress Status',
                  },
                ]}
              >
                <Select
                  style={{ width: '80%' }}
                  status="warning"
                  placeholder="Please select"
                  name="status"
                >
                     <Option value="Not Started" style={{ color: 'red' }}>
                        Not Started
                    </Option>
                    <Option value="In Progress" style={{ color: 'orange' }}>
                        In Progress
                    </Option>
                    <Option value="Reassigned" style={{ color: 'cyan' }}>
                        Reassigned
                    </Option>
                    <Option value="Deploying" style={{ color: 'yellow' }}>
                        Deploying
                    </Option>
                    <Option value="Completed" style={{ color: '#0fd665' }}>
                        Completed
                    </Option>
                    <Option value="Halted" style={{ color: 'magenta' }}>
                        Halted
                    </Option>
                    <Option value="Leave" style={{ color: '#b3f018' }}>
                        Leave
                    </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
              name="start_date"
              label={<a style={label_style}>Start Date</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Start Date',
                  },
                ]}>
                  <DatePicker onChange={onChange} />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
              name="completion_date"
              label={<a style={label_style}>Completed Date</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Completed Date',
                  },
                ]}>
                  <DatePicker onChange={onChange1} />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
              name="days_required"
              label={<a style={label_style}>Days Required</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Date',
                  },
                ]}>
                <Select
                  style={{ width: '80%' }}
                  status="warning"
                  placeholder="Please select"
                  name="days_required"
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="13">13</Option>
                  <Option value="0.25">0.25</Option>
                  <Option value="0.5">0.5</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item
                name="comments"
                label={<a style={label_style}>Task Comments</a>}
                rules={[
                  {
                    required: true,
                    message: 'Please input Meeting Minutes',
                  },
                ]}
                onInput={handleInputTextArea}
              >
                <TextArea
                  name="comments"
                  rows={4}
                  status="warning"
                  style={{ width: '90%' }}
                  onInput={handleInputTextArea}
                  placeholder="Please select"
                  // onChange={(e) => onChangeIssue(e.target.value)}
                  // value={issue  }
                ></TextArea>
              </Form.Item>
            </Col>
 
            <Col span={8}>
              <Form.Item
                label={<a style={label_style}>Personnel Comments</a>}
                name="personal_comments"
                rules={[
                  {
                    // required: true,
                  },
                ]}
                onInput={handleInputTextArea}
              >
                <TextArea
                  rows={4}
                  status="warning"
                  style={{ width: '90%' }}
                  name="personal_comments"
                  onInput={handleInputTextArea}
                  placeholder="Please select"
                ></TextArea>
              </Form.Item>
            </Col>
            <Col span={3} style={{ marginTop: '100px' }}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  // loading={props?.loadingCreateTestingData}
                  style={{ backgroundColor: 'green' }}
                >
                  Submit Data
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

{/* end of new form */}

                            </Col>
                          </Form>
                        </Col>
                  </Row>
                  <Row
                        type="flex"
                        justify="left"
                        className="secondary-color"
                      >
                        
                        <Col xs={24} sm={6}>
                          <Row
                            type="flex"
                            justify="left"
                            className="secondary-color"
                          >
                            <List
                              itemLayout="horizontal"
                              dataSource={listData}
                              renderItem={item => (
                                <List.Item>
                                  <List.Item.Meta
                                    avatar={
                                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={
                                      <a href="https://ant.design">
                                        {item.title}
                                      </a>
                                    }
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                  />
                                </List.Item>
                              )}
                            />
                          </Row>
                        </Col>
                        <Col xs={24} sm={6}>
                          <Row
                            type="flex"
                            justify="left"
                            className="secondary-color component-container"
                          >
                            <Dropdown overlay={menu}>
                              <a className="ant-dropdown-link" href="#">
                                Hover me <DownOutlined />
                              </a>
                            </Dropdown>
                          </Row>
                          <Row
                            type="flex"
                            justify="left"
                            className="secondary-color component-container"
                          >
                            <Pagination defaultCurrent={1} total={50} />
                          </Row>
                          <Row
                            type="flex"
                            justify="left"
                            className="secondary-color component-container"
                          >
                            
                          </Row>
                        </Col>
                        <Col xs={24} sm={6}>
                          <Row
                            type="flex"
                            justify="left"
                            className="secondary-color"
                          >
                            <div>
                              <Badge count={5}>
                                <a href="#" className="head-example" />
                              </Badge>
                              <Badge count={0} showZero>
                                <a href="#" className="head-example" />
                              </Badge>
                              <Badge
                                count={
                                  <ClockCircleOutlined
                                    style={{ color: "#f5222d" }}
                                  />
                                }
                              >
                                <a href="#" className="head-example" />
                              </Badge>
                            </div>
                          </Row>
                        </Col>
                      </Row>
                </Content>
              </Layout>
            </Layout>
              </Layout>
        </Row>
    </div>
  );
};

export default App;


