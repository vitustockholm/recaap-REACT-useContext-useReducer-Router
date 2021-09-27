import React from 'react';
import { useHistory } from 'react-router-dom';

const GoBackButton = () => {
  const history = useHistory(); // between route components
  return <button onClick={() => history.goBack()}>Go Back</button>;
};

export default GoBackButton;

//history goBack()
//history push
