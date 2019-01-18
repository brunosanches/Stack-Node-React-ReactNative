import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 320px;
  height: calc(100% - 30px);
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  left: 15px;
  top: 15px;
  z-index: 1;

  & img {
    margin-top: 16px;
    cursor: pointer;
  }
`

export const AddMarker = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  background: #fff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 30px;

  & input {
    width: 100%;
    padding: 15px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #e5e5e5;

    &::placeholder {
      color: #9a9a9a;
    }
  }
`

export const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  & button {
    color: #fff;
    font-weight: bold;
    padding: 15px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    flex: 1;

    &:hover {
      opacity: 0.8;
    }

    &.cancel {
      background: #ccc;
      margin-right: 7px;
    }

    &.save {
      background: #85c47c;
      margin-left: 7px;
    }
  }
`
