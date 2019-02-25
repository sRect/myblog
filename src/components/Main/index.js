import React from 'react';
import { connect } from 'react-redux';
import { List, Carousel } from 'antd';
import { MainWrapper } from './style';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      pageList: [

      ],
      carouselSetting: {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true
      }
    }
  }

  handleClick = () => {
    console.log("跳转详情")
  }

  render() {
    const { carouselSetting } = this.state;
    const { articleList } = this.props;
    return (
      <React.Fragment>
        <MainWrapper>
          <Carousel {...carouselSetting}>
            <div className="bannerWrap"><img src="//bpic.588ku.com//back_origin_min_pic/18/06/10/80de9910228011f002967b07ee4f3692.jpg" alt="img" /><h3>祝大家新年快乐</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
          </Carousel>
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
            dataSource={articleList.toJS()}
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

const mapStateToProps = state => {
  return {
    articleList: state.getIn(['mainReducer', 'articleList'])
  }
}

export default connect(mapStateToProps, null)(Main);