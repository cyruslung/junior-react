import React from 'react'
import styled from 'styled-components'

const Element = ({ red, className }) => {
  return (
    <div className={className}>
      <div className="element__img" />
      <div className="element__info">
        <div className="element__title" skyblue>
          Cute Puppy
        </div>
        <div className="element__description">
          Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui.
          Eos perferendis autem qui fugiat.
        </div>
      </div>
    </div>
  )
}

const StyledElement = styled(Element)`
  width: 100%;
  height: 260px;
  box-shadow: 0 0 5px 2px #ccc;
  .element__img {
    display: inline-block;
    width: 300px;
    height: 100%;
    background-image: url('this is background url');
  }
  .element__info {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 300px);
    height: 100%;
    text-align: left;
    .element__title {
      padding: 20px 0 0 20px;
      font-size: 48px;
      color: ${props => (props.red ? 'red' : 'black')};
    }
    .element__description {
      padding: 20px;
      font-size: 30px;
      font-style: italic;
      color: #888888;
    }
  }
`

export default StyledElement;