// Style your elements here
import styled from 'styled-components'

export const DirectionBtn = styled.button`
  height: 34px;
  width: 90px;
  border: none;
  background-color: ${props => (props.isTrue ? '#ffffff' : '##ffffff79')};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #334155;
  margin-right: 10px;
  border-radius: 5px;
  opacity: ${props => (props.isTrue ? '1' : '0.5')};
`
export const ListItem = styled.li`
  list-style-type: none;
`
