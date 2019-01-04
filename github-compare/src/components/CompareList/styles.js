import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
`

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    .optionsRepository {
      display: flex;
      position: absolute;
      top: 10px;
      right: 10px;

      i {
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }

    img {
      width: 60px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(odd) {
        background: #f5f5f5;
      }
    }
  }
`
