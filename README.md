# Dodgem
## Code Institute Hackathon 9th Aug 2021: Team 11

![Sample of DODGEM on desktop](/assets/img/dodgem-screen.png)

DODGEM is a JavaScript-based scrolling game created by Team DODGEM. Team DODGEM created the game in response to Code Institute's August 2021 Hackathon challenge - retro games.

Team DODGEM is comprised of four software development students from the Code Institute program. The team members were: Bradders, Steven Forrest_5P, Athiei Ajuong, and Aws Gheni.

This web application makes use of HTML5, CSS3, and JavaScript to create a game that runs in the browser window. The game is intended to be played on desktop devices.

View the live project here: [DODGEM]()

## UX

### Site Owner's Goal:
DODGEM intends for this website to be accessible to people wanting to to relax and play a simple game. The game should promote feelings of fun, excitement, and competition. It also promotes a sense of nostalgia for a bygone gaming era.

### Ideal demographics:
The target demographics of this website will include:

* People that grew up on retro games
* Young people
* Gamers
* Procrastinators

### User Personas

New user/Potential new user:

1. I want to be able to open a game on my laptop or desktop.
2. I want to navigate the website easily.
3. I want to find relevant information about the game.
4. I want to play a game without expending resources.

### Design considerations

To develop and create this retro game, the developers got together on in a Slack channel. The developers discussed design ideas, game themes, and game logic. They also discussed the frameworks to use to build DODGEM. The developers settled on JavaScript. Developers chose JavaScript as it is suitable for front-end web applications.

### Strategy of website

1. User type:
    * Gamers
    * Gen X'ers
    * Young people
    * Procrastinators
    * Students

2. Demographics:
    * People under-55

3. Psychographics:
    * Gamers
    * Interests in retro media/games

### Scope of website
A website scope was determined in order to deliver on the goals targeted in the website's strategy. The idea was to align the website's features with the intended purposes of the website. The features of the website fall into two categories, namely content and functionality.

#### Content requirements:
A user visiting the DODGEM website will look for:
* Game information
* Game rules
* A scoreboard or leaderboard to see the top scores on the game
* A play/start button to enter the game

#### Functionality requirements:
A user visiting the DODGEM website will be able to:
* Navigate the website effortlessly
* Browse the website on laptop and larger devices
* Find information about the game
* Play using a keyboard

### Structure of website
The information hierarchy of this website was outlined with considerations taken from the strategy and scope of the site. A sample sitemap was created in Adobe Photoshop and will be used to inform the content and functionality requirements of the website.

Feel free to check the sitemap below: 

![website-sitemap](/assets/img/sitemap.png)

