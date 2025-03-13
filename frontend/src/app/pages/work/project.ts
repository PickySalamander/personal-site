/** Storage of a project that I've worked on for display */
import {RouterLink} from "@angular/router";

export interface Project {
  /** The title of the project */
  title:string;

  /** The {@link RouterLink} for the child page to display when clicking on this project */
  link:string;

  /** A short piece of preview text to show in the list of projects, usually the first sentence */
  preview:string;

  /** The lines of text to display on the page for the project's description */
  text:string[];

  /** A list of important code competencies that went into making the project */
  code:string;

  /**
   * Whether a picture or embedded video is shown to the user, if <code>undefined</code> the system will default to
   * "picture"
   */
  imageType?:"embed" | "picture"

  /** The url of the picture, or embed to load */
  image:string;
}

/** All the projects to display in the Project overview and description pages */
export const WorkProjects:Project[] = [
  {
    title: "AllaiHealth",
    link: "current",
    preview: "I’m currently working at a healthcare startup tasked with expanding and upgrading their patient medical history and documentation platform.",
    text: [
      "I’m currently working at a healthcare startup tasked with expanding and upgrading their patient medical history and documentation platform. The challenge was not only to modernize their legacy system, but to also introduce new features to streamline clinical workflows. I spearheaded the creation of a system that securely ingested patient medical histories, recorded audio from patient-doctor consultations, and leveraged cutting-edge AI to automatically generate comprehensive and accurate notes for patient charts.",
      "I also helped modernize the frontend architecture, adopting the latest frameworks to create a responsive and intuitive interface. Simultaneously, I tackled the backend, transforming it from a monolithic structure to a robust, serverless, distributed system. This architectural shift not only improved performance and scalability, but also laid the foundation for future feature enhancements."
    ],
    code: "AWS Java Spring Angular TypeScript Postgres",
    image: "/assets/allai.svg"
  },
  {
    title: "Untitled Mystery Game",
    link: "mystery-game",
    preview: "A puzzle game that mixes what I call document mystery and ancestry research.",
    text: [
      "A puzzle game that mixes what I call document mystery and ancestry research. Mackenzie, the main character, finds out that her family is plagued by a curse that causes untimely deaths. Fearful that she might be next, she holes up at her local library to dig through records, including census data and death certificates.",
      "The game is entirely Angular / web based, although the final version will likely be an Electron app. I originally started out developing the game in Unity, but I found it easier to develop the interface that I really wanted in HTML. You can take a look at the Unity code <a href='https://github.com/PickySalamander/ancestor-old' target='_blank'>here</a> or play the game <a href='https://ancestor.joe-flaherty.me' target='_blank'>here</a>."
    ],
    code: "Angular TypeScript HTML CSS",
    imageType: "embed",
    image: "https://www.youtube.com/embed/qeWr-NIqNy4?rel=0"
  },
  {
    title: "Website Alerter",
    link: "website-alerter",
    preview: "An Amazon CDK project that sets up a variety of Lambda functions that will scrape a series of websites to see if there are changes.",
    text: [
      "There are a few websites out there that I was interested in watching for updates. Originally, I looked for the usual ways of watching them for changes (social media, RSS, Google Alerts, etc.), but none of them really fit. I also looked into a variety of online tools that already existed and there didn't seem to be any that fulfilled my requirements: pinging the websites on a weekly basis, giving me a list of changes, and most importantly affordable. So I decided to make my own!",
      "The application has a backend process that runs in AWS once a week with a complete frontend that reports on the scraping success.",
      "The full source code is <a href='https://github.com/PickySalamander/website-alerter' target='_blank'>here</a>."
    ],
    code: "AWS CDK Angular TypeScript Docker Node.js",
    image: "/assets/website-alerter.png"
  },
  {
    title: "UPtick",
    link: "uptick",
    preview: "Before my current game, I worked on a software platform called UPtick for 9 years.",
    text: [
      "I worked on a software platform called UPtick for 9 years. Now called Sales Performance Predictor, it’s a sales training / performance analysis platform using simulations and games. It has two faces: one for everyday sales people and the other for their managers to gauge how their learning is progressing.",
      "The platform is similar to an <a href='https://en.wikipedia.org/wiki/Learning_management_system' target='_blank'>LMS</a>, allowing users to go through courses and play simulations of sales environments. In mock conversations users proceed through a branching dialogue, trying to make a sale to a virtual customer. Along the way they work with a virtual coach to review where they had room for improvement and learn new skills. Managers can then look at analytical platforms to see how their employees performed and provide them with additional training if needed. Originally, the platform was exclusively web-based, but over the years we added iOS, Android, and even VR applications to the stack." +
      "I worked on every part of the application from the Java servers to the Unity and Angular front-end. I spent the first year of the company building the entirety of the platform by myself from the ground up. After the initial product, I led a team developing and adding new features to UPtick. We even dabbled a bit into machine learning and prediction!",
    ],
    code: "AWS Java Spring Unity C# MySQL Angular TypeScript WebGL Android iOS Oculus",
    image: "/assets/uptick.png"
  },
  {
    title: "This Site!",
    link: "this-site",
    preview: "I built this site from scratch using Angular / Typescript and hosted it on a variety of AWS services.",
    text: [
      "I built this site from scratch using Angular / Typescript and hosted it on a variety of AWS services. It is hosted from S3, through CloudFront, and using Route53 nameservers. You can take a look at the code <a href='https://github.com/PickySalamander/personal-site' target='_blank'>here</a>!"
    ],
    code: "Angular Typescript AWS DNS",
    image: "/assets/this-site.png"
  },
  {
    title: "ScatterRadio",
    link: "scatter-radio",
    preview: "At Kuma Reality Games, I worked on a social media platform called ScatterRadio.",
    text: [
      "At Kuma Reality Games, I worked on a social media platform called ScatterRadio. It allowed users to host their own radio station and stream their thoughts and music to listeners. It kind of worked like Twitch except without video. Primarily built in HTML, PHP, and Flash, audio was streamed to the user through the web, iOS, or Android apps.",
      "ScatterRadio was used primarily overseas and the platform was translated into 5 different languages. I definitely learned the difficulties of making a right-to-left language work in Flash!",
    ],
    code: "PHP Flash/AS3 MySQL HTML JavaScript iOS Android Localization Streaming audio",
    image: "/assets/scatter-radio.png"
  },
  {
    title: "Pass It On!",
    link: "pass-it-on",
    preview: "A branded Unity game that showed consumers the benefits of buying life insurance when life events came up.",
    text: [
      "A branded Unity game that showed consumers the benefits of buying life insurance when life events came up. Made for Axa, it was vaguely reminiscent of the game of Life. Users would move through a virtual board where life events would pop up and if they had life insurance they could protect themselves from losing money.",
      "The game was built entirely in Unity. This was my first game built in Unity and was my primary way of learning the game engine. I had only a few months to learn Unity and build a full game for the web as well as an iOS app."
    ],
    code: "Unity C# iOS",
    image: "/assets/pass-it-on.png"
  },
  {
    title: "CampFu",
    link: "campfu",
    preview: "The first shipped game I ever worked on holds a special place in my heart.",
    text: [
      "The first shipped game I ever worked on holds a special place in my heart. CampFu was a cooperative multiplayer platform that hosted small Flash games. In each game users took turns trying to complete a common task like growing plants for customers or completing tile-matching games. Users could also build their own personal house, built from items bought from points earned in completing games.",
      "I was primarily responsible for the server infrastructure built in Java on early AWS EC2 servers. I learned a lot, working on what was essentially an early live services platform. My team and I had to create a server architecture, efficient socket communication, an avatar system, and the actual Flash games within 6 months. Unfortunately, we were ultimately doing it at the wrong time (during the 2008 recession) and our investor backed out."
    ],
    code: "Java Flash/AS3 AWS",
    image: "/assets/campfu.png"
  }
]
