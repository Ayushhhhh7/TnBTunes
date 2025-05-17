import {SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Splash, SongsList} from '@screens';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <SongsList />
    </SafeAreaView>
  );
};

export default App;
