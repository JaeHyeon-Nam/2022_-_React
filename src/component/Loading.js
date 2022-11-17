import React from 'react';
import {Background, LoadingText} from './Styles';
import Spinner from './Spinner-2.gif';

export default () => {
  return (
    <Background>
      <LoadingText>Loading Recommend.</LoadingText>
      <img src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};