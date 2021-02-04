export default [
  {
    title: "Flappy Bird",
    description:
      "Making games may not be my specialization, yet they teach so much. Through creating Flappy Bird in Java, I took my first steps into the language.",
    imgs: [require("../../../assets/flappy.png").default],
    tags: ["Java"],
  },
  {
    title: "Pong",
    description: "Made pong to learn python.",
    imgs: [require("../../../assets/pong.png").default],
    tags: ["Python", "Pygame"],
  },
  {
    title: "Crystal Sky",
    description:
      "Given a picture of the sky, the program will use CV2 to filter for stars, then using these stars as coordinates and points found through canny edge detection, Delaunay triangulation is applied creating an artistic representation of the image. Edge detection preserves the outline of non-sky elements when triangulated.",
    imgs: [require("../../../assets/crystal-right.png").default],
    tags: ["Python", "CV2"],
  },
  {
    title: "Panorama Stitcher",
    description:
      "Using RANSAC on the potential candidates from Harris corner detection, the best matches are found between the 2 images to be stitched. Then the transformation between the 2 images is computed which is used to transform and stich all pixels from the left image to the right image.",
    imgs: [require("../../../assets/panorama.png").default],
    tags: ["Python", "numpy"],
  },
  {
    title: "Sol",
    description:
      "I was blinded by thinking that overly flashy looks good. Before I realized that I was wrong, I made the above graphic which was going to be the at the very top of this website. It is a real-time interactive 3D animation in space made with BabylonJS. Project Midnight is a nice balance between flashy and simple.",
    video: [require("../../../assets/sol3video.mp4").default],
    tags: ["JS", "ReactJS"],
  },
  {
    title: "V1 Parallax",
    description:
      "I was really interested in parallax and wanted to learn React, therefore I combined the 2 into the site above. It built a strong foundation in states and functional/class components. The site features a parallax downfall from space to the bottom of the sea.",
    imgs: [
      require("../../../assets/sol2-1.PNG").default,
      require("../../../assets/sol2-3.PNG").default,
      require("../../../assets/sol2-4.PNG").default,
    ],
    tags: ["JS", "ReactJS"],
  },
  {
    title: "Media Controller CNN",
    description: `Through Tensorflow and CV2, a convolutional nerual network using transfer learning is trained to learn hand gestures and induce media controls. Below are the gestures:
      No Hand: Pause Music after 6 seconds of inactivity. Music will resume automatically upon hand visibility.
      Fist: Play/Pause
      Thumb Out: Back
      Pinky Out: Skip
      Normal: Do Nothing`,
    video: require("../../../assets/MediaCNN.mp4").default,
    tags: ["Python", "Tensorflow"],
  },
  {
    title: "V2 Minimal",
    description:
      "This website was the one 2 versions before the current one. It gave me the inspiration for really bold text, and incorporating a simple design. Its over-simplicity led to its downfall, which led to the more daring yet simple Project Midnight.",
    imgs: [require("../../../assets/SOL4.jpg").default],
    tags: ["JS", "ReactJS"],
  },
  {
    title: "V3 Midnight",
    description:
      "Built a simple dark themed portfolio that preceded the current site.",
    imgs: [require("../../../assets/midnight-1.PNG").default],
    tags: ["JS", "ReactJS"],
  },
];
