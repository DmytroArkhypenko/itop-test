import styled from "styled-components"

export const ButtonsContainer = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  background: black;
  color: white;
  border-radius: 5px;
  margin-top: 30px;
  margin-left: 5px;
  padding: 12px 20px;
  font-size: 16px;
  width: 150px;
  transition: background 0.3s;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    background: white;
    color: black;
  }
`
