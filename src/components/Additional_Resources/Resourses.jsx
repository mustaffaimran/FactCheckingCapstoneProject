import React from 'react';

const data = [
    {
    image: 'https://www.snopes.com/design/images/logo-main.png',
    title: 'Snopes',
    description: 'Snopes is the oldest and largest fact-checking site online. They provide accurate and unbiased information on rumors, urban legends, and misinformation. Their team of journalists and researchers investigate and verify claims, so you can be confident in the information you receive.',
    link: 'https://www.snopes.com/',
    },
    {
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/FactCheck.org_logo.png',
    title: 'FactCheck.org',
    description:
    'FactCheck.org is a nonpartisan, nonprofit “consumer advocate” for voters that aims to reduce the level of deception and confusion in U.S. politics. Their team of journalists and researchers investigate claims made by politicians, interest groups, and the media, providing accurate and unbiased information to the public. They also monitor the accuracy of TV ads, speeches, debates, and news releases.',
    link: 'https://www.factcheck.org/',
    },
    {
    image: 'https://socialecology.uci.edu/sites/default/files/styles/large_3_2_ratio__1080x720_/public/news_images/politifact_logo_950x535.png?itok=oRr4OAls',
    title: 'PolitiFact',
    description:
    'PolitiFact is a fact-checking website that rates the accuracy of claims by elected officials and others who speak up in American politics. Their team of journalists and researchers investigate claims, statements, and promises made by politicians and others, and assign ratings ranging from “True” to “Pants on Fire” based on the accuracy of those claims.',
    link: 'https://www.politifact.com/',
    },
    {
    image: 'https://pbs.twimg.com/profile_images/1313038249431109632/13OXeo3v_400x400.png',
    title: 'Full Fact',
    description: 'Full Fact is the UK’s independent fact checking charity. Their team of researchers and fact checkers provide accurate and unbiased information on claims made by politicians, media, and other sources. They aim to reduce the spread of misinformation and promote fact-based public debate.',
    link: 'https://fullfact.org/',
    },
    ];

const maincontainer={
    backgroundColor:'rgb(30 41 59 / var(--tw-bg-opacity))',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
};

export default function Resources() {
  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-5">Additional Resources</h1>
        <p className="text-center mb-10">Here are some valuable and informative resources that you can explore to further expand your knowledge and understanding of the topic at hand</p>
        <div className="grid grid-cols-2 gap-8">
          {data.map((resource, index) => (
            <div
              key={index}
              className="rounded-lg p-8"
              style={maincontainer}
            >
              {resource.image && (
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="mb-4 object-contain h-24 w-24"
                />
              )}
              <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
              <p className="mb-4 text-white">{resource.description}</p>
              <a
                href={resource.link}
                className="text-blue-300 hover:text-white transition-colors duration-300 ease-in-out"

              >
                Click Here to Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
