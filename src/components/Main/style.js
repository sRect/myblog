import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 960px;
  height: 100%;
  margin: 10px auto;
  .ant-carousel {
    .bannerWrap {
      position: relative;
      h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    }
    .slick-slide {
      text-align: center;
      height: 260px;
      line-height: 260px;
      background: #364d79;
      overflow: hidden;
      h3 {
        font-size: 30px;
        color: #fff;
      }
      img {
        width: 100%;
        height: 260px;
        background-size: cover;

      }
    }
  }
`