import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

const Image = styled.img`
  margin: 10px;
`
const Button = styled.button`
  height: fit-content;
  width: fit-content;
  position: relative;
  background: none;
  border: none;
`
const ButtonText = styled.div`
  color: red;
  font-size: 80px;
  position: absolute;
  top: 10px;
  right: 20px;
`
export default function OnAir (props) {
  const [availableNumbers, setAvailableNumbers] = useState([6,5,4,3,2,1])
  const [numbers, setNumbers] = useState(['','','','','','','','','','','','','','','','','',''])

  const getAvailableNumber = (position) => {
    if (availableNumbers.length > 0) {
      let currentAvailable = availableNumbers
      const outputNumber = currentAvailable.pop()
      setAvailableNumbers(currentAvailable)
      setNumbers(numbers.map((item, iter) => iter == position ? outputNumber : item))
    }
  }
  const returnNumber = ( position ) => {
    let newArray = availableNumbers
    newArray.push(numbers[position])
    setAvailableNumbers(newArray)
    setNumbers(numbers.map((item, iter) => iter == position ? '' : item))
  }
  const manageNumber = (position) => {
    if (numbers[position] == '') getAvailableNumber(position)
    else returnNumber(position)
  }
  useEffect(() => {
    let imageIDs = []
    for (let i = 0; i < 6; i++) {
      numbers.map((item, iter) => {
        if (item == i + 1) {
          imageIDs.push(iter)
          console.log(`pushing ${iter}`)
        }
      })
    }
    console.log(imageIDs)
    props.setChosenImages(imageIDs)
  }, [numbers])

  return (
    <div>
      {props.images.map((image, iter) =>  <Button onClick={() => manageNumber(iter)}>
                                            <Image alt="" height={'100px'} src={`${image}?${Date.now()}`} />
                                            <ButtonText>{numbers[iter]}</ButtonText>
                                          </Button>) }

    </div>
  )
}