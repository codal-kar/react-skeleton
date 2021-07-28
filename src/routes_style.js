import styled from "styled-components";
import { Layout } from "antd";
import { theme, fonts } from "./constants/constant";
const { Sider, Content } = Layout;

export const TriggerHeader = styled(Layout.Header)`
    background:#fff; padding:0;
   .trigger-icon {
                display:none; 
                font-size: ${fonts.font_10};
                position: fixed; 
                z-index: 222; 
                padding:0 15px 0 25px; 
                top:23px;
                -webkit-transition: all .2s ease-in-out;
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
                :hover { margin-left:-3px; }
                  @media (min-width:768px) {
                      @keyframes bounceInRight {
                          0%{ opacity: 0; transform:  translate(6px,0px); }
                          50%{ opacity: 1;}
                          100%{ opacity: 0; transform:  translate(-3px,0px); }
                      } 
                      @-webkit-keyframes bounceInRight {
                         0%{ opacity: 0; transform:  translate(6px,0px); }
                          50%{ opacity: 1;}
                          100%{ opacity: 0; transform:  translate(-3px,0px); }
                      }
                   }
                                
    }
`;

export const StyledHeader = styled(Layout.Header)`
  background-color: ${theme.white};


  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2) !important;
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2) !important;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2) !important;

  color: ${theme.black};
  
  padding: 0px 25px;

  position: fixed;
  z-index: 99;
  top:0;
  width:100%;

  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-left: 0px;
  }
`;
export const StyledLogo = styled.div`
  height: 64px;
  background-color: ${theme.white};
  &.collapsed-logo { max-width:100%; padding:0;
    img { max-width:100%; height:100%; }
  }
  -webkit-box-shadow: 4px 0px 21px 0px rgba(0, 0, 0, 0.09) !important;
  -moz-box-shadow: 4px 0px 21px 0px rgba(0, 0, 0, 0.09) !important;
  box-shadow: 4px 0px 21px 0px rgba(0, 0, 0, 0.09) !important;

  @media only screen and (max-width: 992px) {
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
  }
  text-align: center;
  padding-top: 8px;
`;

export const RightLayout = styled(Layout)`
     padding-left:250px;
     -webkit-transition: all .4s ease-in-out;
     -moz-transition: all .4s ease-in-out;
     -ms-transition: all .4s ease-in-out;
     -o-transition: all .4s ease-in-out;
     transition: all .4s ease-in-out;
  .back-to-top { z-index:1; }
  .back-top {
    border-radius:5px;
    @media only screen and (max-width: 767px) {
      -moz-transform: scale(.8);
      -webkit-transform: scale(.8);
      -o-transform: scale(.8);
      -ms-transform: scale(.8);
      transform: scale(.8);
      position: relative;
      left: 20px;
      top: 25px;
    }
    color:#fff;
    display: inline-block;
    background-color: ${theme.blue};
    .round {
      position: absolute;
      background-color: ${theme.blue};
      width: 40px;
      height: 40px;
      border-radius: 5px;
      right: 0;
      bottom: 0;
      -moz-transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }

    #cta{
        width:100%; cursor: pointer; position: absolute;
    }
    #cta .arrow{left:30%; }
    .arrow {position: absolute; bottom: 0;  margin-left:0px; width: 12px; height: 12px; background-size: contain; top:15px;}
    .segunda{margin-left: 8px;}
    .next {
      background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==);
    }

 
  }
`;

export const CustomSider = styled(Sider)`

    background-color: ${theme.purple} !important;
    min-height: 100vh;
     position: fixed;
    z-index: 100;

    & .default-logo img{
      height:50px;
    }
    & .ant-layout-sider-zero-width-trigger {
      background: white !important;
      color: ${theme.black} !important;
      top: 13px;
      z-index: 100;
    }

    & .ant-layout-sider-zero-width-trigger:hover{
      background; white !important;
      color: ${theme.black};
      z-index: 100;
    }

    @media only screen and (max-width: 992px) {
      display: block;
      position: fixed;
      z-index: 100;

    .side-logos { position:relative;  margin-bottom: 65px; display: none;
          > div { position:absolute; left:0; top:0; width:100%;
          -moz-transition: all .2s ease-in-out;
          -ms-transition: all .2s ease-in-out;
          -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;}
          @media only screen and (min-width:1100px) {
            .default-logo img { left:-11px; position:relative; }
          }
    }
   
`;
export const StyledContent = styled(Content)`
  color: ${theme.black};
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  &.remove-top-space { margin-top:0;padding-bottom: 60px; }
  &.remove-top-space-404 { margin-top:0; }

  @media only screen and (max-width: 992px) {
    margin-left: 0px;
  }


`;
export const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  z-index: 100;
`;
