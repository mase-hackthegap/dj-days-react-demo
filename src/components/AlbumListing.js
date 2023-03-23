import React from 'react';
import styled from 'styled-components';

const AlbumListing = (props) => {
   return (
    <>
        <StyledDiv>
            <Name>{props.AlbumName}</Name>
            <Artist>{props.AlbumArtist}</Artist>
            <Genre>{props.AlbumGenre}</Genre>
        </StyledDiv>
    </>
   );
}

export default AlbumListing;

const Name = styled.p`
    font-size: 30px;
`

const Artist = styled.p`
    font-size: 20px;
`

const Genre = styled.p`
    font-size: 15px;
`
const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 70%;
    padding: 10px;
    background-color: aquamarine;
    margin: 0px auto 20px auto;
`

