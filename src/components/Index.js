import React from 'react';
import axios from 'axios';

class NEOIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      neos: []
    };
  }

  componentWillMount(){
    axios({
      url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-04&end_date=2018-09-06&api_key=NXdg6uoUVxUVonkRFoatgFJBvv6AyMeCvQy332u4',
      method: 'GET'
    })
      .then(res => console.log(res.data));
  }

  render(){
    return(
      <div>
        <h1>NEO List</h1>
        <table className="table">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>

    );
  }

}

export default NEOIndex;
