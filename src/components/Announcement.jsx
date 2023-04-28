import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #07585a;
    color: #ffefef;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal!! Free Shipping For Eid 
    </Container>
  )
}

export default Announcement