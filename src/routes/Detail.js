import React from "react";
import "./Detail.css";

const trailers = [
  {
    id: "15553",
    src: "https://www.youtube.com/embed/DLjJwW1lFxI",
  },
  {
    id: "3709",
    src: "https://www.youtube.com/embed/6hB3S9bIaco",
  },
  {
    id: "29602",
    src: "https://www.youtube.com/embed/AbdJLjm5utc",
  },
  {
    id: "30440",
    src: "https://www.youtube.com/embed/GVHkHFMwfIA",
  },
  {
    id: "3304",
    src: "https://www.youtube.com/embed/sY1S34973zA",
  },
  {
    id: "15527",
    src: "https://www.youtube.com/embed/qqQzU-q8S2o",
  },
  {
    id: "29819",
    src: "https://www.youtube.com/embed/9CoSYzjSMgY",
  },
  {
    id: "22032",
    src: "https://www.youtube.com/embed/PJoRbx8ixOE",
  },
  {
    id: "25171",
    src: "https://www.youtube.com/embed/_nvrkDBomJA",
  },
  {
    id: "25318",
    src: "https://www.youtube.com/embed/fa_DIwRsa9o",
  },
  {
    id: "3175",
    src: "https://www.youtube.com/embed/g8evyE9TuYk",
  },
  {
    id: "3305",
    src: "https://www.youtube.com/embed/9O1Iy9od7-A",
  },
  {
    id: "4253",
    src: "https://www.youtube.com/embed/_13J_9B5jEk",
  },
  {
    id: "21870",
    src: "https://www.youtube.com/embed/64R2MYUt394",
  },
  {
    id: "30843",
    src: "https://www.youtube.com/embed/axJ2lSMJdQk",
  },
  {
    id: "34015",
    src: "https://www.youtube.com/embed/GWeuZr6fT6o",
  },
  {
    id: "2429",
    src: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  {
    id: "2640",
    src: "https://www.youtube.com/embed/gG22XNhtnoY",
  },
  {
    id: "3489",
    src: "https://www.youtube.com/embed/r5X-hFf6Bwo",
  },
  {
    id: "25833",
    src: "https://www.youtube.com/embed/u4EgZea83ZM",
  },
];

function getSource(id) {
  for (const trailer of trailers) {
    if (trailer.id === String(id)) {
      return trailer.src;
    }
  }
  return null;
}

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      const trailer = getSource(location.state.id);
      console.log(trailer);
      return (
        <div className="detail">
          <iframe src={trailer} title={location.state.title}></iframe>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
