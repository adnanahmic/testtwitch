import React from 'react';
import Items from './items';
import axios from 'axios';

class TwitchTest extends React.Component {
  constructor() {
    super();
    this.state = { videos: [] };
    this.fetchvideos = this.fetchvideos.bind(this);
  }

  componentWillMount() {
    this.fetchvideos();
  }

  fetchvideos() {
    const twitchApi = 'https://api.twitch.tv/kraken/streams/featured?&api_version=5&limit=5&client_id=';
    axios.get(twitchApi + process.env.REACT_APP_twitch_client_id)
         .then(response => {
           this.setState({ videos: response.data.featured });
         })
         .catch(error => {
           console.log("error", error);
         });
  }

  render() {
    const videos = this.state.videos;

    if (videos.length <= 0) {
      return (
        <div>No Stream Availaile</div>
      );
    } else {
      return (
          <table>
            <tbody>
              {videos.map( (stream, idx) => (
                <Items key={idx} stream={stream} />
              ))}
            </tbody>
          </table>
      );
    }
  }
}

export default TwitchTest;
