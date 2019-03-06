import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Icon, Menu, message } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import store from '../../store';
import { handleInputChange, handleInputFocus, handleInputBlur, getArticleList } from '../../store/actions';
import { HeaderWraper, InHeaderWraper, SearchWraper, NavSearch, SearchBtn } from './style';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'home',
      inputVal: '',
      foucused: false
    }
  }

  // 导航点击
  handleClick = (e) => {
    let { key } = e;
    // 如果不使用withRouter此组件的this.props为空，没法执行props中的history、location、match等方法。
    let { history } = this.props;

    this.setState(() => {
      const current = key;
      return {
        current
      }
    })
    switch (key) {
      case "home":
        history.push({
          pathname: '/',
          query: {
            name: "rose",
            age: 18
          }
        })
        break;
      case "experienceRecord":
        history.push({
          pathname: '/experienceRecord',
          query: {
            name: "jack",
            age: 18
          }
        })
        break;
      default:
        break;
    }
  }

  handleSearch = () => {
    this.navSearch.focus();
    if (this.props.inputVal) {
      this.props.handleGetArticleList(this.props.inputVal);
      // message.warning('测试阶段，暂停使用！');
    } else {
      message.warning('请输入内容进行搜索！');
      return;
    }
  }

  // handleInputChange = (e) => {
  //   let inputVal = e.target.value;

  //   this.setState(() => ({
  //     inputVal
  //   }))
  // }

  // handleInputFocus = () => {
  //   this.setState(() => ({
  //     foucused: true
  //   }))
  // }

  // handleInputBlur = () => {
  //   this.setState(() => ({
  //     foucused: false
  //   }))
  // }

  render() {
    const { inputVal, foucused, handleInputChange, handleInputFocus, handleInputBlur } = this.props;

    return (
      <React.Fragment>
        <HeaderWraper>
          <InHeaderWraper>
            <Row type="flex" align="middle" justify="space-between">
              <Col span={3}>
                <Icon type="home" style={{ fontSize: '34px', cursor: 'pointer' }} title='首页' />
              </Col>
              <Col span={10} offset={7} >
                <Menu
                  mode="horizontal"
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                >
                  <Menu.Item key="home">
                    <Icon type="home" style={{ fontSize: '16px' }} />我的文章
                  </Menu.Item>
                  <SubMenu title={<span className="submenu-title-wrapper"><Icon type="star" style={{ fontSize: '16px' }} />我的收藏</span>}>
                    <MenuItemGroup title="Vue">
                      <Menu.Item key="setting:1" disabled>Option 1</Menu.Item>
                      <Menu.Item key="setting:2" disabled>Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="React">
                      <Menu.Item key="setting:3" disabled>Option 3</Menu.Item>
                      <Menu.Item key="setting:4" disabled>Option 4</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Flutter">
                      <Menu.Item key="setting:5" disabled>Option 5</Menu.Item>
                      <Menu.Item key="setting:6" disabled>Option 6</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                  <Menu.Item key="experienceRecord">
                    <Icon type="experienceRecord" style={{ fontSize: '16px' }} />踩坑记录
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={4}>
                <SearchWraper
                  className={foucused ? 'focused searchWraper' : 'searchWraper'}
                >
                  <CSSTransition in={foucused} timeout={800} classNames='slide'>
                    <NavSearch
                      ref={(navSearch) => { this.navSearch = navSearch }}
                      value={inputVal}
                      onChange={(e) => { handleInputChange(e.target.value) }}
                      onFocus={handleInputFocus}
                      onBlur={(e) => { handleInputBlur(e.target.value) }}
                    >
                    </NavSearch>
                  </CSSTransition>
                  <CSSTransition
                    in={foucused}
                    timeout={800}
                    classNames='slide'
                  >
                    <SearchBtn onClick={this.handleSearch}>
                      <Icon type="search" />
                    </SearchBtn>
                  </CSSTransition>
                </SearchWraper>
              </Col>
            </Row>
          </InHeaderWraper>
        </HeaderWraper>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => {
  return {
    inputVal: state.get('headerReducer').get('inputVal'),
    foucused: state.getIn(['headerReducer', 'foucused'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: (val) => {
      store.dispatch(handleInputChange(val));
    },
    handleInputFocus() {
      store.dispatch(handleInputFocus());
    },
    handleInputBlur(val) {
      if (!val) {
        store.dispatch(handleInputBlur());
      }
    },
    handleGetArticleList(val) {
      store.dispatch(getArticleList(val));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));