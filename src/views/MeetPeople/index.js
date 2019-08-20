// React.
import React from 'react';

// Styles.
import { Container } from './styles';
import { MeetPeopleHeaderContainer, MeetPeopleHeaderLogo } from './styles';

// Native Components.
import { Text, Image } from 'react-native';

// Custom Components.
import Card from '../../components/Card/index';
import RejectAndAcceptButtons from '../../components/Buttons/index';
import APP_COLORS from '../../constants/colors';

export function MeetPeopleHeader() {
    return (
        <MeetPeopleHeaderContainer>
            <MeetPeopleHeaderLogo source={require('../../assets/logo_roxo.png')}></MeetPeopleHeaderLogo>
        </MeetPeopleHeaderContainer>
    );
};

/**
 * MeetPeople Screen Component (React Navigation).
 * 
 * @param {*} props.navigation
 */
export default function MeetPeople({
    navigation
}) {
    return (
        <Container>
            <MeetPeopleHeader />
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                    marginBottom: 20,
                    marginTop: 20,
                    alignSelf: 'center'
                }}>
                Meet People Page
            </Text>
            <Card />
            <RejectAndAcceptButtons navigation={navigation}></RejectAndAcceptButtons>
        </Container>
    );
};