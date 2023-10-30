## Dice Roll App

> from udemy - The Modern React Bootcamp (Hooks, Context, NextJS, Router) by Colt Steele

## Components

-   [ ] Die - an individual die that takes props and displays the correct face of the die based on props.
    -   [ ] Shows a single Die, with their name, image, and type.
-   [ ] RollDice - a parent component (rendered by App) that renders the dice and a button to roll.

## Further Study

### Animation

The solution displays an animation every time the dice are rolled.

A new piece of state is necessary to say whether the dice are currently rolling or not.

This is done by appending a class containing a CSS animation, and then removing it after one second (hint: setTimeout with setState, but be careful what this references!).

### Changing Button Text

The button can also dynamically change its text and become disabled (un-clickable) until the animation has completed.

It relies on the additional piece of state that says whether the dice are currently rolling or not.
