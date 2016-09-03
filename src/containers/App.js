import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const {name} = this.props.user
    const {year, photos} = this.props.page
    return <div>
              <p>
                  Hello {name}.
                  Is there {photos.length} photos made in {year}
              </p>
            </div>
  }
}

function mapStateProps(state){
  return {
    user:state.user,
    page:state.page
  }
}

export default connect(mapStateProps)(App)