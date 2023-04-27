
let data = [{
    image: 'https://www.snopes.com/design/images/logo-main.png',
    title: 'Snopes',
    description: 'The oldest and largest fact-checking site online',
    link: 'https://www.snopes.com/'
    },
    {
    image: '',
    title: 'FactCheck.org',
    description: 'A nonpartisan, nonprofit “consumer advocate” for voters that aims to reduce the level of deception and confusion in U.S. politics',
    link: 'https://www.factcheck.org/'
    },
    {
    image: '',
    title: 'PolitiFact',
    description: 'A fact-checking website that rates the accuracy of claims by elected officials and others who speak up in American politics',
    link: 'https://www.politifact.com/'
    },
    {
    image: '',
    title: 'Full Fact',
    description: 'The UK’s independent fact checking charity',
    link: 'https://fullfact.org/'
    }
]

const mainContainer = {
    backgroundColor:'rgb(30 41 59 / var(--tw-bg-opacity))',
    borderRadius:'15px',
    padding:'20px',
};

const ImageContainer = {
    margin:"0px", 
    backgroundColor:"red",   
};

export default function Resources() {
  return (
    <div>
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-5">Additional Resources</h1>
      <p className="text-center mb-10">Here Are Some Additional Resources You Can Access For</p>
      <div className="grid grid-cols-2 gap-8">
        {data.map((resource, index) => (
          <div key={index} style = {mainContainer}>
            <img style={{ display:"flex",margin:"0px",justifySelf:"center"}} src={resource.image}></img>
            <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
            <p className="mb-4">{resource.description}</p>
            <a href={resource.link} className="text-blue-600 hover:text-blue-800">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}