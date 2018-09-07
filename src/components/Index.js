import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

class NeoIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      neos: [],
      dates: []
    };
  }

  componentWillMount(){
    const startDate= moment().add(-6, 'days').format('YYYY-MM-DD');
    const endDate= moment().format('YYYY-MM-DD');
    axios({
      url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=NXdg6uoUVxUVonkRFoatgFJBvv6AyMeCvQy332u4`,
      method: 'GET'
    })
      .then(res => {
        const dates = Object.keys(res.data.near_earth_objects);
        const neos = Object.values(res.data.near_earth_objects);
        this.setState({dates, neos});
      });
  }


  render(){
    if(!this.state.neos) return <h1 className="title is-1">Loading...</h1>;
    return(
      <div>
        <h1 className="title is-1">NEO List</h1>
        <p>The NEO list updates continuously and shows you tables of Near Eart Object encounters from the past 7 days. Click the link in the "More Info" column to read more about the NEO and star it to your favorites! </p>
        <hr/>
        <div className="columns is-multiline is-mobile">
          {this.state.dates.map((date, index) =>
            <div className="column is-one-third-desktop is-half-tablet is-full-mobile" key={index}>
              <h2 className="title is-2">{moment(date).format('ddd, MMM Do')}</h2>
              <table className="table is-hoverable is-bordered is-fullwidth">

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
                      <td><Link to={`/${neo.neo_reference_id}`}>Click Here</Link></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

    );
  }

}

export default NeoIndex;
