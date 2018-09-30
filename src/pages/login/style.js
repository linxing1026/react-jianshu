import styled from 'styled-components';

export const LoginWrapper = styled.div`
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   top: 56px;
   background: #eee;
   z-index:0;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 220px;
    padding-top: 30px;
    margin: 80px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
    width: 200px;
    height: 30px;
    display: block;
    margin: 10px auto;
    line-height: 30px;
    padding: 0 10px;
    color: #777;
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    margin: 30px auto;
    text-align: center;
    border-radius: 15px;
    background: #3194D0;
    color: #fff;
`;