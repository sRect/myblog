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