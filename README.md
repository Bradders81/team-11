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

