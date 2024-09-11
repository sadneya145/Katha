import React from 'react';
import Start from './Component/Start.js';
import Question from './Component/Question.js';
import Result from './Component/Result.js';
import { DataProvider } from '../Quiz/Context/dataContext';

const Quiz = () => {
  return (
    <div>
    <DataProvider>
      {/* Welcome Page */}
      <Start/>

      {/* Quiz Page */}
      <Question/>

      {/* Result Page */}
      <Result/>

    </DataProvider>
    </div>
  )
}

export default Quiz