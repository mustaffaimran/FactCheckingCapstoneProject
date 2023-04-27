export const QuestionsData = [
  {
    Question: 'Is the source reputable and trustworthy?',
    Category: 'Authority',
    Why: 'This is important because using sources that are not credible or trustworthy can result in the dissemination of false information, which can have a negative impact on the reader.',
    Ans: undefined,
  },
  {
    Question: 'Is the information supported by reliable evidence, such as statistics?',
    Category: 'Authority',
    Why: 'This is important because it ensures that the information presented is factual and not based on personal opinions or beliefs.',
    Ans: undefined,
  },
  {
    Question: 'Are there multiple sources confirming the information?',
    Category: 'Accuracy',
    Why: 'This is important because it adds credibility to the information presented, as multiple sources confirming the same information make it more likely to be accurate.',
    Ans: undefined,
  },
  {
    Question: 'Does the writer have academic background or expertise in the field related to the topic?',
    Category: 'Accuracy',
    Why: 'This is important because it ensures that the writer has the knowledge and expertise necessary to accurately and comprehensively present the information.',
    Ans: undefined,
  },
  {
    Question: 'Is the information current and not outdated?',
    Category: 'Currency',
    Why: 'This is important because outdated information can be inaccurate, and therefore, not useful to the reader.',
    Ans: undefined,
  },
  {
    Question: 'Has the information been updated or revised recently?',
    Category: 'Currency',
    Why: 'This is important because information can change over time, and updates or revisions ensure that the information presented is accurate and up-to-date.',
    Ans: undefined,
  },
  {
    Question: 'Is the information presented in a comprehensive manner, covering all relevant aspects of the topic?',
    Category: 'Coverage',
    Why: 'This is important because comprehensive information ensures that the reader has a full understanding of the topic, and is not left with gaps or missing information.',
    Ans: undefined,
  },
  {
    Question: 'Are there any conflicts of interest that could bias the information presented?',
    Category: 'Coverage',
    Why: 'This is important because conflicts of interest can lead to biased information, which can be misleading to the reader. Disclosing any conflicts of interest helps readers make informed decisions about the credibility of the information presented.',
    Ans: undefined,
  },
];

const questions = QuestionsData.map((question, index) => (
  <div key={index}>
    <h3>{question.Question}</h3>
    <p>Category: {question.Category}</p>
    <p>Why: {question.Why}</p>
  </div>
));

export default function QuestionList() {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-2">Question List</h2>
      <div style={{ backgroundColor: '', padding: '10px', borderRadius: '5px', }}>
      {QuestionsData.map((question, index) => (
        <div
        key={index}
        style={{
          backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))',
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <h3 style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '5px' }}>{question.Question}</h3>
        <p style={{ fontSize: '1em', marginBottom: '5px' }}>Category: {question.Category}</p>
        <p style={{ fontSize: '1em', marginBottom: '5px' }}>Why: {question.Why}</p>
      </div>
      ))}
    </div>
    </div>
  );
}