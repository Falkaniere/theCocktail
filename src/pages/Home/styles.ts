import styled from 'styled-components/native';

// export const Container = styled.View`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
// `;

export const SeveralDrinks = styled.TouchableOpacity`
  background: #232129;
  align-self: stretch;
  height: 150px;
  margin-top: 100px;

  overflow: hidden;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
`;

export const SeveralText = styled.Text`
  color: #ff9000;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 32px;
`;

export const AlcoholicDrinks = styled.TouchableOpacity`
  background: #232129;
  align-self: stretch;
  height: 150px;

  overflow: hidden;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
`;

export const AlcoholicText = styled.Text`
  color: #ff9000;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  /* margin-left: 32px; */
`;
