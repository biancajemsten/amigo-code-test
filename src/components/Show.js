import React from 'react';
import axios from 'axios';

class NeoShow extends React.Component {

  constructor(){
    super();
    this.state = {
      neo: [],
      favorite: false
    };
  }

  componentWillMount(){
    // if(localStorage.includes(this.state.neo.id)) this.setState({favorite: true});

    axios({
      url: `https://api.nasa.gov/neo/rest/v1/neo/${this.props.match.params.id}?api_key=NXdg6uoUVxUVonkRFoatgFJBvv6AyMeCvQy332u4`,
      method: 'GET'
    })
      .then(res => {
        console.log(res.data);
        const estimatedDiameter = Object.values(res.data.estimated_diameter);
        const close_approach = Object.values(res.data.close_approach_data);
        const neo = {
          name: res.data.name,
          absolute_magnitude: res.data.absolute_magnitude_h,
          diameterInM: (estimatedDiameter[1].estimated_diameter_min+estimatedDiameter[1].estimated_diameter_max)/2,
          diameterInFt: (estimatedDiameter[3].estimated_diameter_min+estimatedDiameter[3].estimated_diameter_max)/2,
          hazardous: res.data.is_potentially_hazardous_asteroid,
          close_approaches: close_approach.length,
          id: res.data.neo_reference_id
        };
        if (Object.keys(localStorage).indexOf(neo.name) > -1) {
          this.setState({favorite: true});
        }
        this.setState({neo});
      });
  }

  favoriteIt = () => {
    this.favorite = !this.favorite;
    if(this.favorite) localStorage.setItem(`${this.state.neo.name}`,`${this.state.neo.id}`);
    if (Object.keys(localStorage).indexOf(this.state.neo.name) > -1) {
      console.log('is favorited');
      this.setState({favorite: true});
    }
  }

  checkIfFavorited = () => {
    console.log(Object.keys(this.state.neo));
    if (Object.keys(localStorage).indexOf(this.state.neo.name) > -1) {
      console.log('has test1');
      this.setState({favorite: true});
    }
    console.log('from check',this.state.favorite);
  }


  render(){
    if(!this.state.neo) return <h1 className="title is-1">Loading...</h1>;
    return(
      <div>
        <h1 className="title is-1">Near Earth Object {this.state.neo.name}</h1>
        <div onClick={this.favoriteIt} className="favoriteDiv">
          {this.state.favorite ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}
          <p>Favorite this Neo</p>
        </div>
        <table className='table is-hoverable is-bordered'>
          <tbody>
            <tr>
              <td><strong>Absolute Magnitude </strong></td>
              <td>{this.state.neo.absolute_magnitude}</td>
            </tr>
            <tr>
              <td><strong>Amount of close approaches (past&future) </strong></td>
              <td>{this.state.neo.close_approaches}</td>
            </tr>
            <tr>
              <td><strong>Estimated Diameter in meters </strong></td>
              <td>{this.state.neo.diameterInM}</td>
            </tr>
            <tr>
              <td><strong>Estimated Diameter in feet </strong></td>
              <td>{this.state.neo.diameterInFt}</td>
            </tr>
            <tr>
              <td><strong>Potentially hazardous asteroid </strong></td>
              <td>{this.state.neo.hazardous ? 'Yes' : 'No'}</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NeoShow;
