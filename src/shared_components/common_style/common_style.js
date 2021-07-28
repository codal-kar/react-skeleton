import "antd/dist/antd.css";
import styled from "styled-components";
import { Card, Modal } from "antd";

export const MyGeneralCard = styled(Card)`  
    padding:15px;
    color:red;
`;
export const StaticModal = styled(Modal)`
   
    &.ant-modal-mask {z-index: 9999 !important;}
    .ant-modal-content {z-index: 9999 !important;}
    &&.ant-modal-content {z-index: 9999 !important;}
    &&.ant-modal-mask {z-index: 9999 !important;}
`
    ;



