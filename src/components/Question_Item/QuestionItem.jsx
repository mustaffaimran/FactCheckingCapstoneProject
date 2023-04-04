import { QuestionsData } from '../../data.js';
import { useEffect, useState } from 'react';
import Results from './Results';

export default function Question() {
  const [QuestionIndex, GetQuestionIndex] = useState(0);
  const [AllQuestions, SetAllQuestions] = useState(QuestionsData);
  const [CurrentQuestion, SetCurrentQuestion] = useState(QuestionsData.questions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  let [answerSelected, setAnswerSelected] = useState(false);
  const [progress, setProgress] = useState(0);

  async function previewQhandler(answer) {
    let TempQuestion = AllQuestions;
    TempQuestion.questions[QuestionIndex].Ans = answer;
    SetAllQuestions(TempQuestion);
    setSelectedAnswer(answer);
    setAnswerSelected(true);
    console.log(AllQuestions);
  }

  async function handleNext() {
    if ((QuestionIndex !== 7 && answerSelected) || CurrentQuestion.Ans !== undefined) {
      if (AllQuestions.questions[QuestionIndex + 1].Ans != null) {
        setSelectedAnswer(AllQuestions.questions[QuestionIndex + 1].Ans);
      } else {
        setSelectedAnswer(null);
      }
      setAnswerSelected(false);
      SetCurrentQuestion(QuestionsData.questions[QuestionIndex + 1]);
      GetQuestionIndex(QuestionIndex + 1);
      setProgress((QuestionIndex + 1) / AllQuestions.questions.length);
    }
  }

  async function handlePrev() {
    if (QuestionIndex !== 0) {
      await SetCurrentQuestion(QuestionsData.questions[QuestionIndex - 1]);
      await GetQuestionIndex(QuestionIndex - 1);
      setProgress((QuestionIndex - 1) / AllQuestions.questions.length);
      if (AllQuestions.questions[QuestionIndex - 1].Ans != null) {
        setSelectedAnswer(AllQuestions.questions[QuestionIndex - 1].Ans);
      } else {
        setSelectedAnswer(null);
      }
    }
  }

  if (QuestionIndex === AllQuestions.questions.length - 1 && answerSelected) {
    return <Results />;
  }

  return (
    <section className="py-8 sm:py-16 lg:py-20 mx-auto">
      <div script={{
        border: "2px solid black"
      }}>
        <div
          className=""
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            fontWeight: '600',
          }}
        >
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              style={{
                color: 'white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5px',
                fontWeight: index === QuestionIndex ? 'bold' : 'normal',
                border: index === QuestionIndex ? '2px solid #48bb78' : 'none',
                cursor: AllQuestions.questions[index].Ans !== undefined ? 'pointer' : 'not-allowed',
                opacity: AllQuestions.questions[index].Ans !== undefined ? 1 : 0.5,
              }}
              onClick={() => {
                if (AllQuestions.questions[index].Ans !== undefined) {
                  GetQuestionIndex(index);
                  SetCurrentQuestion(QuestionsData.questions[index]);
                  setProgress((index + 1) / AllQuestions.questions.length);
                  setSelectedAnswer(AllQuestions.questions[index].Ans);
                }
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div
          style={{
            borderBottom: '2px solid black',
            backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))',
            textAlign: 'Center',
            borderRadius: '10px',
            padding: '0 0 0px 0',
          }}
          className="block justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: `${progress * 100}%`,
                height: '40px',
                backgroundColor: 'white',
                borderRadius: '5px',
                // borderBottom:'5px solid black',
                marginTop: '20px',
                transition: 'width 0.5s ease-in-out',
                animation: 'pulse 2s ease-out infinite',
              }}
            />
          </div>
        </div>
        <div
          style={{
            borderBottom: '2px solid black',
            backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))',
            textAlign: 'Center',
            borderRadius: '10px',
            padding: '0 0 10px 0',
          }}
          className="block justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"
        >
          <div style={{ position: 'relative' }}></div>
          <h3
            class="px-3 sm:px-6 max-w-3xl mx-auto text-4xl md:text-3xl font-bold leading-tighter tracking-tighter font-heading"
            style={{
              marginLeft: '50px',
              padding: '20px',
            }}
          >
            Why Is This Question Important?
          </h3>

          <h4
            style={{
              padding: '10px',
            }}
          >
            Category : {CurrentQuestion.Category}
          </h4>
          <p style={{
            padding: "0 20px"
          }} key={QuestionIndex}>{CurrentQuestion.Why}</p>
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
                borderRadius: '100px',
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
                borderRadius: '100px',
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
              border: 'none',
              borderRadius: '20px',
              padding: '10px 20px',
              marginRight: '10px',
              marginLeft: '350px',
              cursor: 'pointer',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onClick={() => {
              handlePrev();
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0px 12px 17px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
            }}
          >
            Previous Question
          </button>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
              borderRadius: '20px',
              padding: '10px 20px',
              cursor: 'pointer',
              marginRight: '350px',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onClick={() => {
              handleNext();
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0px 12px 17px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    </section>
  );
}
