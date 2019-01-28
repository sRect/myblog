import styled from 'styled-components';

export const HeaderWraper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
`
export const InHeaderWraper = styled.div`
  width: 1440px;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .ant-row-flex {
    height: 100%;
    ul.ant-menu {
      border-bottom: 0;
      li {
        font-size: 16px;
      }
      > [class^="ant-menu-"],[class*=" ant-menu-"] {
        margin-left: 5px;
      }
    }
  }
`
export const SearchWraper = styled.div`
  width: 240px;
  height: 38px;
  position: relative;
  input {
    &.slide-enter {
      transition: all .2s ease-out;
    }
    &.slider-enter-active {
      width: 240px;
    }
    &.slide-exit {
      transition: all .2s ease-out;
    }
    &.slider-exit-active {
      width: 180px;
    }
  }
  button {
    &.slide-enter {
      transition: all .2s ease-out;
    }
    &.slider-enter-active {
      right: 8px;
    }
    &.slide-exit {
      transition: all .2s ease-out;
    }
    &.slider-exit-active {
      right: 60px;
    }
  }
  &.focused {
    input {
      width: 240px;
    }
    button {
      right: 8px;
      background: #777;
      > i {
        color: #fff;
      }
    }
  }
`

export const NavSearch = styled.input.attrs({
  type: 'text',
  placeholder: '请输入...'
})`
  width: 180px;
  height: 38px;
  border-radius: 38px;
  border: 0;
  outline: none;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  background: #eee;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -19px;
  &::placeholder {
    color: #999;
  }
`
export const SearchBtn = styled.button.attrs({
  title: '点击搜索'
})`
  width: 30px;
  height: 30px;
  background: none;
  border: 0;
  border-radius: 50%;
  outline: none;
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translateY(-50%);
  cursor: pointer;
`