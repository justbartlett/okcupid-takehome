# OkCupid Take-Home Exercise

## Thoughts

Live preview: [https://peaceful-jackson-34a319.netlify.com/](https://peaceful-jackson-34a319.netlify.com/)

I deviated from the starter project as react-redux now includes its own `useSelector` and `useDispatch` Hooks that can be used instead of connect - forgoing the need to wrap components in the `connect` higher order component (and avoiding VirtualDOM clutter). I did pass in questions in the about component so that you know I know how to use a HOC ;). I also decided to tackle this project using TypeScript, however, didn't have the time to make as much use of it as I would have liked. 

All in all, an enjoyable exercise - Thank you for the challenge, I had fun!~

## Project Structure

Follows the 'ducks' style pattern. I've organized the project in a way that hopefully makes sense to you and leaves the door open for scaling were it to become a larger project - so you could easily extend multiple ducks files in modules, or multiple sagas in sagas, etc.

## Styles

The styles I kept pretty simple - BEM or Atomic naming conventions felt a bit like overkill for something this size. I hope the naming & organization/structure makes sense to ya'll, generally I do something along the lines of reset > variables > globals > component. Alternatively, we could have gone stylized components / storybook.

## Debugging

For a lovely debugging experience I suggest grabbing a copy of [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

![Image of Dev Tools](https://i.ibb.co/jfpH4jg/devtools.png)


## Welcome

Welcome to the OkCupid take-home exercise! This will roughly model the type of
projects you'd work on at OkCupid.

This repository contains the structure of a React/Redux application, as well as
a webpack setup to compile the files. We'd like you to use them to implement a
feature for us.

Approach this exercise as if you worked here: make sure your code is clear and
concise, and use your time wisely.

## The feature

A feature of OkCupid, and one of the things that differentiates our site, is
the essay -- a space for people to write about themselves on their profile. But
it can be hard for users to write so freely without a prompt.

We'd like to make writing an essay easy and fun, and one idea we had is to make
a [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)-style game.

Your job is to make a small app using React/Redux and Scss which asks a user
some simple questions, and assembles the answers into a passable essay.

## How to use

First, make sure you have a modern version of `node` and `yarn.`

Run `yarn install` before getting started.

Make your changes to these files, then run `yarn start` to run the compiler.

A new window should open; if not, you can visit your page at
http://127.0.0.1:3000/. Any changes to the project files should trigger a new
build, and a refresh.

## What's there

* Screenshots of the app's design, in `/assets/`.
* The main app folder, `/src/`, where you'll be making your changes.
* A [ducks](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.5chqfp84p)
  file, `/src/madlibs.js`. This file contains the reducer, the initial state,
  along with some example actions.
* A constants file, `/src/constants.js`. It contains the questions and
  potential essay templates.
* A helpers file, `/src/helpers.js`. It contains a function with templates
  for a given field.
* A folder for React components, `/src/components/`.

## Requirements

* Prompts appear in the left column, and the essay preview on the right.
* Each "prompt" consists of a question and an input.
* When the user blurs the input, the app should "save" their response and
  update the essay preview.
* To generate the essay preview, choose one of the available templates at
  random.
* Changing one answer should re-roll that answer's template, but not the
  chosen templates of other fields.
* The user's responses in the essay preview should be bold.
* When the user has answered and blurred all questions, an "Edit" button
  appears.
* When a user clicks "Edit", replace both columns with a centered textarea
  containing the generated essay content.
* When a user clicks "Start over", they should see the original screen
  without any user text.

Some more details:

* Don't worry about vendor prefixes; target the latest version of Chrome.
* The app should compile without any errors.
* Create as many or as few subcomponents as you like.
* Use whatever libraries you want. (But remember: if you worked here, we would
  want to pay attention to payload size. Choose wisely!)
* Eyeball the margins, paddings, and colors.

## When you're done

Remove the `node_modules` directory, zip up this project directory, and send it
back to us.

Thanks for your time, and good luck! We look forward to hearing from you!