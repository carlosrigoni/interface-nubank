import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Invite Friends</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Demand</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Deposit</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Block Card</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
