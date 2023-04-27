import React from 'react';
import { QuestionsData } from '../../data.js';

const Result = () => {
  let numCorrect = 0;

  QuestionsData.questions.forEach((element, index) => {
    if (index === QuestionsData.questions.length-1) {
      if (element.Ans === 'No') {
        numCorrect++;
      }
    } else {
      if (element.Ans === 'Yes') {
        numCorrect++;
      }
    }
  });

  let rating = '';
  let explanation = '';
  let credibility = '';

  if (numCorrect === 0) {
    rating = 'Terrible';
    explanation = 'The information presented is not reliable and should not be trusted.';
    credibility = 'Not credible';
  } else if (numCorrect >= 1 && numCorrect <= 3) {
    rating = 'Poor';
    explanation =
      'The information presented may be inaccurate or incomplete and should be fact-checked before being used.';
    credibility = 'Not credible';
  } else if (numCorrect >= 4 && numCorrect <= 6) {
    rating = 'Good';
    explanation =
      'The information presented is mostly reliable, but it is still recommended to fact-check and verify any claims made.';
    credibility = 'Somewhat credible';
  } else if (numCorrect >= 7 && numCorrect <= 8) {
    rating = 'Excellent';
    explanation =
      'The information presented is reliable and trustworthy. However, it is still recommended to fact-check and verify any claims made.';
    credibility = 'Very credible';
  }

  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '60px',
        textAlign: 'center',
        backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginBottom: '30px' }} className="text-2xl font-bold mb-2">Your Results</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h3 style={{ margin: '0' }} > <b>Your Score:</b></h3>
        <h3 style={{ margin: '0' }}>
          {numCorrect}/8 ({(numCorrect / 8) * 100}%)
        </h3>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h3 style={{ margin: '0' }}> <b>Rating:</b></h3>
        <h3 style={{ margin: '0' }}>{rating}</h3>
      </div>
      <div
        style={{
          display: 'block',
          // justifyContent: 'space-between',
          alignItems: 'start',
          marginBottom: '20px',
        }}
      >
        <h3 style={{ margin: '0', textAlign: "start" }}><b>Explanation: </b></h3>
        <h3
          style={{
            margin: '0',
            fontSize: '1rem',
            paddingLeft: '115px',
            textAlign: 'left',
          }}
        >
          {explanation}
        </h3>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h3 style={{ margin: '0' }}> <b>Credibility:</b></h3>
        <h3 style={{ margin: '0' }}>{credibility}</h3>
      </div>
      <hr style={{ margin: '50px 0' }} />
      <h2 style={{ marginBottom: '30px' }} className="text-2xl font-bold mb-2">Question Analysis</h2>
      {QuestionsData.questions.map((question, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'rgb(15 23 42 / var(--tw-bg-opacity))',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <h3 style={{ marginBottom: '10px' }} >Question {index + 1}:</h3>
          <p style={{ marginBottom: '10px' }}>{question.Question}</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h4 style={{ margin: '0' }}>Your Selection:</h4>
            <h4 style={{ margin: '0' }}>{question.Ans}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
