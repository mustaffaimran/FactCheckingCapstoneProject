import { QuestionsData } from '../../data.js';
import { useEffect, useState } from 'react';

export default function Question() {
  const [QuestionIndex, GetQuestionIndex] = useState(0);
  const [AllQuestions, SetAllQuestions] = useState(QuestionsData);
  const [CurrentQuestion, SetCurrentQuestion] = useState(QuestionsData.questions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  let [answerSelected, setAnswerSelected] = useState(false);

  async function previewQhandler(answer) {
    let TempQuestion = AllQuestions;
    TempQuestion.questions[QuestionIndex].Ans = answer;
    SetAllQuestions(TempQuestion);
    setSelectedAnswer(answer);
    setAnswerSelected(true);
    console.log(AllQuestions) 
  }

  async function handleNext() {
    if ((QuestionIndex !== 7 && answerSelected) || CurrentQuestion.Ans !== undefined) {
      setSelectedAnswer(null);
      setAnswerSelected(false);
      SetCurrentQuestion(QuestionsData.questions[QuestionIndex + 1]);
      GetQuestionIndex(QuestionIndex + 1);
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
          borderBottom: '2px solid black',
          backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))',
          textAlign: 'Center',
          borderRadius: '10px',
          padding: '0 0 10px 0',
        }}
        class="block justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"
      >
        <h3
          class="px-3 sm:px-6 max-w-3xl mx-auto text-4xl md:text-3xl font-bold leading-tighter tracking-tighter font-heading"
          style={{
            marginLeft: '50px',
            padding: '20px',
          }}
        >
          Why Is This Question Important?
        </h3>
        <p key={QuestionIndex}>{CurrentQuestion.Why}</p>
      </div>

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
          style={{ padding: '20px', margin: '10px !important' }}
          class="flex flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb- px-4 sm:px-6"
        >
          <div
            style={{
              minWidth: '50%',
              justifyContent: 'center',
              cursor: 'pointer',
              border:
                selectedAnswer === 'true' ? '2px solid #3182ce' : '2px solid rgb(30 41 59 / var(--tw-bg-opacity))',
              borderRadius: '4px',
              padding: '12px',
              backgroundColor: selectedAnswer === 'true' ? '#f0f4f8' : 'rgb(30 41 59 / var(--tw-bg-opacity))',
              fontWeight: selectedAnswer === 'true' ? '600' : 'normal',
              color: selectedAnswer === 'true' ? '#3182ce' : 'white',
            }}
            className="mt-0 mb-0 sm:px-6"
            id="true"
            onClick={(info) => {
              previewQhandler(info.target.id);
            }}
          >
            True
          </div>

          <div
            style={{
              minWidth: '50%',
              justifyContent: 'center',
              cursor: 'pointer',
              border: selectedAnswer === 'false' ? '2px solid ' : '2px solid rgb(30 41 59 / var(--tw-bg-opacity))',
              borderRadius: '4px',
              padding: '12px',
              backgroundColor: selectedAnswer === 'false' ? '#f0f4f8' : 'rgb(30 41 59 / var(--tw-bg-opacity))',
              fontWeight: selectedAnswer === 'false' ? '600' : 'normal',
              color: selectedAnswer === 'false' ? '#3182ce' : 'white',
            }}
            className="mt-0 mb-0 sm:px-6"
            id="false"
            onClick={(info) => {
              previewQhandler(info.target.id);
            }}
          >
            False
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid black',
            borderRadius: '10px',
            padding: '10px 20px',
            marginRight: '10px',
            marginLeft: '350px',
            cursor: 'pointer',
          }}
          onClick={() => {
            handlePrev();
          }}
        >
          Previous
        </button>
        <button
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid black',
            borderRadius: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginRight: '350px',
          }}
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
}
