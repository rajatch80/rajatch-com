export const projects = [
  {
    title: "ProfitJS",
    description:
      "A JavaScript-based container that executes in browsers to enable multiple widgets (chat buttons, exit-intent popup, social proof, announcement bar, discount popup) to provide a better user experience for e-commerce site visitors.",
    image: "/images/chat-widget.png",
    tags: ["Vanilla JavaScript", "CSS", "HTML"],
    source: "https://rajatch.com",
    visit: "https://rajatch.com",
    id: 0,
    company: "Konigle",
  },
  {
    title: "Lighthouse",
    description:
      "Lighthouse is a python based web scraper built using scrapy, Airflow, and selenium. This is infra is completely independent from the business logic. It can be reused to setup a scraper from scratch and just update the logic and websites to fetch the data from.",
    image: "/images/lighthouse.jpg",
    tags: ["Python", "Airflow", "Scrapy", "Selenium"],
    source: null,
    visit: null,
    id: 1,
    company: "Konigle",
  },
  {
    title: "DaaS",
    description:
      "DaaS provides data as a service using set of APIs on top of the life sciences data ocean which is served using ElasticSearch. It provides the functionality to filter the data by various features.",
    image: "/images/daas.png",
    tags: ["Python", "Node.js", "ElasticSearch"],
    source:
      "https://www.innoplexus.com/life-science-ai-products-solutions/daas/",
    visit: null,
    id: 2,
    company: "Innoplexus",
  },
  {
    title: "CDP",
    description:
      "Customer Data Platform pulls data from multiple sources, cleaned and combined to create a single customer profile. Build Data ingestion layer, Data Processing and Storage Layer, and Data Consumption Layer.",
    image: "/images/cdp.png",
    tags: ["Node.js", "ElasticSearch", "Kafka"],
    source: null,
    visit: null,
    id: 3,
    company: "Aozora",
  },
];

export const TimeLineData = [
  { year: 2016, text: "Graduated from IIT Kanpur and joined Innoplexus" },
  {
    year: 2019,
    text: "Left Innoplexus and joined Aozora (later renamed as Martix, own venture)",
  },
  { year: 2019, text: "Startup didn't run, joined Instart" },
  {
    year: 2020,
    text: "Instart got acquired, moved to Singapore, joined Konigle ",
  },
  { year: 2021, text: "Left Konigle. Joined Koo India. Survived COVID-19" },
];

export const HeroSummary = `
Specializing in backend development and data engineering, 
I've gathered over 6 years of experience in Software Development, especially in a startup environment. 
I have built more than 10 projects from scratch and handled full backend development, designed APIs and services, 
set up Database Clusters, and managed DevOps.

I have helped set up DaaS (Data as a Service) in my first company 
which reduced the server costs of the organization by 40% and 
gave the world access to APIs that provided all the important medical data 
including CTs, Publications, Congresses, etc. 
Recently, I developed a browser-based JS plugin to dynamically add multiple widgets to websites for e-commerce sellers.

In my current role, I am handling a few microservices viz. analytics and file upload service which deal with very high scale.
`;

export const ResumeLink =
  "https://drive.google.com/file/d/1KzLh12bH0oDxxhjxFVjfgbpTXJDP5kk9/view?usp=share_link";

export const FunSegmentCards = [
  {
    title: "Bollywood Movie Guesser",
    description:
      "A movie guesser game where the description of the movie is given and the number of characters in the name will be given. You will have to guess the exact name and you only have 5 wrong characters input",
    id: 0,
    source: "/fun/bolly-guessr",
  },
  {
    title: "Tic-Tac-Toe",
    description: "Play classic tic-tac-toe game with Computer",
    id: 1,
    source: "",
  },
];

export const games = [
  {
    title: "Tic-Tac-Toe",
    description:
      "Classic tic-tac-toe. Written using vanilla JS.",
    visit: "/tic-tac-toe/index.html",
    id: 0
  },
  {
    title: "Wordle",
    description:
      "Guess the word. Written using vanilla JS.",
    visit: "/wordle/index.html",
    id: 1
  }
]
