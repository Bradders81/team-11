![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome AwsSG,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. The last update to this file was: **July 2, 2021**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!

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
A user visiting the TightCore Gym website will be able to:
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






