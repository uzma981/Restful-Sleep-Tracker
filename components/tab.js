import React, { useRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components';

const bgColors = {
  home: '#e5c1e5',
  book: '#e5c1e5',
  analytics: '#d7d8f8',
  list: '#bce3fa',
};

const textColors = {
  home: '#4b458c',
  book: '#4b458c',
  analytics: '#4b458c',
  list: '#4b458c',
};

const tabNames = {
  home: 'Home',
  book: 'Diary',
  analytics: 'Analytics',
  list: 'Settings',
}

const Container = styled.TouchableWithoutFeedback``;

const Background = styled.View`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.focused ? bgColors[props.label] : '#9d7ede')};
  border-radius: 100px;
  margin: 6px;
`;

const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;

const Label = styled.Text`
  color: ${(props) => textColors[props.label]};
  font-weight: 600;
  margin-left: 8px;
`;

export default function Tab({label, accessibilityState, onPress}) {
  const focused = accessibilityState.selected;
  const iconName = focused ? label : `${label}-outline`

  return (
    <Container onPress={onPress}>
      <Background focused={focused} label={label}>
        <Ionicons name={iconName} size={20} color={textColors[label]} />
        {focused ? (
          <Label label={label}>
            {tabNames[label]}
          </Label>
        ) : null}
      </Background>
    </Container>
  );
}
