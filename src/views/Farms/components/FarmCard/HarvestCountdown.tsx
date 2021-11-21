import { BigNumber } from 'bignumber.js'
import React, { useEffect } from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components'

const StyledDiv = styled.div`
  color: #fff;
`

interface HarvestCountdownProps {
  nextHarvestUntil: BigNumber
  setIsHarvestLocked: any
}

const HarvestCountdown: React.FC<HarvestCountdownProps> = ({ nextHarvestUntil, setIsHarvestLocked }) => {
  const nextHarvest = nextHarvestUntil.toNumber() * 1000;
  return (
    <StyledDiv>
      <Countdown key={nextHarvest} intervalDelay={0} date={nextHarvest} onComplete={() => setIsHarvestLocked(false)} />
    </StyledDiv>
  )
}

export default HarvestCountdown
