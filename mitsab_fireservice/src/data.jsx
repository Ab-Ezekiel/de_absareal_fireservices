import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon, FaTools } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { RiWaterFlashFill } from "react-icons/ri";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { MdLandscape } from "react-icons/md";

import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8,building_9,building_10,rusal_logo, nepn_logo, frontier_logo, oando_logo, alscon_logo,
        blog_1,blog_2,blog_3, borehole_image, home_image2, infras, infras2, soak_away_pit2, building_res,
        fireservice,
        fireservice1,
        fireservice2,
        fireservice6,
        fireservice5,
        fireservice4,
        fireservice3} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Minor Civil Maintainance",
    icon:<FaDrawPolygon/>,
    description:`Mitsab Resources specializes in providing tailored solutions for various 
        infrastructure maintenance needs, including road repairs and sidewalk maintenanc

    `,
  },
 
  {
    name:"Borehole Drilling Services",
    icon:<RiWaterFlashFill/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
        as land clearing, excavation, grading, and utility installation to ensure the site is ready 
        for building.`,
  },
  {
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name:"Earthwork Landscaping",
    icon:<MdLandscape/>,
    description:`This involves grading, excavation, and designing functional yet 
        aesthetically pleasing outdoor spaces. It balances practical land development with artistic 
        landscaping, creating environments that harmonize with surrounding architecture and nature.`,
  },
  {
    name: "Welding & Fabrication Services",
    icon: <FaTools />,
    description: `We provide expert welding and metal fabrication services for structural steel, 
    piping, supports, and other custom metal works, ensuring durability, precision, and adherence to safety standards.`,
  },
]

export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"",
    image:fireservice,
    description:``,
  },
  {
     title:"",
    image:fireservice2,
    description:``,
  },
  {
    title:"",
    image:fireservice3,
    description:``,
  },
  {
    title:"",
    image:fireservice4,
    description:``,
  },
  {
    title:"",
    image:fireservice5,
    description:``,
  },
  {
   title:"",
    image:fireservice6,
    description:``,
  },
];


export const testimonial = [
  {
    image:oando_logo,
    name:'OANDO',
    position: 'operations Manager',
      review:`We are thoroughly impressed with the professionalism, technical expertise, and commitment 
      demonstrated by MIREGL throughout the construction of our facility. From project planning 
      to execution, their team maintained clear communication, met every milestone, and delivered top-tier 
      quality that exceeded our expectations. The structure was completed on schedule and within budget, and we 
      couldn’t be more satisfied with the outcome. We highly recommend MIREGL for any engineering 
      construction projects where quality and reliability are a priority.`
  },
  {
    image:frontier_logo,
    name:'Frontier',
    position: 'Facilities Manager',
    review:`Working with MIREGL was a seamless experience from start to finish. Their team brought a 
    level of precision and problem-solving that made a significant difference in the success of our infrastructure upgrade. 
    They handled every challenge with professionalism and delivered a structure that is not only durable but also aligns 
    perfectly with our operational needs. We look forward to future collaborations.`
  },
  {
    image:alscon_logo,
    name:'ALSCON',
    position: 'Operations Manager',
    review:`The construction team at Mitsab Resources Global exceeded our expectations in every way. They delivered high-quality 
    results, kept us updated throughout the project, and were proactive in resolving potential issues before they became problems. 
    Their attention to detail and safety standards were commendable. Highly recommended for any serious engineering project.`
  },
  {
    image:rusal_logo,
    name:'RUSAL',
    position: 'Manager RUSAL',
    review:`We are thoroughly impressed with the professionalism, technical expertise, and commitment demonstrated 
    by MIREGL throughout the construction of our facility. From project planning to execution, their team 
    maintained clear communication, met every milestone, and delivered top-tier quality that exceeded our expectations. 
    The structure was completed on schedule and within budget, and we couldn’t be more satisfied with the outcome.
    We highly recommend MIREGL for any engineering construction projects where quality and reliability are a priority.`
  },
  {
    image:nepn_logo,
    name:'NEPN',
    position: 'HR/Admin NEPN',
    review:`The construction team at Mitsab Resources Global exceeded our expectations in every way. They delivered high-quality 
    results, kept us updated throughout the project, and were proactive in resolving potential issues before they became problems. 
    Their attention to detail and safety standards were commendable. Highly recommended for any serious engineering project.`
  },
  

];

export const blogs = [
  {
      title:"Sustainable Fire Safety: Protecting Lives and Property for the Future",
      image:fireservice6,
      category:"Safety and Sustainabilty",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"Cutting-Edge Technologies Revolutionizing Fire Protection Systems",
      image:fireservice5,
      category:"Technology",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"The Importance of Precision and Readiness in Fire Services",
      image: fireservice4,
      category:"Precision",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
  
];



export const contacts = [
 {
    name:"Email",
    value1:"mit-sabresources@outlook.com",
    value2:"info@mitsabresourcesglobal.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value1:"+2348023851800",
    value2:"+2347067912527",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value1:"REGISTERED OFFICE:89 University Road,Use Offot, Nwaniba Road, Uyo,Akwa Ibom State,Nigeria",
    value2:"OPERATIONAL OFFICE: 35 Terminal Jetty Road, Inua Eyet Ikot, Ibeno L.G.A, Akwa Ibom State,Nigeria",
    icon:<IoLocationOutline/>,
  },
]



export const footer = [
    {
      name:"Explore",
      routes:[
        { name: "Privacy Policy", id: "privacy" },
        { name: "Terms and Conditions", id: "terms" },
        { name: "Cookie Policy", id: "cookies" },
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


