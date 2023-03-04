interface Project {
  title:string;
  link:string;
  preview:string;
  text:string[];
  code:string;
}

export const WorkProjects:Project[] = [
  {
    title: "Untitled Mystery Game",
    link: "current",
    preview: "My current obsession, I'm creating a puzzle game that mixes what I call document mystery and ancestry research.",
    text: [
      "My current obsession, I'm creating a puzzle game that mixes what I call document mystery and ancestry research. Mackenzie, the main character, finds out that her family is plagued by a curse that causes untimely deaths. Fearful that she might be next, she holds up at her local library to dig through records.",
      "The game is entirely Angular / web based, although the final version will likely be an Electron app. I originally started out developing the game in Unity, but I found it easier to develop the interface that I really wanted in HTML."
    ],
    code: "Angular TypeScript HTML CSS"
  },
  {
    title: "UPtick",
    link: "uptick",
    preview: "Before my current game, I worked on a software platform called UPtick for 9 years.",
    text: [
      "Before my current game, I worked on a software platform called UPtick for 9 years. UPtick, now called Sales Performance Predictor, is a sales training / performance analysis platform using simulations and games. It has two faces: one for everyday sales people and two for their manager's to gauge how their learning is doing.",
      "The platform is entirely web based, similar to an <a href='https://en.wikipedia.org/wiki/Learning_management_system' target='_blank'>LMS</a>, it allows users to go through courses and play through simulations of real sales environments where they learn different competencies. Managers can then look at various analytical platforms to see how they perform. Originally, the platform was all web-based, but over the years we added both iOS, Android, and even VR applications to the stack.",
      "I worked on every part of the application from the Java servers to the Unity and Angular front-end. Spending the first year of the company building the entirety of the platform by myself from the ground up. Afterward, the initial product, I lead a team developing and adding new features to UPtick. Even dabbling a bit into machine learning and prediction!"
    ],
    code: "AWS Java Spring Unity C# MySQL Angular TypeScript WebGL Android iOS Oculus"
  },
  {
    title: "ScatterRadio",
    link: "scatter-radio",
    preview: "At the now defunct Kuma Reality Games I actually worked on a social media platform called ScatterRadio.",
    text: [
      "At the now defunct Kuma Reality Games I actually worked on a social media platform called ScatterRadio. It allowed users to host their own radio station and stream their thoughts and music to listeners. It kind of worked like Twitch except without video. Primarily built in HTML, PHP, and Flash, audio was streamed to the user through the web, iOS, or Android app.",
      "ScatterRadio was actually used more overseas than in the United States and the platform was translated into 5 different languages. I definitely learned the difficulties of making a right-to-left language work in Flash!",
    ],
    code: "PHP Flash/AS3 MySQL HTML JavaScript iOS Android Localization Streaming audio"
  },
  {
    title: "Pass It On!",
    link: "pass-it-on",
    preview: "A branded Unity game that showed consumers the benefits of buying life insurance when life events came up.",
    text: [
      "A branded Unity game that showed consumers the benefits of buying life insurance when life events came up. Made for Axa, it was vaguely reminiscent of the game of Life. Users would move through a virtual board where life events would pop up and if they had life insurance they could protect themselves from losing money.",
      "The game was built entirely in Unity. This was my first game built in Unity and was my primary way of learning the game engine. I had only a few months to learn Unity and build a full game for the web as well as iOS and Android apps."
    ],
    code: "Unity C# iOS"
  },
  {
    title: "CampFu",
    link: "campfu",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ],
    code: "Java Flash/AS3 Java"
  }
]
