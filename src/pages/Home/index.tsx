import React from 'react';
import { Image, ScrollView } from 'react-native';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import alcool from '../../assets/alcool.png';
import {
  AlcoholicDrinks,
  AlcoholicText,
  SeveralDrinks,
  SeveralText,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
      >
        <Image source={logo} />
        <SeveralDrinks>
          <Image
            source={alcool}
            style={{
              borderRadius: 15,
              height: 150,
              width: 200,
              alignSelf: 'flex-start',
            }}
          />
          <SeveralText>Several</SeveralText>
        </SeveralDrinks>
        <AlcoholicDrinks>
          <Image
            source={alcool}
            style={{
              borderRadius: 15,
              height: 150,
              width: 200,
              alignSelf: 'flex-end',
            }}
          />
          {/* <AlcoholicText>ALCOHOLIC</AlcoholicText> */}
        </AlcoholicDrinks>
      </ScrollView>
    </>
  );
};

export default Home;
