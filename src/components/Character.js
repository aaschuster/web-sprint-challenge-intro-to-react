import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: solid dimgrey 3px;
    width: 70%;
    max-width: 400px;
    min-width: 175px;
    margin: 2% auto;
    background-color: rgba(255,255,255,0.5);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1%;
`

const StyledH2 = styled.h2`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    font-size: 1.3rem;
`

const StyledUL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    margin: 0.8%;
`

const StyledLI = styled.li`
    width: 100%;
    text-align: center;
    margin: 0.8%;
    font-size: 0.9rem;
`

const StyledP = styled.p`
    margin: 0.8%;
`

const ItalicDiv = styled.div`
    font-style: italic;
    margin: 2%;
`

const Character = ( {name, gender, birthYear, films} ) => {
    return (
        <StyledDiv>
            <StyledH2>{name}</StyledH2>
            <StyledP>Born: {birthYear}</StyledP>
            <StyledP>Gender: {gender}</StyledP>
            <ItalicDiv>
                <StyledP>Films: </StyledP>
                <StyledUL>
                    {
                        films.map( (film, index) => {
                            return <StyledLI key={index}>{film}</StyledLI>
                        })
                    }
                </StyledUL>
            </ItalicDiv>

        </StyledDiv>
    )
}

export default Character;