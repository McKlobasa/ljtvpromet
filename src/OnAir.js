import styled from 'styled-components'
import React from 'react'

const Grid = styled.div`
  height: 53.44vw;
  width: 95vw ;
  display: grid;
  overflow: hidden;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 50% 50%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`
const ImageContainer = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`
const Image = styled.img`
  height: 100%;
  width: auto;
  overflow: hidden;
  position: relative;
`
const Location = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top:0;
  left: 0;
  padding: 5px;
  height: 50px;
  background: black;
  color: white;
  font-size: 26px;
`

export default function OnAir (props) {
  return (
    <Grid>
      {props.images.map((image, iter) =>  <ImageContainer>
                                            <Image alt="" src={`${image}?${Date.now()}`} />
                                            <Location>{props.locations[iter]}</Location>
                                          </ImageContainer>) }
    </Grid>
  )
}