// Styled.
import styled from 'styled-components/native';

// Custom Components.
import { buttonsCommon, widthAndHeight } from '../Buttons/styles';

// Constants.
import APP_COLORS from '../../constants/colors';

export const CardContainer = styled.View`
    position: relative;
    height: 260px;
    margin: 0 45px;
`;

export const CardTitleContainer = styled.View`
    flex-direction: row;

    align-items: center;

    width: 100%;
    height: 50px;
    background: ${APP_COLORS.NORMAL_COLORS};

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    position: absolute;

    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

export const CardTitleText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-left: 10px;
`;


// export const CardImageOverlay = styled.View`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;

//     background: #000;
//     opacity: 0.5;

//     height: 100%;
//     width: 100%;
// `;

export const CardImage = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 10px;

    background: #000;
`;

export const CardAboutElipseContainer = styled.TouchableOpacity`
    position: absolute;
    bottom: -20;
    right: -35;
    z-index: 15;

    ${buttonsCommon}
    ${widthAndHeight}
`;