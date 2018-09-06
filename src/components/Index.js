import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class NeoIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      neos: [],
      dates: []
    };
  }

  componentWillMount(){
    axios({
      url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-04&end_date=2018-09-06&api_key=NXdg6uoUVxUVonkRFoatgFJBvv6AyMeCvQy332u4',
      method: 'GET'
    })
      .then(res => {
        console.log(res.data);
        const dates = Object.keys(res.data.near_earth_objects);
        const neos = Object.values(res.data.near_earth_objects);
        this.setState({dates, neos});
      });
  }

  render(){
    console.log(this.state.neos);
    if(!this.state.neos) return <h1 className="title is-1">Loading...</h1>;
    return(
      <div>
        <h1>NEO List</h1>
        {this.state.dates.map((date, index) =>
          <div key={index}>
            <h2 className="title is-2">{date}</h2>
            <table className="table is-hoverable is-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Id</th>
                  <th>More Info</th>
                </tr>
              </thead>
              <tbody>
                {this.state.neos[index].map((neo, i) =>
                  <tr key={i}>
                    <td>{neo.name}</td>
                    <td>{neo.neo_reference_id}</td>
                    <td><Link to={`/${neo.neo_reference_id}`}>Click</Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

    );
  }

}

export default NeoIndex;
