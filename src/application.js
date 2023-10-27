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

const application = () =>{
	 // State declarations
  // const [previousLength, setPreviousLength] = useState(0);
  // const [count, setCount] = useState(1);
  // const [commentText, setCommentText] = useState('');

  // Handle text area input
  // const handleInputTextArea = (event) => {
  //   const newLength = event.target.value.length;
  //   const characterCode = event.target.value.substr(-1).charCodeAt(0);
  //   if (newLength > previousLength) {
  //     if (characterCode === 10) {
  //       event.target.value = `${event.target.value}${count}. `;
  //       setCount((prevState) => prevState + 1);
  //     } else if (newLength === 1) {
  //       event.target.value = `${count}. ${event.target.value}`;
  //       setCount((prevState) => prevState + 1);
  //     }
  //   } else if (newLength < previousLength) {
  //     if (characterCode === 10) {
  //       setCount((prevState) => prevState - 1);
  //     } else if (newLength === 0) {
  //       setCount(1);
  //     }
  //   }
  //   setPreviousLength(newLength);
  //   setCommentText(event.target.value);
  // };
	const [mainForm] = Form.useForm();
	return(<div>
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
                
              >
                <TextArea
                  name="comments"
                  rows={4}
                  status="warning"
                  style={{ width: '90%' }}
         
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
            
              >
                <TextArea
                  rows={4}
                  status="warning"
                  style={{ width: '90%' }}
                  name="personal_comments"
                  
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
        </div>);

}
export default application;