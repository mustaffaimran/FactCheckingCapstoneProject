import { QuestionsData, Category } from '../../data.js';
import {useState, useEffect} from 'react';


export default function Question(action){
  const [QuestionIndex, GetQuestionIndex]= useState(0);
  const [CurrentQuestion, SetCurrentQuestion] = useState({});
  
  SetCurrentQuestion(QuestionsData.questions[QuestionIndex])

  if ((action == -1) && (QuestionIndex !== 0)) {
    SetCurrentQuestion(QuestionsData.questions[QuestionIndex - 1]);    
    GetQuestionIndex(QuestionIndex-1);
  }
  else if ((action == 1) && (QuestionIndex !== 9)) {
    SetCurrentQuestion(QuestionsData.questions[QuestionIndex + 1]);
    GetQuestionIndex(QuestionIndex+1);
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

      <h3
        class="px-3 sm:px-6 max-w-3xl mx-auto text-4xl md:text-3xl font-bold leading-tighter tracking-tighter font-heading"
      >
        Question #2
      </h3>
      <p>{QuestionsData.questions[2].Question}</p>
    </div>
    <div
      style={{ padding:"0",
    margin: "10px !important" }}
      class="flex flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb- px-4 sm:px-6"
    >
      <div
        style={{
          minWidth: '50%',
          justifyContent: 'Center',
          cursor: 'pointer',
        }}
        class="mt-0 mb-0 px-4 sm:px-6"
      >
        True
      </div>
      <div
        style={{
          borderLeft: '2px solid black',
          height: '50px',
          position: "Absolute",
          left: "50%",
          marginLeft: "-3px", 
        }}
      >
      </div>
      <div
        style={{
          minWidth: '50%',
          cursor: 'pointer',
        }}
        class="mt-0 mb-0 px-4 sm:px-6"
      >
        False
      </div>
    </div>
  </div>
  <button onclick={Question(1)}>Next</button>
  <button onclick={Question(-1)}>Previous</button>
</section>
)

}