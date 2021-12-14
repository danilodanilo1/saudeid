import styled from "styled-components";

export const Wrapper = styled.div`
  padding:15px;
`

export const WrapperLineTitle = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

export const LineTitle = styled.div`
  display:flex;
  width:90%;
  cursor: pointer;
  border: 1px solid #e3e3e3;
  padding: 10px;
  flex-direction:column;
  >#wrapper{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    #image{
      transform: rotate(${({turnArrow})=>turnArrow ? '180deg' : '0'});
      transition: transform .5s ease
    }
  }
`
export const Content = styled.div`
    padding: 10px 0;
`

export const Title = styled.div`
  font-weight: bold;
`

export const Buttons = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  >button{
    margin: 0 10px;
    width: 140px;
    background-color:#000;
    color:#fff;
    font-weight:bold;
    outline:none;
    border:none;
    border-radius:8px;
    height:20px;
  }
`
