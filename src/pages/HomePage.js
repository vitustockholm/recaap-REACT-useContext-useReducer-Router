import React, { useContext, useEffect } from 'react';
import GoBackButton from '../components/4_common/GoBackButton';
import { VisitedPagesContext } from '../App';

const HomePage = () => {
  // Hooks
  // --state
  //---- global
  const { increment } = useContext(VisitedPagesContext);
  //
  console.log(increment);
  //
  //----side effects
  useEffect(() => {
    increment({ type: 'INCREMENT' });
  }, [increment]);

  return (
    <section>
      <h1>Home Page</h1>
      <GoBackButton />
    </section>
  );
};

export default HomePage;
