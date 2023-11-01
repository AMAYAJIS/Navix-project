import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Row, Col, Dropdown, Menu, Radio, Table, Card, Space } from 'antd';
import './Voyage.css';
import VoyConditionModal from './VoyConditionModal'; // Adjust the path as necessary


const { Item } = Form;
const { Option } = Select;

const Voyage = () => {
	const [selectedInput, setSelectedInput] = useState('vesselName');
    const onFinish = values => {
        console.log('Form Data:', values);
        // Process your form data here
    };
    //voycondition.js
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedVoyCondition, setSelectedVoyCondition] = useState(null);

    // const tableData = [];
    const tableData = Array(10).fill(null).map((_, index) => ({
    "Sl_No": index + 1,
    "REPORT_DATE_TIME": `2023-10-3${index}`,  // Vary the date for variety
    "IMO_No": `IMO00${index + 1}`,
    "VoyCondition": ["Laden", "Ballast", "Both"][index % 3],
    "CARGO_TOTAL": 2000 + (index * 10),
    "MILES_BY_GPS": 50 + index,
    "STW": 10 + index,
    "SOG": 12 + index,
    "SFOC": 30 + index,
    "RPM": 1000 + (index * 10),
    "SLIP": 2 + (index * 0.1),
    "DRAFT_AFT": 5 + (index * 0.1),
    "DRAFT_FWD": 4.5 + (index * 0.1),
    "DRAFT": 4.75 + (index * 0.1),
    "DISPLACEMENT": 10000 + (index * 100),
    "COURSE_AT_SEA": 90 + index,
    "WindDirection": ["East", "West", "North", "South"][index % 4],
    "WindSpeed_kn": 12 + index,
    "SEA_STATE": ["Calm", "Rough", "Very Rough", "Stormy"][index % 4],
    "WindForce": 5 + (index % 3),
    "SW_TEMP": 25 + (index % 3),
    "TOTAL_STEAMING_TIME": 24 - index,
    "POWER_kW": 5000 + (index * 50),
    "Total_FC": 150 + (index * 5),
    "Fuel_ME": 100 + (index * 2),
    "Fuel_AE": 25 + index,
    "Fuel_Boiler": 25 + index,
    "Total_Calculated_HS": 120 + (index * 5),
    "Total_Calculated_LS": 30 + index,
    "Total_Calculated_MDO": 25 + index,
    "Total_Calculated_MGO_HS": 20 + index,
    "Total_Calculated_MGO_LS": 10 + index,
    "Total_CO2_Calculated": 500 + (index * 10),
    "Voyage Details":"view details"
}));
    //tabledata

    const columns = [
        'Sl.No','REPORT_DATE_TIME', 'IMO.No', 'VoyCondition', 'CARGO_TOTAL', 'MILES_BY_GPS', 'STW', 'SOG', 'SFOC', 'RPM', 'SLIP', 'DRAFT_AFT', 'DRAFT_FWD', 'DRAFT', 'DISPLACEMENT', 'COURSE_AT_SEA', 'WindDirection', 'WindSpeed_kn', 'SEA_STATE', 'WindForce', 'SW_TEMP', 'TOTAL_STEAMING_TIME', 'POWER_kW', 'Total_FC', 'Fuel_ME', 'Fuel_AE', 'Fuel_Boiler', 'Total_Calculated_HS', 'Total_Calculated_LS', 'Total_Calculated_MDO', 'Total_Calculated_MGO_HS', 'Total_Calculated_MGO_LS', 'Total_CO2_Calculated', 'Voyage Details'
    ].map((header, index, array) => {
    let fixedValue;
    if (index < 2) fixedValue = 'left'; // For the first two columns
    else if (index >= array.length - 2) fixedValue = 'right'; // For the last two columns
    if (header === 'Voyage Details') {
        return {
            title: 'Voyage Details',
            dataIndex: 'Voyage Details',
            key: 'Voyage Details',
            fixed: fixedValue,
            width: 150,  // Set an explicit width for fixed columns
            render: (text) => (
                <a onClick={() => {
                    setSelectedVoyCondition(text);
                    setIsModalVisible(true);
                }}>
                    {text}
                </a>
            )
        };
    }

    return {
        title: header,
        dataIndex: header.replace('.', '_'),
        key: header,
        fixed: fixedValue,
        width: fixedValue ? 150 : undefined
    };
});

    const FilterMenu = () => (
        <Menu>
            {['RPM', 'Draft', 'Sea State', 'SFOC'].map((item, index) => (
                <Menu.Item key={index + 1}>
                    <Checkbox value={item.toLowerCase().replace(" ", "_")}>{item}</Checkbox>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
       <div>
       


      <Card>
         <Form layout="vertical" onFinish={onFinish} className="voyage-form">
         <Row>
         <Row gutter={16} justify="start">
         <Col>
         <Col span={40}>
          <Radio.Group defaultValue="vesselName"
           onChange={e => setSelectedInput(e.target.value)}>
            <Radio value="vesselName">Vessel Name</Radio>
            <Radio value="IMO">IMO</Radio>
           </Radio.Group>
         </Col>
         <Col span={40}>
          {selectedInput === 'vesselName' && (
          <Form.Item name="Vessel Name" rules={[{ required: true, message: 'Please input the vessel name!' }]}>
            <Input placeholder="Vessel Name" />
          </Form.Item>
        )}

        {selectedInput === 'IMO' && (
            <Form.Item
                name="IMO"
                rules={[{ required: true, message: 'Please input the IMO number!' }]}
            >
                <Input placeholder="IMO" />
            </Form.Item>
        )}
        </Col>
        </Col>


        {/*next column*/}
        <Col>
            <Col span={40}>
                <span>Voyage Condition</span>
            </Col>
                        <Col span={40}>
                            <Item
                                name="condition"
                                rules={[{ required: true, message: 'Please select a condition!' }]
                            }>
                                <Select placeholder="Condition">
                                    <Option value="Laden">Laden</Option>
                                    <Option value="Ballast">Ballast</Option>
                                    <Option value="Both">Both</Option>
                                </Select>
                            </Item>
                        </Col>
        </Col>           
        {/*next column*/}

                        <Col>
                        <Col span={40} style={{ marginTop: '20px' }} >
                            <Dropdown overlay={<FilterMenu />} trigger={['click']}>
                                <Button>Filter <span>▼</span></Button>
                            </Dropdown>
                        </Col>
                        </Col>
                         </Row>
           {/*next column*/}
           <Row style={{marginTop: '20px', marginLeft:'630px'}}>               
                        <Col>
                        {/*<Col style={{ marginTop: '20px',display:'flex',}}>*/}
                        <Col>
                            <Item>
                                <Button type="primary" htmlType="submit">
                                    Prediction
                                </Button>
                            </Item>
                        </Col>
                        </Col>
                        </Row>
                        </Row>
                       
                </Form>
            </Card>








<Card>
    <Form layout="vertical" onFinish={onFinish} className="voyage-form">
        <Row justify="space-between">
            <Col>
                <Row gutter={16} align="middle">
                    <Space direction='vertical'>  
                        <Col>
                            <Radio.Group defaultValue="vesselName"
                                onChange={e => setSelectedInput(e.target.value)}>
                            <Radio value="vesselName">Vessel Name</Radio>
                                <Radio value="IMO">IMO</Radio>
                            </Radio.Group>
                        </Col>
                        <Col>
                            {selectedInput === 'vesselName' && (
                                <Form.Item name="Vessel Name" rules={[{ required: true, message: 'Please input the vessel name!' }]}>
                                    <Input placeholder="Vessel Name" />
                                </Form.Item>
                            )}
                
                            {selectedInput === 'IMO' && (
                                <Form.Item
                                    name="IMO"
                                    rules={[{ required: true, message: 'Please input the IMO number!' }]}
                                >    
                                    <Input placeholder="IMO" />
                                </Form.Item>
                            )}
                        </Col>
                    </Space>
                
                    <Col>
                        <Space direction='vertical' >
                            <span>Voyage Condition</span>
                            <Item
                                name="condition"
                                rules={[{ required: true, message: 'Please select a condition!' }]
                            }>
                                <Select placeholder="Condition">
                                    <Option value="Laden">Laden</Option>
                                    <Option value="Ballast">Ballast</Option>
                                    <Option value="Both">Both</Option>
                                </Select>
                            </Item>
                        </Space>
                    </Col>


                    <Col>
                    <Space size={1}>
                        <Dropdown overlay={<FilterMenu />} trigger={['click']}>
                            <Button>Filter <span>▼</span></Button>
                        </Dropdown>
                         </Space>
                    </Col>

                </Row>
            </Col>

            <Col>
                 <Item>
                    <Button type="primary" htmlType="submit">
                     Prediction
                    </Button>
                 </Item>
            </Col>  
        </Row>
    </Form>
</Card>

















        <VoyConditionModal 
              voyCondition={selectedVoyCondition} 
              visible={isModalVisible} 
              onClose={() => setIsModalVisible(false)}
        />
          <div style={{ overflowX: 'auto' }}>
            <Table dataSource={tableData} columns={columns}
             scroll={{x:true}}/>
          </div>
         </div>
    );
}

export default Voyage;


