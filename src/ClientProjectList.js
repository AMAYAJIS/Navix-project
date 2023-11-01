const ClientProjectList = [
  {
    title: 'MSC',
    value: 'MSC',
    children: [
      {
        title: 'MSC-Analytics',
        value: 'MSC-Analytics',
      },
      {
        title: 'MSC-Mobile',
        value: 'MSC-Mobile',
      },
      {
        title: 'MSC-VDM',
        value: 'MSC-VDM',
      },
      {
        title: 'MSC-CI',
        value: 'MSC-CI',
      },
      {
        title: 'MSC-SI',
        value: 'MSC-SI',
      },
    ],
  },
  {
    title: 'MTM',
    value: 'MTM',
    children: [
      {
        title: 'MTM-Analytics',
        value: 'MTM-Analytics',
      },
      {
        title: 'MTM-Mobile',
        value: 'MTM-Mobile',
      },
    ],
  },
  {
    title: 'Milaha',
    value: 'Milaha',
    children: [
      {
        title: 'Milaha-Analytics',
        value: 'Milaha-Analytics',
      },
      {
        title: 'Milaha-Mobile',
        value: 'Milaha-Mobile',
      },
    ],
  },
  {
    title: 'Aramco',
    value:'Aramco',
    children: [
    {
      title: 'Aramco-Analytics',
      value: 'Aramco-Analytics',
    },
  ],
},
{
  title: 'Goltens',
  value:'Goltens',
  children: [
    {
      title: 'Goltens-Analytics',
      value: 'Goltens-Analytics',
    },
  ],
},
  {
    title: 'Nippon',
    value: 'Nippon',
    children: [
      {
        title: 'Nippon-Analytics',
        value: 'Nippon-Analytics',
      },
    ],
  },
  {
    title: 'Blue Race',
    value: 'Blue Race',
    children: [
      {
        title: 'Blue Race-Analytics',
        value: 'Blue Race-Analytics',
      },
    ],
  },
  {
    title: 'Seven Islands',
    value: 'Seven Islands',
    children: [
      {
        title: 'Seven Islands-Analytics',
        value: 'Seven Islands-Analytics',
      },
    ],
  },
  {
    title: 'Oceanix Internal',
    value: 'Oceanix Internal',
    children: [
      {
        title: 'Oceanix Internal-Analytics',
        value: 'Oceanix Internal-Analytics',
      },
    ],
  },
  {
    title: 'Technology Ventures',
    value: 'Technology Ventures',
    children: [
      {
        title: 'Technology Ventures-Analytics',
        value: 'Technology Ventures-Analytics',
      },
    ],
  },
  {
    title: 'Vedam',
    value: 'Vedam',
    children: [
      {
        title: 'Vedam-Analytics',
        value: 'Vedam-Analytics',
      },
    ],
  },
  {
    title: 'Vista Marine',
    value: 'Vista Marine',
    children: [
      {
        title: 'Vista Marine-Analytics',
        value: 'Vista Marine-Analytics',
      },
    ],
  },
  {
    title: 'Ultra Dedication',
    value: 'Ultra Dedication',
    children: [
      {
        title: 'Ultra Dedication-Analytics',
        value: 'Ultra Dedication-Analytics',
      },
    ],
  },
  {
    title: 'Asiatic Bay',
    value: 'Asiatic Bay',
    children: [
      {
        title: 'Asiatic Bay-Analytics',
        value: 'Asiatic Bay-Analytics',
      },
    ],
  },
  {
    title: 'General',
    value: 'General',
    children: [
      {
        title: 'General-General',
        value: 'General-General',
      },
    ],
  },
  // {
  //   title: 'Leave',
  //   value: 'Leave',
  //   children: [
  //     {
  //       title: 'Leave-Half Day',
  //       value: 'Leave-Half Day',
  //     },
  //     {
  //       title: 'Leave-Full Day',
  //       value: 'Leave-Full Day',
  //     },
  //   ],
  // },
  // {
  //   title: 'Day Off',
  //   value: 'Day Off',
  // },
];

export default ClientProjectList;

{/*
       <Card>
         <Form layout="vertical" onFinish={onFinish} className="voyage-form">
         <Col>
         <Col span={4}>
          <Radio.Group defaultValue="vesselName"
           onChange={e => setSelectedInput(e.target.value)}>
            <Radio value="vesselName">Vessel Name</Radio>
            <Radio value="IMO">IMO</Radio>
           </Radio.Group>
         </Col>
         <Col span={4}>
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
        <Col style={{ marginLeft: '250px', marginTop:'-78.5px'}}>
        <Col span={4}>
                <span>Voyage Condition</span>
            </Col>
                        <Col span={4}>
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
                        <Col style={{ marginLeft: '450px', marginTop:'-56.5px'}}>
                        <Col span={6}>
                            <Dropdown overlay={<FilterMenu />} trigger={['click']}>
                                <Button>Filter <span>▼</span></Button>
                            </Dropdown>
                        </Col>
                        </Col>
                        <Col>
                        <Col span={6}  style={{marginLeft: '1050px',marginTop:'-33.75px' }}>
                            <Item>
                                <Button type="primary" htmlType="submit">
                                    Prediction
                                </Button>
                            </Item>
                        </Col>
                        </Col>
                </Form>
            </Card>
             Radio Group for selecting input type */}