// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.colorsList.join(',')})`};
  padding-bottom: 20px;
`
export const MainHeading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #ffffff;
`
export const Paragraph = styled.p`
  font-size: 26px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PickColor = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
`
export const ColorInput = styled.input`
  height: 40px;
  width: 80px;
  background-color: transparent;
  border: none;
  outline: none;
`
export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`
export const GenerateButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #1e293b;
  width: 110px;
  height: 34px;
  background-color: #00c9b7;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`
export const EachColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ColorCode = styled(PickColor)`
  font-size: 14px;
`
