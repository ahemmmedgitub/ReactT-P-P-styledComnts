// Write your code here
import {DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, getDirection, isTrue} = props
  const {displayText, value} = item

  const sendDirectionId = () => {
    getDirection(value)
  }

  return (
    <li>
      <DirectionBtn isTrue={isTrue} onClick={sendDirectionId}>
        {displayText}
      </DirectionBtn>
    </li>
  )
}
export default GradientDirectionItem
