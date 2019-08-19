// Styled.
import styled from 'styled-components/native';

export const widthAndHeight = `
    width: 50px;
    height: 50px;
`;

export const buttonsCommon = `
    border-radius: 50;
    background: #fff;
    width: 80px;
    height: 80px;
    margin: 0 20px;
    justify-content: center;
    align-items: center;
`;

export const ButtonsContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    margin-top: 20px;
`;

export const StyledRejectPersonButton = styled.TouchableOpacity`
    ${buttonsCommon}
`;

export const StyledAcceptPersonButton = styled.TouchableOpacity`
    ${buttonsCommon}
`;