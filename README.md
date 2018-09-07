# Amigo Partnership Code Test

 by: Bianca Jemsten

 ---

 #### Overview
The premise of the code test was to meet the following criteria:

- The App must use an API to display a list of items on a page
- On click of an item in the list it should go to a basic item page showing some more information.
- Add a favourite icon which then adds the item to a list in your “account”

I chose to build a front end application RESTful in React, SCSS, Bulma, Moment.js, Babel, Webpack, Axios, and utilise LocalStorage to store the information about favorites. The third party API I chose is NASA's API for [Near Earth Objects](https://api.nasa.gov/api.html#NeoWS). I chose this one because it had a client side library so it was easy to implement it without a backend.

#### Build process

###### Third Party API
First, I researched what type of third party APIs might be suitable to use for this task. After testing out a few different ones in Insomnia and checking out the response data I chose to go with NASA's.

###### Index Page
Thereafter I set up a basic front end React file structure and made sure everything was running. The first feature I decided to implement was the index list of NEOs (Near Earth Objects). The axios request that is sent to the API requires startDate and endDate parameters. Initially I set there manually to see how I could work with the data. But I kept in mind that I wanted to make these inputs dynamic later, so I built the structure of the page to be flexible. Bulma's table styles made this process quick and easy.

###### Show Page
I then moved on to the Show page of specific NEOs. I made sure that on click in the Index page, the id of that NEO would transfer to the url. That way I could easily use `this.props.match.params.id` in the next axios request which sends a request for data specific to that ID. Given that the data received is quite nested, it was a little tricky to work with. I chose to restructure the data in a way that was easy for me to use upon receiving it and then setting state to a custom object.

###### Favorites
After I got the specific NEO data to show in the table I moved on to the favorite feature. Since I chose to not have a back end, I had to use the localStorage. The following function check on click if an item is already in localStorage. It then adds it if it's not in there or removes it if it is. It also toggles state for favorite. Which for example toggles the star icon to be solid.

```
favoriteIt = () => {
  if (Object.values(localStorage).indexOf(this.state.neo.id) === -1) {
    localStorage.setItem(`${this.state.neo.name}`,`${this.state.neo.id}`);
    this.setState({favorite: true});
  } else {
    localStorage.removeItem(this.state.neo.name);
    this.setState({favorite: false});
  }
}
```

Lastly, the `My favorite NEOs` page iterates over the items in the localStorage to display favorited NEO names and ids. It also provides a link to revisit the items.
Given that the index page only shows the past 7 days of NEOs the favorite list comes in handy if one would want to view a NEO for longer than that.

#### Blockers
- The data that came back from the API was quite nested and difficult to work with at times.
- Would have liked to use GraphQL but didn't feel confident enough in it to complete the code test in a short amount of time.

#### Wins
- Axios request is dynamic and changes every day with help of Moment.js.
- Worked out the nested data issue quite nicely and displayed what I wanted to.
- Improved my skills in using localStorage. Haven't done that a lot before.
- Application is fully mobile responsive thanks to Bulma.
