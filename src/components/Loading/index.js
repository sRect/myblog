import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  let style = {
    width: '100px',
    height: '100px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '10'
  }
  return (
    <div style={{ ...style }}>
      <Spin size="large" tip="加载中..." />
    </div>
  )
}

export default Loading;