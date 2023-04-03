export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'How It Works',
      links: [
        {
          text: 'Examples',
          href: '#',
        },
        {
          text: 'List of Questions',
          href: '#',
        },
      ],
    },
    {
      text: 'About Us',
      href: 'aboutus',
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
      Question: 'How’s the source’s reputation?',
      Category: 'Authority',
      Why: 'This shows how many agree with this writer. If they are well-respected by many others that means this person is perceived as trustworthy.',
      Ans: undefined,
    },
    {
      Question:
        'If the topic is in a specialized field. Is it a reputable news organization or a reputable expert in the field? Does the writer have the academic background in the field to back up their claim?',
      Category: 'Authority',
      Why: 'Anyone can call themself an expert and write things they don’t fully understand to get clicks. It’s important we get our information from people actually who put in the time studying the topic and know what they are talking about.',
      Ans: undefined,
    },
    {
      Question: 'Do other sources confirm or refute this information?',
      Category: 'Accuracy',
      Why: 'If multiple sources confirm the information, then it’s likely accurate. However, if there are conflicting reports, then It’s more questionable whether if what they say is true',
      Ans: undefined,
    },
    {
      Question: 'Is there reliable evidence presented to support the argument such as statistics? ',
      Category: 'Accuracy',
      Why: 'if there is no evidence to support the information, then the whole foundation of their argument is built on sand. Their hypothesis is likely not accurate.',
      Ans: undefined,
    },
    {
      Question: 'Is the context of the information about a current event. Is the information outdated?',
      Category: 'Currency',
      Why: 'Current events get updated frequently with new information, older information may quickly become outdated and irrelevant.',
      Ans: undefined,
    },
    {
      Question: 'Are there any indicators that the information has been updated or revised?',
      Category: 'Currency',
      Why: 'If the information has not been updated or revised recently, it may not be reliable or trustworthy. This question also helps to ensure that the information being presented is not based on outdated data or facts, which could lead to incorrect conclusions or actions.',
      Ans: undefined,
    },
    {
      Question: 'Are there any conflicts of interest that could bias the information being presented?',
      Category: 'Coverage',
      Why: 'Conflicts of interest can affect the credibility and objectivity of the information being presented. If the source of the information has a financial or personal interest in promoting a particular viewpoint or agenda, they may be more likely to present biased or inaccurate information',
      Ans: undefined,
    },
    {
      Question: 'Is the information presented in a comprehensive manner, covering all relevant aspects of the topic, or are there important details missing?',
      Category: 'Coverage',
      Why: 'If important details are missing, the information may be misleading or inaccurate, which can misinform readers and hinder their ability to make informed decisions. By ensuring that the information is comprehensive, readers can trust the source and have confidence in the accuracy of the information presented.',
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
        { text: 'Guide', href: '#' },
        { text: 'Examples', href: '#' },
        { text: 'Additional Resources', href: '#' },
            ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: 'aboutus' },
      ],
    },
  ],
};
