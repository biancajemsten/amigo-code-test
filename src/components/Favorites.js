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
    let ids = Array.from(Object.values(localStorage));
    ids.splice(ids.length-1, 1)
    let names = Array.from(Object.keys(localStorage))
    names.splice(names.length-1, 1);
    this.setState({ids , names });
  }


  render(){
    console.log(this.state);
    return(
      <div>
        <table className="table is-hoverable is-bordered">
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
