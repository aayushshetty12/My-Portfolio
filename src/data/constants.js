import northeastern from "../images/northeastern.png"
import mumbaiUniversity from "../images/mumbaiUniversity.jpeg"
import jio from "../images/jio.png"
import sahu from "../images/sahu.jpeg"
import radiox from "../images/radiox.jpg"
import cloudApp from "../images/cloudApp.png"
import cloudInfra from "../images/cloudInfra.png"
import netflixClone from "../images/netflixClone.png"

export const Bio = {
  name: "Aayush Shetty",
  roles: [
    "Software Engineer",
    "Frontend Web Developer",
    "Full Stack Developer",
    "Cloud Enthusiast",
  ],
  description:
    //"I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  "As a seasoned Software Engineer and Full Stack Developer, I bring close to 3 years of expertise in coding and problem-solving. Proficient in both frontend and backend technologies, I specialize in crafting robust and user-friendly web applications. With a growth mindset and a passion for innovation, I am committed to making impactful contributions to every project I undertake.",
  github: "https://github.com/aayushshetty12",
  resume: "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/aayushs12/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "ReactJS",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Sass",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "NodeJS",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "ExpressJS",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      // {
      //   name: "Python",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      // },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "GraphQL",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      // {
      //   name: "Firebase",
      //   image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      // },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Amazon Web Services(AWS)",
        image:
          "https://ih1.redbubble.net/image.3917587429.0371/st,small,845x845-pad,1000x1000,f8f8f8.jpg",
      },
      {
        name: "Google Cloud Platform(GCP)",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Terraform",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEX///9cTuVAQLJZS+UrK61NPePp5/s6OrB4eMTm5vSIgOtRQeRXSORMO+NSQuRUReTu7fzZ1vg4OLDT0Pf4+P4xMa6dlu66tfNoXOeBeOp9c+rDv/RzaOhJN+Pz8v1fX7yFhcq8uPOnofDKyue0r/KVje0lJayim+9uYufNyfZ5bunl4/qbm9Nra7/f3fnCwuORiexhVOaqqtlLS7aRkc+1td7U1OxGRrUWFqk7JuJWVrlzc8OwsNyOjs3f3/BxyrB6AAAE10lEQVR4nO2c2VrbPBCGJS8YEsemJgYCTUpZS8taSuny/9z/ZVVOHcd2JC9NXFnT7z2AE55k3iceNBqNwhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKABBzPdEXTNxD3QHULHDPzh4Z7uIDpl4HPbnWzpDqNDhCHnvnulO47umBtyHgbvdUfSFakh5+6HN7pj6YbMkNvTwa7uaLpgaZik46nucDogb8h5wK91B7RxioZi5fj4SXdIG6ZkKB7V0cVYd1AbZcVQrBxDUoWcxJBzUoWc1JDboyMyhZzcMFk59nWHtiFUhiIdQxqFnNpQpCOJQq7KUKQjgUKu0pBEIVdjmKSj4Z2cWkM+MnzdqDd0N2r49yvChobh8Wbe7uZ2M6/TgoaGvvv2bv03u39xttd/lZY0NLS5PX1Y81/O6zvH8npsKFaO4fkabzQ+cTyr54acB49/3AL4HEeW1X9DbrtHf9QCOHuKLcsIw6QFsN/6H/7ObfKAmmKYtADa7TnGXzI/QwyTFkCLPcezF1mWaYZizzFpuOf4+sOxLAMNm+45Ztu5B9QwQ5GOdm0hd+NElmWuoVg5qgu5eysu+xlmmKSjupBLSjQJhhkmK4e8kJudlBPQVEOxcsgKubREo2GYFHKlLfLZiyQB9RnuT9XBNzIsN49zJVo/DNmbD+6ahvkpgPGXywo/PYaMvffDNQ2z5vFzpEpArYaMXbkV2djIUKSj+Kudb9V++gzZ7sRVOjQz5HZiKF0De2HI2N7hkLghYwehPB3pGLLx/lSWjoQMGds6kqQjKUPGrv2AuCFjp8PSo0rOkO0ORgUfeoaM3RUKOYqGjB3nCjmahiIdR9ngKVFDkY7pykHWMCvkCBuKQi5JR9KG80KOtqEo5CbfiRuKQi45oiBtOIe+oboF0M4w+qnbRMXeo6oF0Mow/vFVt4mac0ULoIVh7D3rtqhkdjGqelRrDaPLG90KtXz6WJGONYae83NHd/yVpDMm1/ZKC6CZYfzU4wScM11cM1lpATQxjKL/tEbfBDv002sms4E8HdWGnvO/Abdw7Nw1kzvpWY7K0HNu+52AKcnHtrwvfCw5y1EYxk9nWgNvzO8H0x8t7gsvWwCVhlH8WWfUbVikXuinMyYrZzkSQ885MSABU5Y22X3h0lnOqqHz7lVrzO3IfV7LayaFs5yyYfxyrzXithSeSH+Yjnzlz3KKhiaUaEVKS2BgpzMmy7OcvKHnbJuTgCnlRX55X/j6MSgbmpWAKatljD29SEe+zoMwbxhbZiVgiqxQC4N05Gv2IAq51DByTEvAFPmuKRv5unvr+uLXzuXltqn3wBT7wuXI1zEXP15f+r5HUqPc+Waz+2Om49rW5qjoXxD54pfKZmKr2f2+Ut0ubT6731/qGsLm3xeub3kHukNck2bnFiYDQxj2HxjCsP/AEIb9B4Yw7D8whGH/gaH5hqoZEzqG5Wsm9Azr7wubb1h3X5iCYfV9YRqGbGuiTEcihhX3hckYLg61KRuy8cXKyBcxQ/mwMC3D5YwJXcMkHX3ihmz2UPjiF4KG8xkT4oaFYWGihoydLgo5sobZvoquodhXHbrEDcW+KgyJG7Lx1TTUHUPXbB3pjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/FP8AteLT/xjvhx7AAAAAElFTkSuQmCC"
      },
      {
        name: "Packer",
        image:
          "data:image/png;base64,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"
      },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      {
        name: "C++",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
      {
        name: "Java",
        image:
          "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      },
      {
        name: "Python",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
      {
        name: "SQL",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
      {
        name: "bash",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
      {
        name: "Git",
        image:
          "data:image/png;base64,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"
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      // {
      //   name: "Docker",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      // },
      // {
      //   name: "Netlify",
      //   image:
      //     "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      // },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "data:image/png;base64,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"
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: northeastern,
    role: "Graduate Teaching Assistant",
    company: "Northeastern University, Boston, MA",
    date: "May 2024 - Present",
    desc: "As a Graduate Teaching Assistant, I collaborated closely with the professor to structure assignments effectively, ensuring alignment with course objectives and providing students with meaningful learning experiences. This collaboration was crucial in maintaining a productive and engaging learning atmosphere. Additionally, I actively mentored students, overseeing lectures, assignments, and assessments. I conducted personalized 1-on-1 sessions with students to monitor their progress and address any questions they had regarding assignments and concepts. Moreover, I proctored assessments and examinations to evaluate their comprehension of the course material.",
    skills: [
      "HTTP",
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript ES6",
      "REST API Design",
      "MongoDB",
      "Node.js",
      "TypeScript",
      "React",
      "Redux",
      "PWA"   
    ],
  },
  {
    id: 1,
    img: jio,
    role: "Software Development Engineer",
    company: "Jio Platforms Limited, India",
    date: "Nov 2020 - Jul 2023",
    desc: "sdf",
    skills: [
      "React",
      "Redux",
      "NodeJS",
      "ExpressJS",
      "REST API",
      "MongoDB",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript"
    ],
    //doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  },
  {
    id: 2,
    img: sahu,
    role: "Web Development Intern",
    company: "Sahu Technologies, India",
    date: "Jan 2019 - Feb 2019",
    desc: "During my ",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Material UI",
      "Bootstrap"
    ],
  },
  // {
  //   id: 2,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
  //   role: "Open Source Contributor ",
  //   company: "GirlScript Summer of Code",
  //   date: "May 2023 - Present",
  //   desc: "Contributing to different open-source projects and learn from industry experts",
  //   doc: "https://media.licdn.com/dms/image/D4D22AQGzSpgFaR4hsQ/feedshare-shrink_800/0/1684079632872?e=1687996800&v=beta&t=i0xWn_k32Oj9SxKfc6rARSbOghXD9Ge6WyEb2p2vvrc",
  // },
  // {
  //   id: 3,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
  //   role: "Android Developer",
  //   company: "DSC KIIT",
  //   date: "Nov2021 - Present",
  //   desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
  //   skills: [
  //     "Leadership",
  //     "Mobile Application Development",
  //     "Kotlin",
  //     "XML",
  //     "Figma",
  //   ],
  // },
  // {
  //   id: 4,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Rudraksha.jpeg?alt=media&token=8f83f41e-d0a1-486f-9c7f-dd4cd1d09e8d",
  //   role: "Android Developer Intern",
  //   company: "Rudraksha Welffare Foundation",
  //   date: "June 2021 - Oct 2021",
  //   desc: "As an Android Developer Intern at Rudraksha Welfare Foundation from June 2021 to October 2021, I gained valuable hands-on experience in application development. During my tenure, I contributed to the development of the application's back-end cloud functions using Firebase and implemented a front-end with the MVVM structure, which was designed using Figma. I also added a one-to-one video call feature, conceptualized new features, and optimized app performance. This internship helped me enhance my skills in Android development and gave me an opportunity to work in a collaborative team environment.",
  //   skills: [
  //     "Android",
  //     "Java",
  //     "Kotlin",
  //     "XML",
  //     "Node Js",
  //     "Cloud Firestore",
  //     "Firebase",
  //     "Figma",
  //   ],
  //   doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  // },
];

export const education = [
  {
    id: 0,
    img: northeastern,
    school: "Northeastern University, Boston, MA",
    date: "Sept 2023 - May 2025",
    // grade: "8.71 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
    degree: "Master of Science, Information Systems",
    tags: ["Web Design and User Experience Engineering", "Network Structures and Cloud Computing"]
  },
  {
    id: 1,
    img: mumbaiUniversity,
    school: "University of Mumbai, Mumbai, India",
    date: "Aug 2016 - Oct 2020",
    //grade: "88.2%",
    desc: "I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.",
    degree: "Bachelor of Engineering, Computer Engineering",
    tags: ["Data Structures and Algorithms", "Database Management Systems", "Computer Networks", "Distributed Systems"]
  },
  // {
  //   id: 2,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
  //   school: "Methodist School, Dankuni",
  //   date: "Apr 2017 - Apr 2019",
  //   grade: "92.3%",
  //   desc: "I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.",
  //   degree: "ICSC(X), Science with Computer",
  // },
];

export const projects = [
  {
    id: 0,
    title: "RadioX",
    date: "Oct 2023 - Dec 2023",
    description:
      "RadioX is a state-of-the-art web application aimed at transforming healthcare management. It is designed to enhance the patient experience, streamline administrative tasks, and provide healthcare professionals with efficient tools for patient care.",
    image: radiox,
    tags: [
      "React",
      "Redux",
      "NodeJS",
      "ExpressJS",
      "MongoDB", 
      "Amazon Web Services(AWS)",
      "Sass",
      "Jest",
      "Stripe",
      "NodeMailer"
    ],
    category: "web app",
    github: "https://github.com/aayushshetty12/RadioX",
    //webapp: "https://trackify.duckdns.org",
  },
  {
    id: 1,
    title: "Cloud Native Web App",
    date: "Jan 2024 - April 2024",
    description:
      "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
    image: cloudApp,
    tags: [
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "Packer",
      "Jest",
      "Mailgun",
      "CI/CD"
    ],
    category: "web app",
    github: "https://github.com/aayushshetty12/Cloud-webapp",
    //webapp: "https://vexa-app.netlify.app/",
  },
  {
    id: 2,
    title: "Cloud Native Web App-Terraform Infra",
    date: "Jan 2024 - April 2024",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
    image: cloudInfra,
    tags: [
      "Google Cloud Platform(GCP)",
      "Terraform", 
      "VPC", 
      "VM", 
      "Images", 
      "Load Balancer",
      "Auto Scaling", 
      "Firewalls", 
      "Cloud SQL",
      // "CI/CD",
      // "Linux"
    ],
    category: "machine learning",
    github: "https://github.com/aayushshetty12/Brain-Tumor-Detection",
    // webapp: "https://brain-tumor.netlify.app/",
    // member: [
    //   {
    //     name: "Aayush Shetty",
    //     img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //     linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //     github: "https://github.com/aayushshetty12/",
    //   },
    //   {
    //     name: "Upasana Chaudhuri",
    //     img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //     linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //     github: "https://github.com/upasana0710",
    //   },
    // ],
  },
  {
    id: 3,
    title: "Netflix Clone",
    date: "Jul 2020 - Sep 2020",
    description:
      "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
    image: netflixClone,
    tags: ["React", "Redux", "JavaScript", "CSS", "Responsive", "REST APIs"],
    github: "https://github.com/aayushshetty12/Netflix_clone",
    webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  },
  // {
  //   id: 10,
  //   title: "Job Finding App",
  //   date: "Jun 2023 - Jul 2023",
  //   description:
  //     "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
  //   tags: ["React Native", "JavaScript", "Axios"],
  //   category: "android app",
  //   github: "https://github.com/aayushshetty12/Job-finder-App",
  //   webapp: "https://github.com/aayushshetty12/Job-finder-App",
  // },
  // {
  //   id: 4,
  //   title: "Whatsapp Clone",
  //   date: "Jul 2021",
  //   description:
  //     "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
  //   image:
  //     "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
  //   tags: ["React Js", "Firebase", "Firestore", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/aayushshetty12/Whatsapp-Clone-React-Js",
  //   webapp: "https://whatsapp-clone-rishav.web.app",
  // },
  // {
  //   id: 5,
  //   title: "Todo Web App",
  //   date: "Jun 2021",
  //   description:
  //     " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
  //   image:
  //     "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
  //   tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/aayushshetty12/Todo-Web-App",
  //   webapp: "https://rishav-react-todo.netlify.app/",
  // },
  // {
  //   id: 6,
  //   title: "Breaking Bad",
  //   date: "Jun 2021",
  //   description:
  //     "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
  //   image:
  //     "https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
  //   tags: ["React Js", "API", "Axios", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/aayushshetty12/Breaking-Bad",
  //   webapp: "https://breaking-bad-webapp.netlify.app",
  // },
  // {
  //   id: 7,
  //   title: "Quiz App",
  //   date: "Dec 2020 - Jan 2021",
  //   description:
  //     "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
  //   image:
  //     "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
  //   tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
  //   category: "android app",
  //   github: "https://github.com/aayushshetty12/Quiz-Earn",
  //   webapp: "https://github.com/aayushshetty12/Quiz-Earn",
  // },
  // {
  //   id: 8,
  //   title: "Face Recognition",
  //   date: "Jan 2021",
  //   description:
  //     "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
  //   image:
  //     "https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",
  //   tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
  //   category: "machine learning",
  //   github: "https://github.com/aayushshetty12/Face-Recodnition-AI-with-Python",
  //   webapp: "https://github.com/aayushshetty12/Face-Recodnition-AI-with-Python",
  // },
];

// export const TimeLineData = [
//   { year: 2017, text: "Started my journey" },
//   { year: 2018, text: "Worked as a freelance developer" },
//   { year: 2019, text: "Founded JavaScript Mastery" },
//   { year: 2020, text: "Shared my projects with the world" },
//   { year: 2021, text: "Started my own platform" },
// ];
