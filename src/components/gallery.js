import React from 'react'
import { Carousel } from 'react-carousel-minimal';

export default function Gallery(props) {

  const data = [
    {
      image: props.img1,
      caption: props.title1
    },
    {
      image: props.img2,
      caption: props.title2
    },
    {
      image: props.img3,
      caption: props.title3
    },
    {
      image: props.img4,
      caption: props.title4
    },
    {
      image: props.img5,
      caption: props.title5
    },
    {
      image: props.img6,
      caption: props.title6
    },
    {
      image: props.img7,
      caption: props.title7
    },
    {
      image: props.img8,
      caption: props.title8
    },
    {
      image: props.img9,
      caption: props.title9
    },
        {
      image: props.img10,
      caption: props.title10
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: '500',
    color: 'black',
    textShadow: '2px 1px gray'
  }

  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }

  return (
    <div>
      <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={false}
            pauseIconColor="aqua"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "70%",
              maxHeight: "95vh",
              margin: "0em auto 4em",
            }}
          />
    </div>
  )
}
