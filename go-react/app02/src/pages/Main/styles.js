import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    border: 0;
    border-radius: 3px;
    font-size: #444;

    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }
  button {
    height: 55px;
    width: 80px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    border: 0;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #42bd83;
    }
  }
`
