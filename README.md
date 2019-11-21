# The Tap Room

A tap room app that keeps track of its kegs

## USE

A tap room web app that allows users to keep track of items in the tap room. Patrons can browse available kegs, employees can keep track of sold and remaining pints, and add new keg types. 

## SET-UP

- install npm to install package dependencies, use 'npx i -g' to install globally
- the the repository to a local directory
- in terminal, navigate to root directory with 'cd tap-room' 
- run 'npm install' to install packages
- run 'npm run start' to launch server
- go to http://localhost:8080 in desired browser or click on link provided by terminal

## SPECS

| Behavior | Input | Output |
|-|-|-|
| PATRON BEHAVIORS|
| patron can see menu of kegs | "kegs" | _list of available kegs_ |
| patron can see the name, brand, price and alcohol content of each keg | "Corona" | "Corona, Corona Kegs, $20, 15%" |
| patron can see prices based on color | "$2 .. $4 .. $6" | _2 is blue, 4 is yellow, 6 is purple_ |
| patron can see alcogol percentage based on icon | "10% .. 15%" | _10% has small pint icon, 15% has big pint icon_  |
|-|-|-|
| EMPLOYEE BEHAVIORS |
| employee can add new kegs | "Add Keg" | _fill out form for new keg with new fields_ |
| employee can edit a kegs' properties | "Edit Keg" | _fill out form for existing keg to overwrite fields_ |
| employee can add # of kegs sold | "Sold Keg" | _increases amount of this keg that was sold_ |
| when employee sells a keg, it decreases the amount of available pints | "Sold Keg" | _decreases the amount of available pints_ |
| employee can see when there are less then 10 pints of a given keg left | "9 pints left" | _reflects amount of pints left_ |

## ROUTES DIAGRAM

___________________

## TECHNOLOGIES

React, jsx, JavaScript, VS Code, draw.io;

## AUTHORS

Brendon Tse
brendonjtse@gmail.com

## LICENSE

Open Source 2019 (MIT)
