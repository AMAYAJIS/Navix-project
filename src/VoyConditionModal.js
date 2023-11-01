import React, { useState, useEffect } from 'react';
import { Modal,InputNumber,Row,Col,Descriptions } from 'antd';

const VoyConditionModal = ({ voyCondition, visible, onClose }) => {

    return (
        <Modal 
            title="Voyage Details" 
            visible={visible} 
            onOk={onClose} 
            onCancel={onClose}
            width={1000}
        >
    <Row gutter={16} align="middle">
      <Col span={8}>
        No of Days:
      </Col>
      <Col span={4}>
        <InputNumber placeholder="days" min={1} />
      </Col>
    </Row>
     <Descriptions title="Prediction Tab" bordered style={{ marginTop: '16px' }}>
        <Descriptions.Item label="RPM(rpm)">4666</Descriptions.Item>
        <Descriptions.Item label="Fuel consumption(Tonnes)">234</Descriptions.Item>
        <Descriptions.Item label="Total Distance(Nautical miles)">5656</Descriptions.Item>
        <Descriptions.Item label="Total CO2 Emissions(Tonnes)">5655</Descriptions.Item>
        <Descriptions.Item label="Speed Through water [STW](knots)">656</Descriptions.Item>
        <Descriptions.Item label="Speed Over Ground [SOG] (knots)">56565</Descriptions.Item>
        <Descriptions.Item label="SFOC g/kWh">665</Descriptions.Item>
      </Descriptions>
        </Modal>
    );
}

export default VoyConditionModal;
