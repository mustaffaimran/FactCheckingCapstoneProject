export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text:'Questionnaire',
      href:'/Question',
    },
    {
      text: 'About Us',
      href: '/aboutus',
    },
  ],
};

export const Category = {
  Authority: "The credibility and expertise of the source of information",
  Accuracy : "The truthfulness and correctness of the information presented",
  Currency : "The timeliness and relevance of the information presented",
  Coverage : "The scope and completeness of the information presented"
}

export const QuestionsData = {
  questions: [
    {
      Question: 'Is the source reputable and trustworthy?',
      Category: 'Authority',
      Why: 'This is important because using sources that are not credible or trustworthy can result in the dissemination of false information, which can have a negative impact on the reader.',
      Ans: undefined,
    },
    {
      Question:
        'Is the information supported by reliable evidence, such as statistics?',
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
  ],
};

export const footerData = {
  links: [
    {
      title: 'Home',
      links: [
        { text: 'Intro', href: '#' },

      ],
    },
    {
      title: 'How It Works?',
      links: [
        { text: 'Guide (WIP)', href: '#' },
        { text: 'Examples(WIP)', href: '#' },
        { text: 'Additional Resources(WIP)', href: '#' },
            ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/aboutus' },
      ],
    },
  ],
};
