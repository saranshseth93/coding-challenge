# Coding Challenge
## _For Zen Desk_

#### Task Requirements
- The app should display the existing subscription information upon load (fetched
from the `/api/current` endpoint).
- Changing any of the subscription details (plan or seats) should show the price of the
updated subscription (fetched from the `/api/preview` endpoint).
- The update button should be disabled unless previewing a subscription that is different
from the existing subscription. In other words, the app should not allow an update if the
subscription has not been changed.
- Clicking on the 'Update' button should update the subscription by submitting a PUT
request to the `/api/current` endpoint.
- A successful submission should display a confirmation screen showing both the previous
and updated subscription details. The updated details that differ from the previous
subscription should be highlighted.
- The confirmation screen should include a 'Back' button which shows the subscription
screen again with updated subscription data.

## Installation

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.18.4

    $ npm --version
    7.0.0-beta.12

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ git clone https://github.com/saranshseth93/coding-challenge.git
    $ cd coding-challenge
    $ npm install

Or alternatively you can download the zip file from [here](https://github.com/saranshseth93/coding-challenge).

## Running the Application

    $ npm run-script run
    Server running at http://localhost:1234
    
Open the above link in your preferred browser to view the application.
Alternatively you can see the demo [here](https://coding-challenge-zendesk.netlify.app/).
###
[![Netlify Status](https://api.netlify.com/api/v1/badges/8300fba0-ac66-404b-9621-37b9d6a66952/deploy-status)](https://app.netlify.com/sites/coding-challenge-zendesk/deploys)

## Building for production

    $ npm run build
    
## Testing the application

    $ npm test


## License

MIT

---

### Future additions

- Disable the update button for subscriptions with invalid seat counts _(Function is written for diabling the button or any other input - just need to add the conditions)_
- Display an error message if an error is received from the server endpoints _(This is already handled)_
- Support multiple products (each with their own plan and seat count) - _(Can change the current html to template and use to replicate on button click)_
- Additional screens:
○ Display/update the payment information _(Can split code into different view files and include them using php)_
○ Display/update the contact information
- Support for multiple currencies (eg., USD, Euros, British Pounds, etc.) _(Can use [NodeJS Currency Converter](https://www.npmjs.com/package/currency-converter-lt) to get the live currency rates and convert the price using the price calculator function in the code)_
