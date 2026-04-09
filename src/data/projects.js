export const projectsData = [
  {
    id: 1,
    title: 'Portfolio',
    image: 'src/assets/images/portfolio.png',
    liveLink: 'https://clouemac.com/',
    githubLink: 'https://github.com/CloueM/Portfolio',
    stacks: ['React', 'CSS', 'Github', 'Vite', 'Figma', 'Canva'],
    description: 'This is my personal portfolio built with React and Vite, deployed on SiteGround. It showcases my projects, skills, and experience, and works across all screen sizes. The process started from a Content Inventory and Sitemap, then moved to Wireframes and a Hi-Fi Mockup, before finally building the site itself. The overall design follows a clean, minimalist, and modern style.',
    reflection: 'For this project, I put in everything I had learned so far with React, CSS, and JavaScript. But building it was a tough lesson in managing what I could actually finish. Because I was working on this at the exact same time as the Cloudy Toy Co project, time was my biggest enemy. Like I mentioned in that project\'s reflection, the heavy overtime on our team build meant my personal portfolio kept getting pushed aside. I had to make the hard choice to cut some features I originally planned just to make sure I could finish a clean, working site on time.\n\nTo hit the deadline, I had to be smart about how I worked. I reused CSS patterns and structures from previous projects like LUMIX to save time and keep things consistent. I also looked up online resources to make things easier, like finding the code to add a custom mouse cursor for desktop users. I used AI tools to speed up parts of the process too, but I made sure not to rely on them too much because I didn\'t want my own coding skills to get rusty.\n\nJuggling this alongside a busy team project was exhausting. It forced me to actually practice the time management and boundary-setting I realized I needed during the Cloudy Toy Co build. In the end, this project taught me how to make tough choices about what to focus on, proving that finishing a smaller, polished project is always better than missing a deadline for a half-finished perfect one.',
    isFeatured: true
  },

  {
    id: 2,
    title: 'Cloudy Toy Co',
    image: 'src/assets/images/cloudytoy.png',
    liveLink: 'https://cloudytoy.bcitwebdeveloper.ca/',
    stacks: ['Wordpress', 'WooCommerce', 'Trello', 'CSS', 'Figma'],
    description: 'Cloudy Toy Co is a fully functional toy store website built by a team of four using WordPress and WooCommerce. Customers can browse and buy toys, with a real payment system, a mailing system, and BC tax rates calculated automatically. The site is fully responsive and works across all devices. The whole process started from a Content Inventory and Sitemap, then Wireframes and a Hi-Fi Mockup for one page, before building the full site.',
    reflection: 'This was a team project of four people. We used Trello to organize tasks and Discord to communicate. One thing we did differently this time was splitting the work by components rather than by pages, which helped us completely avoid the merge conflicts we dealt with on previous projects.\n\nHowever, things did not go exactly to plan. We struggled as a team to actually develop what we originally laid out in our Content Inventory, Development Plan, and wireframes. We had to pivot, find realistic technical solutions, and update our planning documents to match what we could actually build under a tight deadline. \n\nThe biggest challenge ended up being time management and avoiding burnout. I was staying inside, sleeping late, waking up early, and constantly context-switching between WordPress, React, and multiple other assignments. We were working so much overtime on this project that nobody had time for their personal portfolios. Eventually, we had to communicate as a team and intentionally take days off from Cloudy Toy Co just to work on our portfolios and get away from the screen.\n\nThis project taught me a lot about technical decision-making, like when to use a plugin versus writing custom code. But more importantly, it taught me that work-life balance is not optional. Learning how to manage my time and set boundaries to avoid burning out in my own house was a very real preview of what a remote tech job actually looks like.',
    isFeatured: true
  },

  {
    id: 3,
    title: 'School Site (Demo)',
    image: 'src/assets/images/schoolsite.png',
    liveLink: 'https://clouemac.com/school-site/',
    githubLink: 'https://github.com/CloueM/School-Site-Theme',
    stacks: ['Wordpress', 'CSS', 'PHP', 'Trello'],
    description: 'A school website for a fictional school, Rabbi Institute of Technology, built with a partner using WordPress. The project covered the basics of building a site in WordPress, including setting up custom blocks, taxonomies, plugins, and custom post types for features like student testimonials and news posts. Since this was a class assignment, we had to meet specific project requirements and hit tight deadlines.',
    reflection: 'This project was challenging but fun. It was my first time working with a partner in WordPress, and it was good practice for learning how to stay organized and on the same page as someone else. We used Trello to keep track of our tasks and Discord to communicate. My partner and I kept things professional and treated it like a real work environment, which made the whole experience feel more meaningful.\n\nThe biggest challenge was getting used to the WordPress workflow and understanding what belongs on the front end versus the back end. We also had to figure out when to use a plugin versus when to build something custom with post types, blocks, or taxonomies. Making those decisions correctly took some trial and error, but it helped me understand WordPress at a deeper level.\n\nBy the end of the project, I felt much more confident working in WordPress. I also got better at collaborating with someone and avoiding the merge conflicts that came up in earlier team projects.',
    isFeatured: false
  },

  {
    id: 4,
    title: 'LUMIX',
    image: 'src/assets/images/lumix.png',
    liveLink: 'https://clouemac.com/lumix/',
    githubLink: 'https://github.com/CloueM/Lumix',
    stacks: ['React', 'CSS', 'JavaScript', 'Adobe Photoshop', 'Github', 'Vite', 'Canva'],
    description: 'LUMIX is a movie browsing website built with React that pulls live data from the TMDB API. Users can browse films by category (Now Playing, Popular, Top Rated, and Upcoming), view trailers, check movie details, and save their favorites to watch later.',
    reflection: 'This project pushed me into new territory. Working with a third-party API for the first time was exciting, and seeing real movie data show up on the screen made everything click. I still feel like I need more time with React to get fully comfortable, but this project gave me a real starting point. I also used Reddit, Stack Overflow, and some AI tools along the way to get through the parts I was stuck on, which taught me how to look for help without just copying answers.\n\nI got a bit too ambitious with my design. My Photoshop wireframe looked great, but when it came time to build it, some parts did not translate well, especially the category navigation bar on smaller screens. I had to rethink parts of the design during development and find solutions that still felt good to use. It was a good reminder that a design needs to be thought through for all screen sizes before the build starts.\n\nThe biggest thing I took away from this project is that plans always change during development, and knowing how to adapt is just as important as planning well. I also learned to spend more time in the design phase thinking through how each part will actually work before writing any code.',
    isFeatured: true
  },

  {
    id: 5,
    title: 'APX AUTO WORKSHOP (Demo)',
    image: 'src/assets/images/apxautoworkshop.png',
    liveLink: 'https://apexautoworks.myshopify.com/',
    stacks: ['Shopify'],
    description: 'A demo e-commerce website for an auto workshop built using Shopify. Done as a solo project, it covered the basics of setting up a Shopify store, including adding products, creating collections, using apps and plugins, and setting up a payment method.',
    reflection: 'This was a fun project to work on. Shopify made it easy to get a store up and running quickly, and I enjoyed learning how the platform works from the front-end side. I covered everything a developer can do on Shopify without touching code, from setting up the store layout to managing products and collections.\n\nOne area I did not get to explore much was the Liquid templating language that Shopify uses on the back end. I only stayed on the surface level of it, but it made me curious to learn more about it in the future. I think understanding Liquid would open up a lot more possibilities for customizing Shopify stores beyond what the default settings allow.\n\nOverall, this was a solid introduction to how e-commerce platforms like Shopify work. It was a different experience compared to building a site from scratch, and it showed me how much I can accomplish with the right tools even in a short amount of time.',
    isFeatured: false
  },

  {
    id: 6,
    title: 'Mindset (Demo)',
    image: 'src/assets/images/mindset.png',
    liveLink: 'https://clouemac.com/Mindset/index.html',
    stacks: ['Wordpress', 'CSS', 'PHP'],
    description: 'Mindset is a WordPress project that served as my starting point for learning how to build and customize websites in WordPress. Throughout the project, I worked on creating and modifying blocks, setting up plugins, building custom post types, custom taxonomies, and custom fields, following along with each topic covered in class.',
    reflection: 'At the start, I was not enjoying this project much. The lessons felt like they were moving too fast, and I did not feel like I was actually learning anything. I kept trying to absorb everything all at once, which made it harder. At some point, I changed my approach and just focused on doing the work without stressing about remembering every detail right away.\n\nOnce I let go of that pressure, things started to click. I began to recognize patterns and remember how to solve problems because I had seen them before. That feeling of "I think I know how to fix this" started coming up more and more, and that is when WordPress started making sense to me.\n\nThe most valuable thing I took away from this project was to not give up when something feels too hard at first. Sometimes you just need to keep going and trust that it will make more sense the more you work with it.',
    isFeatured: false
  },

  {
    id: 7,
    title: 'Matcha Moji',
    image: 'src/assets/images/matchamoji.png',
    liveLink: 'https://clouemac.com/matchamoji/',
    githubLink: 'https://github.com/CloueM/MatchaMoji-Memory-Game.git',
    stacks: ['HTML', 'SASS', 'JavaScript'],
    description: 'Matcha Moji is a card-matching memory game built with pure JavaScript. Players choose a difficulty level (Easy, Medium, Hard, or WTH), each with a different countdown timer, then flip cards to find matching emoji pairs before time runs out. The final score is calculated using accuracy (60%), time remaining (40%), and a difficulty multiplier ranging from 1.2x on Easy up to 3x on WTH.',
    reflection: 'Building this game was one of my harder challenges. HTML and CSS were fine, but JavaScript was where I struggled, not with understanding it, but with getting the logic right and figuring out the correct way to write things. There are many ways to build a card game, and working through that pushed me to keep doing logic-heavy projects so I can get more comfortable with JavaScript over time.\n\nOne thing I did wrong was not thinking about mobile from the start. I built the full desktop layout first, then realized later that it looked off on phones. Going backwards from desktop to mobile was a lot harder than starting with mobile first would have been. That was a lesson I will not forget for future projects.\n\nAdding the scoring system after the fact, once I learned about localStorage, was a good experience. It showed me how to go back into a finished project and add something new without breaking what was already there.',
    isFeatured: false
  },

  {
    id: 8,
    title: 'Alto Pharmacy (Demo)',
    image: 'src/assets/images/altopharmacy.png',
    githubLink: 'https://github.com/CloueM/G4-Project-2',
    stacks: ['HTML', 'CSS', 'JavaScript', 'Github', 'Trello'],
    description: 'A team project where we rebuilt the front page of Alto Pharmacy\'s real website using HTML, CSS, and JavaScript. The goal was to match the look and feel of the original site as closely as possible. Tasks were split across four team members, with GitHub used for version control and Trello used to keep the work organized.',
    reflection: 'This was my first time using GitHub with a team, and merge conflicts were the hardest part. I had a bit more GitHub experience from a previous program, so I stepped up to walk my teammates through the basics, such as branching, committing, and pulling. It was stressful at times, but working through it together made the whole team more comfortable with the process.\n\nI also set up Trello to help manage our tasks. Having each person\'s work clearly laid out made a real difference. It reduced overlap and kept merge conflicts from happening as often. That experience showed me how much smoother a group project runs when everyone knows exactly what they are responsible for.',
    isFeatured: true
  },

  {
    id: 9,
    title: 'Discover Philippines (Demo)',
    image: 'src/assets/images/discoverphilippines.png',
    liveLink: 'https://clouemac.com/discoverphilippines/index.html',
    githubLink: 'https://github.com/CloueM/Discover-Philippines',
    stacks: ['HTML', 'CSS', 'JavaScript', 'Adobe Illustrator', 'Figma'],
    description: 'A multi-page country website about the Philippines built entirely with HTML and CSS. It covers four sections (Home, Locations, Culture, and Food), each filled with real content and images gathered from various sources. The layout, logo, and graphics were all made from scratch, with Figma used for wireframing and Adobe Illustrator for custom artwork.',
    reflection: 'This project required a lot of patience. Every single page was hand-coded, which meant managing many files, images, and pieces of content all at once. I started by planning the content, sketching wireframes in Figma, and designing the logo before writing any code. That upfront planning made the actual build much more manageable, even though it still took a significant amount of time.\n\nOne of the biggest lessons here was learning to reuse CSS styles properly. Instead of writing the same styles over and over across pages, I got better at organizing shared classes, which kept the code cleaner and saved time overall. I also became more aware of using the right HTML tags instead of wrapping everything in divs, which made the structure easier to read and maintain.',
    isFeatured: false
  }

];