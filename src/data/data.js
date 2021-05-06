import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

// images
import club from '../static/images/projects/club.jpg'
import asembo from '../static/images/projects/asembo.jpg'
import god from '../static/images/projects/god.jpg'
import music from '../static/images/projects/music.jpg'
import scraj from '../static/images/projects/scraj.jpg'
import wine from '../static/images/projects/wine.jpg'

export const data = {
  about: {
    about:
      "I'm a Front-end Developer, based in Nairobi, Kenya. I believe anything you can think of is surely possible in development. Building state-of-the-art, easy to use, user-friendly websites is my first priority. I have 3 years commercial experience working in technology companies and personal projects. When I'm not coding or designing, you will find me listening to good music or watching.",
    design:
      'I pay attention to design principles and elements to bring about an elegant and stunning website that anyone would admire. I aim to combine both design and coding knowledge to produce high quality end product.',
    development:
      'I create responsive websites that allow the user to experience your website in the best and most appropriate way suited to the device they are using. Getting a quality website is not an expense but rather an investment!'
  },

  footer: {
    description:
      "If you have a project that you want to get started, think you need my help with something, a business seeking an efficient web developer! I'm here for you.",
    social: [
      {
        title: 'facebook',
        icon: <FacebookIcon />,
        url: 'https://www.facebook.com/anitah.kimanzi.9'
      },
      {
        title: 'linkedIn',
        icon: <LinkedInIcon />,
        url: 'https://www.linkedin.com/in/anitahkimanzi/'
      },
      {
        title: 'Twitter',
        icon: <TwitterIcon />,
        url: 'https://twitter.com/annykimaa'
      }
    ]
  },

  header: [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'About',
      url: '/#about'
    },
    {
      text: 'skills',
      url: '/#skills'
    },
    {
      text: 'Projects',
      url: '/#portfolio'
    }
  ],

  skills: {
    frontend: [
      {
        heading: 'HTML 5 & CSS 3',
        tag: '80'
      },
      {
        heading: 'JavaScript / Reactjs',
        tag: '90'
      },
      {
        heading: 'JavaScript / Vue',
        tag: '30'
      },
      {
        heading: 'jQuery',
        tag: '25'
      },
      {
        heading: 'Bootstrap / Materialize css / Material UI',
        tag: '85'
      }
    ],
    design: [
      {
        heading: 'Adobe InDesign',
        tag: '70'
      },
      {
        heading: 'Adobe XD',
        tag: '40'
      },
      {
        heading: 'Adobe Illustrator',
        tag: '80'
      },
      {
        heading: 'Figma',
        tag: '80'
      },
      {
        heading: 'Canva',
        tag: '60'
      }
    ]
  },
  projects: [
    {
      image: club,
      title: 'Club',
      link: 'https://openinstitute-university-club.netlify.app/home',
      description: 'Dummy club website'
    },
    {
      image: scraj,
      title: 'Scrajhomes Limited',
      link: 'https://scrajhomes.com/',
      description: 'Property listing website'
    },
    {
      image: wine,
      title: 'Wine shop',
      link: 'https://shopwine.netlify.app',
      description: 'Dummy wine online shop'
    },
    {
      image: god,
      title: "God's Palace International",
      link: 'https://godspalaceinternational.netlify.app/',
      description: 'ChUrch'
    },
    {
      image: music,
      title: 'Music Finder',
      link: 'https://search-music.netlify.app/',
      description: 'Find any song by name or artist'
    },
    {
      image: asembo,
      title: 'Asembo Softwares',
      link: 'https://asembosoftwares.co.ke/',
      description: 'Software development company'
    }
  ]
}
