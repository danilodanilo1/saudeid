import styled from 'styled-components';

export const Content = styled.div`
  .paginate-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  .previous {
    margin: 0 10px;
    width: 40px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 8px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .next {
    margin: 0 10px;
    width: 40px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 8px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .paginate-li {
    margin: 0 5px;
    text-decoration: none;
    cursor: pointer;
    &.paginate-active {
      color: red;
      width: 19px;
      height: 19px;
      text-align: center;
      background-color: #000;
      color: #fff;
      border-radius: 50%;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 45px 0;
`;

export const WrapperLineTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LineTitle = styled.div`
  display: flex;
  width: 90%;
  cursor: pointer;
  border: 1px solid #e3e3e3;
  padding: 5px;
  flex-direction: column;
`;
export const Drop = styled.div`
  padding: 10px 0;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  #image {
    transform: rotate(${({ turnArrow }) => (turnArrow ? '180deg' : '0')});
    transition: transform 0.5s ease;
  }
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > button {
    margin: 0 10px;
    width: 140px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 8px;
    height: 20px;
  }
`;
