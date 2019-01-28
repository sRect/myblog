import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { HeaderWraper } from './style';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderWraper>
          <Row>
            <Col span={12}> <Button type="primary">Button</Button></Col>
            <Col span={12}>col-12</Col>
          </Row>
        </HeaderWraper>
      </React.Fragment>
    )
  }
}

export default Header;