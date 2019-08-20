// React.
import React, { useState } from 'react';

// Native Components.
import { Modal, TextInput } from 'react-native';

// Styles.
import {
    ObservationTitle,
    ObservationModalContainer,
    CloseModalButton,
    SendModalButton
} from './styles';
import { globalStyles } from '../../global-styles';

// Libraries.
import Icon from 'react-native-vector-icons/MaterialIcons';

// Constants.
import APP_COLORS from '../../constants/colors';
import { ButtonsContainer } from '../Buttons/styles';

export default function ObservationModal({
    modalVisible,
    closeModal,
    sendObservation
}) {
    const [textValue, setTextValue] = useState("Escreva aqui...");

    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
        >
            <ObservationModalContainer>
                <ButtonsContainer>
                    <CloseModalButton style={globalStyles.boxShadow} onPress={closeModal}>
                        <Icon name="close" size={30} color={APP_COLORS.LOW_OPACITY_PURPLE} />
                    </CloseModalButton>
                    <SendModalButton style={globalStyles.boxShadow} onPress={sendObservation}>
                        <Icon name="check" size={30} color={APP_COLORS.MAIN_COLOR} />
                    </SendModalButton>
                </ButtonsContainer>
                <ObservationTitle>
                    Diga algo para ela :)
                </ObservationTitle>
                <TextInput
                    multiline={true}
                    editable={true}
                    onChangeText={(text) => setTextValue(text)}
                    value={textValue}
                ></TextInput>

            </ObservationModalContainer>
        </Modal>
    );
};