// React.
import React from 'react';

// Libraries.
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Native Components.
// import Animated from 'react-native';

// Custom Components.
import { ButtonsContainer, StyledRejectPersonButton, StyledAcceptPersonButton } from './styles';

// Constants.
import APP_COLORS from '../../constants/colors';
import { boxShadow } from '../../global-styles';

export default function RejectAndAcceptButtons({
    navigation
}) {
    function onAcceptHandler() {
        return navigation.navigate('AnotherOne')
    };

    function onRejectHandler() {
        return navigation.navigate('AnotherOne')
    };

    return (
        <ButtonsContainer>
            <StyledRejectPersonButton style={boxShadow.boxShadow} title="Reject" onPress={onRejectHandler}>
                <Icon name="heart-broken-outline" size={50} color={APP_COLORS.LOW_OPACITY_PURPLE} />
            </StyledRejectPersonButton>
            <StyledAcceptPersonButton style={boxShadow.boxShadow} title="Accept" onPress={onAcceptHandler}>
                <Icon name="heart-outline" size={50} color={APP_COLORS.MAIN_COLOR} />
            </StyledAcceptPersonButton>
        </ButtonsContainer>
    );
};