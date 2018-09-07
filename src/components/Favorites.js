import React from 'react';
import { Link } from 'react-router-dom';

class Favorites extends React.Component {

  constructor(){
    super();
    this.state = {
      ids: [],
      names: []
    };
  }

  componentWillMount(){
    this.getFavorites();
  }

  //function that stores the localStorage values into IDS and keys into Names so they can be iterated over in the table
  getFavorites = () => {
    let ids = Array.from(Object.values(localStorage));
    ids.splice(ids.length-1, 1)
    let names = Array.from(Object.keys(localStorage))
    names.splice(names.length-1, 1);
    this.setState({ids , names });
  }

  render(){
    return(
      <div>
        <h1 className="title is-1">My Favorite NEOs <i className="fas fa-star"></i></h1>
        <table className="table is-hoverable is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {this.state.names.map((name, i) =>
              <tr key={i}>
                <td>{name}</td>
                <td>{this.state.ids[i]}</td>
                <td><Link to={`/${this.state.ids[i]}`}>Click Here</Link></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Favorites;
