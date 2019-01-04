import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;

  input {
    flex: 1;
    margin-right: 10px;
    padding: 15px;
    border-radius: 3px;
    font-size: 16px;

    border: ${props => (props.withError ? '2px solid #F00' : '0')};
  }
  button {
    min-width: 80px;
    padding: 15px;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    background: #63f5b0;
    color: #fff;

    &:hover {
      background: #42bd83;
    }
  }
`
