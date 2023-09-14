import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  MainHeading,
  UnorderedList,
  PickColor,
  ColorInput,
  ColorsContainer,
  GenerateButton,
  EachColorContainer,
  ColorCode,
  Paragraph,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    colorsList: ['#8ae323', '#014f7b'],
    leftColor: '#8ae323',
    rightColor: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  getDirection = directionValue => {
    this.setState({
      direction: directionValue,
    })
  }

  getFirstColor = event => {
    this.setState({leftColor: event.target.value})
  }

  getSecondColor = event => {
    this.setState({rightColor: event.target.value})
  }

  generateNewGradient = () => {
    const {leftColor, rightColor} = this.state
    const {colorsList} = this.state

    const newList = colorsList
    newList[0] = leftColor
    newList[1] = rightColor

    this.setState({colorsList: newList})
  }

  render() {
    const {colorsList, direction, leftColor, rightColor} = this.state

    return (
      <BgContainer
        direction={direction}
        colorsList={colorsList}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderedList>
          {gradientDirectionsList.map(item => (
            <GradientDirectionItem
              getDirection={this.getDirection}
              item={item}
              key={item.directionId}
              isTrue={direction === item.value}
            />
          ))}
        </UnorderedList>
        <PickColor>Pick The Colors</PickColor>
        <ColorsContainer>
          <EachColorContainer>
            <ColorCode>{leftColor}</ColorCode>
            <ColorInput
              value={leftColor}
              onChange={this.getFirstColor}
              type="color"
            />
          </EachColorContainer>
          <EachColorContainer>
            <ColorCode>{rightColor}</ColorCode>
            <ColorInput
              value={rightColor}
              onChange={this.getSecondColor}
              type="color"
            />
          </EachColorContainer>
        </ColorsContainer>
        <GenerateButton onClick={this.generateNewGradient}>
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
