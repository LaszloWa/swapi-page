
## Star Wars Single-Page-App

Welcome to my Star Wars app. The app was built from scratch using React.
In February 2020, this is my biggest app to date!

You can search for Star Wars information on 
- People
- Planets
- Spaceships
- Vehicles
- Species, and
- Films

You also have the choice to have a random result of the selected category displayed to you, or search for something more specific.
If multiple items match your input, then multiple results will be shown to you.

### Using the SWAPI API for Star

The information that is returned is provided by SWAPI, a Star Wars API containing information on all seven movies.
As the results returned from SWAPI often contain links, e.g. when looking for a planet the residents will be returned as urls instead of names, there is also a button displayed with each result to resolve the returned urls.

Most categories return data flawlessly. However, the 'vehicles' category has patchy indexing, meaning that for random queries a result is sometimes not displayed. This is because at the randomly selected index there is no entry.

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Final words

If you like the app, have feedback or have noticed something that can be improved (or even a bug 😮), please don't hesitate to let me know on [Twitter](https://twitter.com/LaszloWa). All praise and constructive criticism welcome!

