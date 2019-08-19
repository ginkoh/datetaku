// Styled.
import styled from 'styled-components/native';

// Constants.
import APP_COLORS from '../../constants/colors';

export const Container = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    background: ${APP_COLORS.MAIN_COLOR};
`;

export const MeetPeopleHeaderContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MeetPeopleHeaderLogo = styled.Image`
    height: 80px;
    width: 85px;
    margin-top: 20px;
`;