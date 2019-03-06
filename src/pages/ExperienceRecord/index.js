import React, { Component } from 'react';

class ExperienceArticle extends Component {
  render() {
    return (
      <div>
        <h1>踩坑记录</h1>
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props)
  }


}

export default ExperienceArticle;
