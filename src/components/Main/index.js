import React from 'react';
import { List } from 'antd';
import { MainWrapper } from './style';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      pageList: [
        {
          title: '测试标题1',
          description: '这是文章简述这是文章简述这是文章简述这是文章简述这是文章简述这是文章简述这是文是文章简述这是文章简述这是文章简述',
          titleHref: `javascript:;`
        },
        {
          title: '测试标题2',
          description: '这是文章简述',
          titleHref: `javascript:;`
        }
      ]
    }
  }

  handleClick = () => {
    console.log("跳转详情")
  }

  render() {
    const { pageList } = this.state;

    return (
      <React.Fragment>
        <MainWrapper>
          <List
            onClick={this.handleClick}
            size="default"
            itemLayout="vertical"
            position="bottom"
            style={{ cursor: 'pointer' }}
            pagination={{
              total: 2,
              onChange: (page) => {
                console.log(page);
              },
              showQuickJumper: true,
              pageSize: 5,
            }}
            dataSource={pageList}
            renderItem={item => (
              <List.Item
                extra={<img width={240} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <List.Item.Meta
                  title={<span>{item.title}</span>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </MainWrapper>
      </React.Fragment >
    )
  }
}

export default Main;