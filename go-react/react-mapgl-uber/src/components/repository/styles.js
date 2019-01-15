import styled from 'styled-components'

export const Container = styled.div`
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
  }
`
