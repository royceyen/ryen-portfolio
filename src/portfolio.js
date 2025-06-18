const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://royceyen.github.io/ryen-portfolio/',
  title: 'New Title.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yi Hsiang (Royce) Yen',
  description:
    'Welcome to my portfolio! Here, you can find data analytics projects and success cases of mine. Showcasing various modeling techniques across industries, highlighting how data-driven insights inform decision-making. Feel free connect with me!',
  resume: 'https://docs.google.com/document/d/1nThBRx3nC2AIR8frV7aq7nf1nmHhIFO9/edit?usp=sharing&ouid=110751678350728265420&rtpof=true&sd=true',
  social: {
    linkedin: 'https://www.linkedin.com/in/royceyen/',
    github: 'https://github.com/royceyen',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yen.royce@gmail.com',
}

export { header, about, projects, skills, contact }
