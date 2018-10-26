import styled from 'styled-components';

export const Input = styled.input`
    border: none;
    padding: 5px 0;
    width: 100%
    font-size: ${(props)=>props.fontSize ? props.fontSize : "14px"};
    color: ${(props)=>props.color ? props.color : "#969696"};
    &: focus {
        outline: none !important;
        border-bottom: 1px solid #d90b3e;
    }
    &::placeholder {
        color: #969696;
    }
    ${props => props.border && `
         border-bottom: 1px dotted #e7e8e7;
    `}

`
export const TextArea = styled.textarea`
    border: none;
    padding: 5px 0;
    width: 100%;
    height: 20px;
    font-size: 14px;
    color: #969696;
    &: focus {
        outline: none !important;
        border-bottom: 1px solid #d90b3e;
    }
    &::placeholder {
        color: #969696;
    }
    ${props => props.border && `
         border-bottom: 1px dotted #e7e8e7;
    `}
    resize: none;

`

export const PageSubTitle = styled.div`
    display: inline-block;
    font-family: NanumBarunGothic;
    font-size: 16px;
    text-align: left;
    color: ${(props)=>props.color ? props.color : "#969696"};
    ${props => props.bold && `
        font-weight: bold;
        color: #565656;
  `}
`;
