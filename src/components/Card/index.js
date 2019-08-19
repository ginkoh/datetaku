// React.
import React, { Fragment, useState } from 'react';

// Native Components.
import { Alert, Text, View, StyleSheet } from 'react-native';

// Custom Components.
import ObservationModal from '../ObservationsModal/index';

// Libraries.
import Icon from 'react-native-vector-icons/MaterialIcons';

// Styles.
import {
    CardContainer,
    CardImage,
    CardTitleContainer,
    CardTitleText,
    CardAboutElipseContainer
} from './styles';

import { boxShadow } from '../../global-styles';

/**
 * goodbye people!!!
 */

export function CardAboutElipse() {
    const [modalVisible, setModalVisible] = useState(false);

    function openModal() {
        setModalVisible(true);
    };

    function onCloseModal() {
        setModalVisible(false);
    };

    function onSendObservation() {
        // Dispatch to the firebase/app store.
        setModalVisible(false);
    };

    return (
        <>
            <ObservationModal modalVisible={modalVisible} closeModal={onCloseModal} sendObservation={onSendObservation} />
            <CardAboutElipseContainer style={boxShadow.boxShadow} onPress={openModal}>
                <Icon name="comment" size={30} color="#c27cf7" />
            </CardAboutElipseContainer>
        </>
    );
};

export function CardTitle({
    name
}) {
    return (
        <CardTitleContainer>
            <CardTitleText>{name}</CardTitleText>
            <CardAboutElipse />
        </CardTitleContainer>
    )
};

export default function Card() {
    return (
        <CardContainer>
            <CardTitle name="Daniela Souza, 20 - Mato Grosso" />
            <CardImage source={require('../../assets/girl.jpeg')} />
        </CardContainer>
    )
};