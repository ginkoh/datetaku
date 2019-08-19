// Native Components.
import { StyleSheet } from 'react-native';

// Styled.
import styled from 'styled-components/native';

// Styles.
import { buttonsCommon } from '../Buttons/styles';

// Constants.
import APP_COLORS from '../../constants/colors';

export const ObservationModalContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
    }
})`
    display: flex;
    flex: 1;
    flex-direction: column;

    margin-top: 100px;
`;

export const ObservationTitle = styled.Text`
    font-weight: bold;
    font-size: 25px;
    margin-top: 20px;
    color: ${APP_COLORS.LOW_OPACITY_PURPLE};
`;

export const CloseModalButton = styled.TouchableOpacity`
    ${buttonsCommon}
`;

export const SendModalButton = styled.TouchableOpacity`
    ${buttonsCommon}
`;