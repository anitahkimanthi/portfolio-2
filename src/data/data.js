import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { footer } from '../components/styles'

export const data =  {
    about : {
        about : "I'm a Front-end Developer, based in Nairobi, Kenya. I believe anything you can think of is surely possible in development. Building state-of-the-art, easy to use, user-friendly websites is my first priority. I have 1+ years commercial experience working in technology companies and personal projects. When I'm not coding or designing, you will find me watching soaps or listening to music.",
        design : "I consider Design to be as important as FrontEnd Development and paying attention to design principles and element bring about an elegant and stunning website that anyone would admire. By this in mind, I aim to combine both design and coding knowledge to produce high quality end product.",
        development : "I create responsive websites that allow the user to experience your website in the best and most appropriate way suited to the device they are using. Not only once, twice or thrice that the user will visit your website but always! Getting a quality website is not an expense but rather an investment!",
     },

    footer : {
        description : "If you have a project that you want to get started, think you need my help with something, a business seeking an efficient web developer! I'm here for you. Email or send me a direct message on my social media",
        social : [
            {
                title : "facebook",
                icon : <FacebookIcon/>,
                url : "https://www.facebook.com/anitah.kimanzi.9"
            },
            {
                title : "linkedIn",
                icon : <LinkedInIcon/>,
                url : "https://www.linkedin.com/in/anitahkimanzi/"
            },
            {
                title : "Email address",
                icon : <EmailIcon/>,
                url : "mailto:anitakimanzi@gmail.com? subject=subject text"
            }
        ]


    },

    header : [
        {
            text : "Home",
            url : "/"
        },
        {
            text : "About",
            url : "/about"
        },
        {
            text : "skills",
            url : "/skills"
        },
        {
            text : "Projects",
            url : "/portfolio"
        }
    
    ],

    skills : {
        frontend : [
            {
                heading : "HTML 5 & CSS 3",
                tag : "80"
            },
            {
                heading : "JavaScript/Reactjs",
                tag : "90"
            },
            {
                heading : "JavaScript/Vue",
                tag : "30"
            },
            {
                heading : "jQuery",
                tag : "25"
            },
            {
                heading : "Bootstrap/Materialize css/Material UI",
                tag : "85"
            }
        ],
        design : [
            {
                heading : "Adobe InDesign",
                tag : "80"
            },
            {
                heading : "Adobe XD",
                tag : "90"
            },
            {
                heading : "Adobe Illustrator",
                tag : "30%"
            },
            {
                heading : "Figma",
                tag : "85"
            },
            {
                heading : "Canva",
                tag : "70"
            }
        ]
    }
}

 