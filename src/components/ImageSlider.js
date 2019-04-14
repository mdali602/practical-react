import React from 'react';

export default class ImageSlider extends React.Component {
  state = {
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      'https://cdn-images-1.medium.com/max/1026/1*3SVfBkNZI2f-sspiq59xcw.png',
      'https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
      'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png'
    ],
    idx: 0
  };

  handleNext = () => {
    console.log(this.state);
    this.setState(
      {
        idx: (this.state.idx + 1) % (this.state.images.length)
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handlePrev = () => {
    console.log(this.state);
    this.setState(
      {
        idx: ( (this.state.idx===0 ? 4 : this.state.idx) - 1) % (this.state.images.length)
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={ this.handlePrev }>
          Prev
        </button>
        <img
          style={{
            width: 100,
            height:100
          }}
         src={ this.state.images[this.state.idx] }
         alt={ this.state.idx }
        />
        <button onClick={ this.handleNext }>
          Next
        </button>
      </div>
    )
  }
}