### Skeleton of website
The developers created a wireframe mockup for a landing page in a [Figma Workspace](https://www.figma.com/file/XhW0BQs2L9bXrjrqTYd0xr/Untitled?node-id=8%3A3). The intention was to design a sample website that kept user experience in mind while reflecting the strategy, scope, and structure of the website.

One developer created a sprite in 8-bit style. This sprite was modelled after a sprite found on google images. Both versions can be seen below.

![sprite landing character](/assets/img/large_random_sprite.png)

![sprite landing character 2](/assets/img/large_random_sprite_right.png)

One developer created a sample wireframe to illustrate the game's concept. This wireframe can be seen below.

![game-wireframe](/assets/img/DODGEM-game-wireframe.png)

## Website Features

### Home page

The homepage reflects a landing for a retro game. 

The landing page features a series of simple animations and buttons.

1. The title animates in, along with a character at the bottom of the page.
2. The nav buttons slide in.
3. The second character slides in from the right, as a play button animates in on top.

Each nav button on the home page is linked to a modal. These modals cover the screen and have small dialog boxes.

1. About button opens modal with game information hard-coded in landing.js file.
2. Rules button opens modal with rules information hard-coded in landing.js file.
3. Leaderboard button opens modal with scoreboard information hard-coded in landing.js file.

### Game page
The game page is linked to the play button on the home page. 
The game page features a canvas where the game is to be played. 
This canvas is positioned in the middle of the screen. 
It features a sprite running and trying to avoid the game terrain. 

* Upon character crash, the game stops and creates a modal to signal a loss.
* As the character runs, the game improves the user's score.
* A timer enables the user to see how long they have run.
* The timer also indicates the user's score.

## Features to Add
* The website would be more functional with a leaderboard that can change dynamically and remain on the home page. This requires some back-end work. 
 
## Technologies Used
* HTML5 - The language used to create the skeleton of the website. Forms, buttons, sections, divisions, etc.

* CSS3 - The language used to style the HTML5 pages and elements. 

* [Nes.css library](https://nostalgic-css.github.io/NES.css/) - This css library helped the developers create html elements with retro styles.

* [Bootsrap](https://getbootstrap.com/) - The developers used the bootstrap framework to structure the website and game layouts more easily. This was beneficial when adding structure to the site.

* [Figma](https://www.figma.com/file/XhW0BQs2L9bXrjrqTYd0xr/Untitled?node-id=8%3A3) - Here is a link to a Figma workspace. This was used to draft and realise the ideas behind the design of the landing page. 

* [Google Fonts](https://fonts.google.com/) - Is where the developers selected the "Press Start 2P" font after perusing Googles font library for something suitable.

* [W3C Schools](https://w3schools.com) - This website is very informative. The developer would often consult W3Schools and constantly revisit various tags of code.

* [Stack Overflow](https://stackoverflow.com) - This website is informative. The developers would consult this website to find solutions to similar issues faced.

## Testing
The developers tested the website in Google Chrome and tested it for the functions it was intended to achieve.

##### Content Requirements
The developers believe this website can fulfill its intended content requirements.

A user visiting the DODGEM website can find:
* Game information
* Game rules
* A scoreboard or leaderboard to see the top scores on the game
* A play/start button to enter the game

##### Functionality Requirements

The developers believe this website can fulfill its intended functionality requirements.

A user visiting the DODGEM website can:
* Navigate the website effortlessly
* Browse the website on laptop and larger devices
* Find information about the game
* Play using a keyboard

### Testing Browsers
The developer manually tested the website across 1 browser, namely:

* Google Chrome

### Responsive Design

This website was designed for laptops and desktop devices. As explained by the Retro Game Hackathon organisers, the application was developed with desktop devices in mind.

* Using DevTools, the developers checked the game's usage for large devices.

### Issues Discovered
Developers found issues with animations and character positioning on the landing page. These were addressed by ensuring the characters were placed further off screen and the overflow was hidden.

Developers wanted to have a dynamic leaderboard. This issue could be addressed using back-end tools like flask. 

Adding sound was a challenge. At times, the sound would lag and play at inappropriate times. In JavaScript, developers resolved this issue by setting appropriate triggers and event listeners.

Branches were complicated to use. Developers learned to use branches to work on projects in an agile style. The developers created their own branches and made pull requests to work on their own tasks. Working in branches enabled the developers to work without complicating the same code.

## Deployment
This project was created in GitPod's development environment. 

To make this project viewable to the public, the developer followed these steps:

1. Enter [Github Repository](https://github.com/AthAjuong/milestone-project-1)
2. Go to settings tab
3. Go to pages section
4. Choose a master branch for the project, "main"

This deployed the TightCore Gym website that is now viewable [here](https://athajuong.github.io/milestone-project-1/index.html).

### Cloning the Project

If you would like to work on this project further you can clone it to your local machine using the following steps:

1. Scroll to the top of my repository and click on the "clone or download button"
2. Decide whether you want to clone the project using HTTPS or an SSH key and do the following:
3. HTTPS: click on the checklist icon to the right of the URL
4. SSH key: first click on 'Use SSH' then click on the same icon as above
5. Open the 'Terminal'
6. Change the current working directory to the location where you want the cloned directory
7. Type 'git clone', and then paste the URL you copied earlier.
8. Press 'Enter' to create your local clone.

Feel free to read about [Cloning a Repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) if there is any confustion.

# Dodgem
## Code Institute Hackathon 9th Aug 2021: Team 11

![Sample of DODGEM on desktop](assets/readme-files/dodgem-screen.png)

DODGEM is a JavaScript-based scrolling game created by Team DODGEM. Team DODGEM created the game in response to Code Institute's August 2021 Hackathon challenge - retro games.

Team DODGEM is comprised of four software development students from the Code Institute program. The team members were: Bradders, Steven Forrest_5P, Athiei Ajuong, and Aws Gheni.

This web application makes use of HTML5, CSS3, and JavaScript to create a game that runs in the browser window. The game is intended to be played on desktop devices.

View the live project here: [DODGEM]()

## UX

### Site Owner's Goal:
DODGEM intends for this website to be accessible to people wanting to to relax and play a simple game. The game should promote feelings of fun, excitement, and competition. It also promotes a sense of nostalgia for a bygone gaming era.

### Ideal demographics:
The target demographics of this website will include:

* People that grew up on retro games
* Young people
* Gamers
* Procrastinators

### User Personas

New user/Potential new user:

1. I want to be able to open a game on my laptop or desktop.
2. I want to navigate the website easily.
3. I want to find relevant information about the game.
4. I want to play a game without expending resources.

### Design considerations

To develop and create this retro game, the developers got together on in a Slack channel. The developers discussed design ideas, game themes, and game logic. They also discussed the frameworks to use to build DODGEM. The developers settled on JavaScript. Developers chose JavaScript as it is suitable for front-end web applications.

### Strategy of website

1. User type:
    * Gamers
    * Gen X'ers
    * Young people
    * Procrastinators
    * Students

2. Demographics:
    * People under-55

3. Psychographics:
    * Gamers
    * Interests in retro media/games

### Scope of website
A website scope was determined in order to deliver on the goals targeted in the website's strategy. The idea was to align the website's features with the intended purposes of the website. The features of the website fall into two categories, namely content and functionality.

#### Content requirements:
A user visiting the DODGEM website will look for:
* Game information
* Game rules
* A scoreboard or leaderboard to see the top scores on the game
* A play/start button to enter the game

#### Functionality requirements:
A user visiting the DODGEM website will be able to:
* Navigate the website effortlessly
* Browse the website on laptop and larger devices
* Find information about the game
* Play using a keyboard

### Structure of website
The information hierarchy of this website was outlined with considerations taken from the strategy and scope of the site. A sample sitemap was created in Adobe Photoshop and will be used to inform the content and functionality requirements of the website.

Feel free to check the sitemap below: 

![website-sitemap](/assets/img/sitemap.png)

### Skeleton of website
The developers created a wireframe mockup for a landing page in a [Figma Workspace](https://www.figma.com/file/XhW0BQs2L9bXrjrqTYd0xr/Untitled?node-id=8%3A3). The intention was to design a sample website that kept user experience in mind while reflecting the strategy, scope, and structure of the website.

One developer created a sprite in 8-bit style. This sprite was modelled after a sprite found on google images. Both versions can be seen below.

![sprite landing character](/assets/img/large_random_sprite.png)

![sprite landing character 2](/assets/img/large_random_sprite_right.png)

One developer created a sample wireframe to illustrate the game's concept. This wireframe can be seen below.

![game-wireframe](/assets/img/DODGEM-game-wireframe.png)

## Website Features

### Home page

The homepage reflects a landing for a retro game. 

The landing page features a series of simple animations and buttons.

1. The title animates in, along with a character at the bottom of the page.
2. The nav buttons slide in.
3. The second character slides in from the right, as a play button animates in on top.

Each nav button on the home page is linked to a modal. These modals cover the screen and have small dialog boxes.

1. About button opens modal with game information hard-coded in landing.js file.
2. Rules button opens modal with rules information hard-coded in landing.js file.
3. Leaderboard button opens modal with scoreboard information hard-coded in landing.js file.

### Game page
The game page is linked to the play button on the home page. 
The game page features a canvas where the game is to be played. 
This canvas is positioned in the middle of the screen. 
It features a sprite running and trying to avoid the game terrain. 

* Upon character crash, the game stops and creates a modal to signal a loss.
* As the character runs, the game improves the user's score.
* A timer enables the user to see how long they have run.
* The timer also indicates the user's score.

## Features to Add
* The website would be more functional with a leaderboard that can change dynamically and remain on the home page. This requires some back-end work. 
 
## Technologies Used
* HTML5 - The language used to create the skeleton of the website. Forms, buttons, sections, divisions, etc.

* CSS3 - The language used to style the HTML5 pages and elements. 

* [Nes.css library](https://nostalgic-css.github.io/NES.css/) - This css library helped the developers create html elements with retro styles.

* [Bootsrap](https://getbootstrap.com/) - The developers used the bootstrap framework to structure the website and game layouts more easily. This was beneficial when adding structure to the site.

* [Figma](https://www.figma.com/file/XhW0BQs2L9bXrjrqTYd0xr/Untitled?node-id=8%3A3) - Here is a link to a Figma workspace. This was used to draft and realise the ideas behind the design of the landing page. 

* [Google Fonts](https://fonts.google.com/) - Is where the developers selected the "Press Start 2P" font after perusing Googles font library for something suitable.

* [W3C Schools](https://w3schools.com) - This website is very informative. The developer would often consult W3Schools and constantly revisit various tags of code.

* [Stack Overflow](https://stackoverflow.com) - This website is informative. The developers would consult this website to find solutions to similar issues faced.

## Testing
The developers tested the website in Google Chrome and tested it for the functions it was intended to achieve.

### Validating the HTML and CSS:

#### HTML Validation
The developer used [W3C's HTML Validator](https://validator.w3.org/) to check his pages for any validation errors. The [TightCore Gym](https://athajuong.github.io/milestone-project-1/index.html) website passed the HTML validation with no errors.

#### CSS Validation
The developer used [W3's Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/validator) to check his css for any validation errors and the website passed with no errors.

##### Content Requirements
The developers believe this website can fulfill its intended content requirements.

A user visiting the DODGEM website can find:
* Game information
* Game rules
* A scoreboard or leaderboard to see the top scores on the game
* A play/start button to enter the game

##### Functionality Requirements

The developers believe this website can fulfill its intended functionality requirements.

A user visiting the DODGEM website can:
* Navigate the website effortlessly
* Browse the website on laptop and larger devices
* Find information about the game
* Play using a keyboard

### Testing Browsers
The developer manually tested the website across 1 browser, namely:

* Google Chrome

### Responsive Design

This website was designed for laptops and desktop devices. As explained by the Retro Game Hackathon organisers, the application was developed with desktop devices in mind.

* Using DevTools, the developers checked the game's usage for large devices.

### Issues Discovered
Developers found issues with animations and character positioning on the landing page. These were addressed by ensuring the characters were placed further off screen and the overflow was hidden.

Developers wanted to have a dynamic leaderboard. This issue could be addressed using back-end tools like flask. 

Adding sound was a challenge. At times, the sound would lag and play at inappropriate times. In JavaScript, developers resolved this issue by setting appropriate triggers and event listeners.

Branches were complicated to use. Developers learned to use branches to work on projects in an agile style. The developers created their own branches and made pull requests to work on their own tasks. Working in branches enabled the developers to work without complicating the same code.

## Deployment
This project was created in GitPod's development environment. 

To make this project viewable to the public, the developer followed these steps:

1. Enter [Github Repository](https://github.com/AthAjuong/milestone-project-1)
2. Go to settings tab
3. Go to pages section
4. Choose a master branch for the project, "main"

This deployed the TightCore Gym website that is now viewable [here](https://athajuong.github.io/milestone-project-1/index.html).

### Cloning the Project

If you would like to work on this project further you can clone it to your local machine using the following steps:

1. Scroll to the top of my repository and click on the "clone or download button"
2. Decide whether you want to clone the project using HTTPS or an SSH key and do the following:
3. HTTPS: click on the checklist icon to the right of the URL
4. SSH key: first click on 'Use SSH' then click on the same icon as above
5. Open the 'Terminal'
6. Change the current working directory to the location where you want the cloned directory
7. Type 'git clone', and then paste the URL you copied earlier.
8. Press 'Enter' to create your local clone.

Feel free to read about [Cloning a Repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) if there is any confustion.


