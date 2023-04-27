import React, { useState } from 'react';

const articleMap = {
  articlePara1:
    'A new study published in the Journal of Nutrition has suggested that consuming small amounts of chocolate may be linked to weight loss. The study was conducted by researchers at a prominent university over a period of six months, and involved a randomized controlled trial of 200 participants.',
  articlePara2:
    'Half of the participants were instructed to consume a small serving of dark chocolate every day, while the other half were instructed to abstain from consuming chocolate. Both groups were instructed to maintain their normal diet and exercise routines throughout the study period.',
  articlePara3:
    'At the end of the six months, the group that had consumed chocolate showed an average weight loss of approximately 10 pounds, while the control group showed an average weight loss of approximately 5 pounds. The researchers note that this difference was statistically significant and suggest that the weight loss may be attributed to the flavonoids found in chocolate, which have been shown to have potential metabolic benefits.',
  articlePara4:
    'Flavonoids are a type of phytonutrient found in plants, including cocoa beans. They are known for their antioxidant properties, and have been shown to have potential health benefits, such as reducing inflammation and improving heart health. In the case of weight loss, flavonoids may help to increase energy expenditure and reduce inflammation, which can contribute to weight gain.',
  articlePara5:
    'The researchers note that while the study provides some interesting preliminary findings, more research is needed to confirm these results and to determine the optimal dosage and duration of chocolate consumption for weight loss. Additionally, they caution that chocolate should be consumed in moderation, as it is high in calories and excess consumption may lead to weight gain.',
  articlePara6:
    'It is worth noting that not all chocolate is created equal when it comes to health benefits. Dark chocolate, which contains a higher percentage of cocoa solids than milk chocolate, is generally considered to be healthier due to its higher flavonoid content. Additionally, chocolate that is high in sugar and saturated fat may contribute to weight gain and other health problems.',
  articlePara7:
    'Overall, the study provides some interesting preliminary findings on the potential benefits of chocolate consumption for weight loss, but more research is needed before any definitive conclusions can be drawn. As always, individuals should consult with their healthcare provider before making any major changes to their diet or exercise routine.',
};

export const QuestionsData = [
  {
    Question: 'Is the source reputable and trustworthy?',
    Category: 'Authority',
    Why: 'While the article presents itself as a legitimate news source, there is no specific information given about the publication or its credentials. Without this information, it is difficult to determine whether the source is reputable and trustworthy.',
    Ans: 'No',
  },
  {
    Question: 'Is the information supported by reliable evidence, such as statistics?',
    Category: 'Authority',
    Why: 'The article does not provide any specific statistics or data to support its claims. While it mentions several studies, it does not provide any details about them, which makes it difficult to determine whether they are reliable sources of evidence.',
    Ans: 'No',
  },
  {
    Question: 'Are there multiple sources confirming the information?',
    Category: 'Accuracy',
    Why: 'The article only cites a single study to support its claims, and does not reference any other sources of information or research. Without multiple sources confirming the information, it is difficult to determine its accuracy.',
    Ans: 'No',
  },
  {
    Question: 'Does the writer have academic background or expertise in the field related to the topic?',
    Category: 'Accuracy',
    Why: `The article does not provide any information about the writer's academic background or expertise in the field related to the topic. Without this information, it is difficult to determine whether the writer has the necessary knowledge and expertise to accurately present the information.`,
    Ans: 'No',
  },
  {
    Question: 'Is the information current and not outdated?',
    Category: 'Currency',
    Why: 'The article does not provide any specific dates or timelines for the research or studies it references. Without this information, it is difficult to determine whether the information is current and up-to-date.',
    Ans: 'No',
  },
  {
    Question: 'Has the information been updated or revised recently?',
    Category: 'Currency',
    Why: 'The article does not provide any information about whether the information has been updated or revised recently. Without this information, it is difficult to determine whether the information presented is accurate and up-to-date.',
    Ans: 'No',
  },
  {
    Question: 'Is the information presented in a comprehensive manner, covering all relevant aspects of the topic?',
    Category: 'Coverage',
    Why: 'The article only focuses on a single study and does not provide a comprehensive overview of the topic. It does not discuss other potential causes of allergies or provide information about the prevalence of allergies in different populations, which limits its scope and comprehensiveness.',
    Ans: 'No',
  },
  {
    Question: 'Are there any conflicts of interest that could bias the information presented?',
    Category: 'Coverage',
    Why: 'The article does not provide any information about conflicts of interest that could bias the information presented. Without this information, it is difficult to determine whether the article is presenting a balanced and unbiased view of the topic.',
    Ans: 'No',
  },
];

export default function App() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  const toggleQuestions = () => setShowQuestions(!showQuestions);
  const toggleArticle = () => setShowArticle(!showArticle);

  const questions = QuestionsData.map((question, index) => (
    <div key={index}>
      <h3>Question: {question.Question}</h3>
      <p>Category: {question.Category}</p>
      <p>Answer: {question.Ans} </p>
      <p>Why: {question.Why} </p>
    </div>
  ));

  return (
    <div className="container mx-auto py-4">
      <h1 style={{ display: 'flex', justifyContent: 'center' }} className="text-3xl font-bold mb-4">
        Assessing the Credibility of a News Article
      </h1>
      <p className="mb-4">
        In this article, we will analyze a news article about the potential benefits of chocolate consumption for weight
        loss and evaluate its credibility using a set of criteria.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h2 style={{ display: 'flex', justifySelf: 'center' }} className="text-2xl font-bold mb-2">
          Article
        </h2>
        <button
          style={{
            backgroundColor: '#1E40AF',
            color: '#FFFFFF',
            fontWeight: 'bold',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '10px',
            width: '200px',
          }}
          onClick={toggleArticle}
        >
          {showArticle ? 'Hide Article' : 'Show Article'}
        </button>

        {showArticle && (
          <div
            style={{
              backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))  ',
              padding: '40px 20px',
              borderRadius: '5px',
              lineHeight: '1.5',
              marginBottom: '20px',
            }}
          >
            <h1 className="text-3xl font-bold text-center mb-5">
              Study Finds Possible Link between Chocolate Consumption and Weight Loss
            </h1>
            <br />
            {Object.values(articleMap).map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '15px' }}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '20px',
        }}
      >
        <h2 className="text-2xl font-bold mb-2">Our Response Using Our Questionnaire</h2>
        <button
          style={{
            backgroundColor: '#1E40AF',
            color: '#FFFFFF',
            fontWeight: 'bold',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '10px',
            width: '200px',
          }}
          onClick={toggleQuestions}
        >
          {showQuestions ? 'Hide Questions' : 'Show Questions'}
        </button>
        <div style={{ backgroundColor: '', padding: '10px', borderRadius: '5px' }}>
          {showQuestions &&
            QuestionsData.map((qa, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgb(30 41 59 / var(--tw-bg-opacity))',
                  marginBottom: '10px',
                  padding: '10px',
                  borderRadius: '10px',
                }}
              >
                <h3 style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '5px' }}>{qa.Question}</h3>
                <p style={{ fontSize: '1em', marginBottom: '5px' }}>
                  {' '}
                  <b>Category: </b> {qa.Category}
                </p>
                <p style={{ fontSize: '1em', marginBottom: '5px' }}>
                  {' '}
                  <b>Answer: </b> {qa.Ans}
                </p>
                <p style={{ fontSize: '1em', marginBottom: '5px' }}>
                  {' '}
                  <b>Why: </b>
                  {qa.Why}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
