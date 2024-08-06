import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: fit-content;
  outline: none;
  border: none;
  padding: 2px;
  /* background: #1f27f5; */
  background: ${({disabled})=>disabled? 'grey': '#1f27f5'};
  border-radius: 6px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
`


