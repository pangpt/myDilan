import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ChatItem, Header, InputChat } from '../../components';

export default function Chatting() {
  return (
    <View>
      <Header title="Pak Dilan" />
      <Text>Rabu, 23 Maret 2022</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({});
