import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    // color: white;
    font-size: 46px;
    font-weight: 800;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>Navbar</Wrapper>
    </Container>
  )
}

export default Navbar