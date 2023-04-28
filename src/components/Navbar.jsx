import { Badge } from '@material-ui/core';
import { LocalMallRounded, Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    // color: white;
    /* font-size: 46px;
    font-weight: 800; */
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.div`
    font-size: 40px;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div` 
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size : 24px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:18}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo style={{fontSize:40}}>Bettermart</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>SignIn</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={5} color='primary'>
                            <LocalMallRounded/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar