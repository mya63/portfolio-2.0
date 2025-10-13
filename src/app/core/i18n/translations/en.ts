export const en = {
  nav: { about: 'About', skills: 'Skills', portfolio: 'Portfolio', contact: 'Contact' },

  hero: {
    iam: 'I am',
    role: 'FRONTEND DEVELOPER',
    talk: "Let's talk!"
  },

  about: {
    title: 'About me',
    intro: 'Write some information about yourself that is IT related. Why are you passionate about coding? What is your source of inspiration for improving your programming skills?',
    point1: 'Where are you located? Are you open to different ways of working, such as working remotely or even relocating?',
    point2: 'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?',
    point3: 'A brief description of your problem-solving approach. Do you learn from each challenge as you search for the most efficient or elegant solution?'
  },

  skills: {
    title: 'My skills',
    lead: 'Show that you have used a variety of front-end technologies in your projects.',
    cta: { ask: 'Looking for ', more: 'another skill?' },
    desc: 'Reveal enthusiasm for learning new technologies and frameworks.',
    interestTitle: 'Continually\nlearning',
    interestPopup: 'I have a special interest in learning',
    interest: { react: 'React', vue: 'Vue.js' }
  },

  portfolio: {
    title: 'Portfolio',
    lead: 'Explore a selection of my work here – Interact with projects to see my skills in action.',
    live: 'Live',
    github: 'GitHub',
    items: {
      join: {
        name: 'Join',
        stack: 'Angular | TypeScript | HTML | CSS | Firebase',
        desc: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
      },
      pollo: {
        name: 'EL POLLO LOCO',
        stack: 'JavaScript | HTML | CSS',
        desc: 'A simple Jump-and-Run game based on an object-oriented approach. Collect coins and bottles to defeat the final boss.'
      },
      pokedex: {
        name: 'Pokédex',
        stack: 'JavaScript | HTML | CSS | API',
        desc: 'Based on the PokéAPI – a simple library that provides and catalogues Pokémon information.'
      },
      dabubble: {
        name: 'DA Bubble',
        stack: 'Angular | TypeScript | Firebase',
        desc: 'This app is a Slack clone for group communication.'
      }
    }
  },

  refs: {
    card1: {
      text: 'Yunus was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      author: 'Tony Stark',
      role: 'CEO, Stark Industries – Mentor & Team Lead'
    },
    card2: {
      text: 'Yunus consistently demonstrated exceptional problem-solving skills and a keen eye for detail. His contributions significantly enhanced our project outcomes.',
      author: 'Steve Jobs',
      role: 'Co-founder, Apple Inc. – Project Manager'

    },
  card3: {
      text: 'Muhammed Yunus is a highly motivated and dedicated professional. His ability to adapt to new challenges and learn quickly makes him a valuable asset to any team.',
  author: 'Sundai Pichai',
  role: 'CEO, Google LLC – Senior Developer'
    }
  },

contact: {
  title: 'Contact',
  q: 'Got a problem to solve?',
  lead1: 'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.',
  lead2: 'Need a Frontend developer? <strong>Contact me!</strong>',
  name: 'Your name',
  email: 'Your email',
  message: 'Your message',
  // mit Link – wenn du RouterLink nutzen willst, kannst du <a class="pp-link" href="/privacy"> so lassen
  privacyHtml: `I've read the <a class="pp-link" href="/privacy" rel="noopener">privacy policy</a> and agree to the processing of my data as outlined.`,
  send: 'Send message :)',
  err: {
    name: 'Your name is required',
    email: 'Your email is required',
    message: 'Your message is empty'
  }
},

// en.ts
legal: {
  title: 'Legal Notice',
  backToTop: 'Back to top',
  imprint: { body: 'Muhammed Yunus Amini<br>63263 Neu-Isenburg<br>muhammedyunusamini4@gmail.com' },
  accept: { body: 'By accessing and using Portfolio (Product) ...' },
  scope: { body: 'Portfolio has been developed as part of a student group project ...' },
  rights: { body: 'Aside from the design owned by Developer Akademie GmbH ...' },
  use: { body: 'Portfolio is intended to be used for lawful purposes only ...' },
  disclaimer: { body: 'Portfolio is provided "as is" without warranty ...' },
  indemnity: { body: 'You agree to indemnify, defend and hold harmless us ...' }
}
,
// en.ts
privacy: {
  title: 'Privacy Policy',
  backToTop: 'Back to top',
  section1: { title: 'Controller', body: '…your text…' },
  section2: { title: 'Data we process', body: '…your text…' }
}
,
  misc: { scrolldown: 'Scroll down' }
};
