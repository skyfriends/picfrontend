import React from 'react';
import * as photoActions from '../../action/photo-actions.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import * as util from '../../lib/util/';
import superagent from 'superagent';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { type, name } = e.target;
    if (name === 'photo') {
      const { files } = e.target;
      const photo = files[0];
      this.setState({ photo });
      util.photoToDataURL(photo);
    }
  }

  render() {
    console.log(this.state.photo);

    return (
      <MuiThemeProvider>
        <Paper zDepth={2} style={{ width: '50%', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <Card>
              <CardTitle title="PicSift" subtitle="Upload a Photo" />
              <Divider />
              <CardMedia>
                <form
                  onSubmit={() =>
                    superagent
                      .post(`${__API_URL__}/api/photo`)
                      .attach('../../../catcat.jpg')
                      .then((res) => {
                        console.log(res);
                      })}
                >
                  <input
                    type="file"
                    name="photo"
                    onChange={this.handleChange}
                  />
                  <button type="submit">CLICK</button>
                </form>
              </CardMedia>
            </Card>
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Landing;
