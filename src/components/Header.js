import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
   return (
    <>
    <PageTitle>{props.HeaderContent}</PageTitle>
    </>
   );
}

export default Header;

const PageTitle = styled.h1`
    text-align: center;
    background-color: blue;
`
