// import React from 'react';
import { QuestionsData } from '../../data.js';
import { useEffect, useState } from 'react';

export default function Question() {
  const [QuestionIndex, GetQuestionIndex] = useState(0);
  const [AllQuestions, SetAllQuestions] = useState(QuestionsData);
  const [CurrentQuestion, SetCurrentQuestion] = useState(QuestionsData.questions[0]);
  let answerSelected = false;
  async function previewQhandler (answer) {
    let TempQuestion = AllQuestions;
    TempQuestion.questions[QuestionIndex].Ans = answer;
    await SetAllQuestions(TempQuestion);
    answerSelected = true;
    console.log(AllQuestions)
  };
  // useEffect(() => {
  //   console.log(CurrentQuestion)
  // }, [answerSelected])
  
  async function handleNext() {
    if ((QuestionIndex !== 7 && answerSelected == true) || CurrentQuestion.Ans !== undefined) {
      await SetCurrentQuestion(QuestionsData.questions[QuestionIndex + 1]);
      // await SetCurrentQuestion({...QuestionsData.questions, AllQuestions.questions.filter((item) => item.id === id)});
      await GetQuestionIndex(QuestionIndex + 1);
      answerSelected = false;
    }

  }
  
  async function handlePrev() {
    if (QuestionIndex !== 0) {
      await SetCurrentQuestion(QuestionsData.questions[QuestionIndex - 1]);
      await GetQuestionIndex(QuestionIndex - 1);
    }
    
  }
  return (
    <section class="py-8 sm:py-16 lg:py-20 mx-auto">
      <div
        style={{
          backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))',
          textAlign: 'Center',
          padding: '20px 0 0 0',
          borderRadius: '10px',
        }}
        class="block justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"
      >
        <div
          style={{
            borderBottom: '2px solid black',
            padding: '0 0 10px 0',
          }}
          class="block justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"
        >
          <h3 class="px-3 sm:px-6 max-w-3xl mx-auto text-4xl md:text-3xl font-bold leading-tighter tracking-tighter font-heading">
            Question {QuestionIndex + 1}
          </h3>
          <p key={QuestionIndex}>{CurrentQuestion.Question}</p>
        </div>
        <div
          style={{ padding: '0', margin: '10px !important' }}
          class="flex flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb- px-4 sm:px-6"
        >
          <div
            style={{
              minWidth: '50%',
              justifyContent: 'Center',
              cursor: 'pointer',
            }}
            class="mt-0 mb-0 px-4 sm:px-6"
            id = 'true'
            onClick={(info) => {
              previewQhandler(info.target.id);
            }}
          >
            True
          </div>
          <div
            style={{
              borderLeft: '2px solid black',
              height: '50px',
              position: 'Absolute',
              left: '50%',
              marginLeft: '-3px',
            }}
          ></div>
          <div
            style={{
              minWidth: '50%',
              cursor: 'pointer',
            }}
            id='false'
            class="mt-0 mb-0 px-4 sm:px-6"
            onClick={(info) => {
              previewQhandler(info.target.id);
            }}
          >
            False
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          handlePrev();
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          handleNext();
        }}
      >
        Next
      </button>
    </section>
  );
}
