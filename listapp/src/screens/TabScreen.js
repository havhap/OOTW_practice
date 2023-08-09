import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
`;

// export const Weather = () => {
//     return (
//         <Container>
//             <StyledText>뭘써야되나요</StyledText>
//         </Container>
//     )
// };

export const Home = () => {
    return(
        <Container>
            <StyledText>Home</StyledText>
        </Container>
    )
};

export const Codi = () => {
    return (
        <Container>
            <StyledText>Codi</StyledText>
        </Container>
    )
};



/* src/screens/TabScreen.js */