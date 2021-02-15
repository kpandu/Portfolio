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
    title: "Content Aware Seam Carving",
    description:
      "Uses dynamic programming to remove path's of pixels from the bottom of the image to the top with the lowest gradient magnitude. Aka, the pixels with the least amount of importance to the content of the image are carved. This prevents content from being loss from simply cropping an image from its edges.",
    video: [require("../../../assets/carve_Trim.mp4").default],
    tags: ["Python"],
  },
  {
    title: "Crystal Sky",
    description:
      "Given a picture of the sky, the program will use CV2 to filter for stars, then using these stars as coordinates and points found through canny edge detection, Delaunay triangulation is applied creating an artistic representation of the image. Edge detection preserves the outline of non-sky elements when triangulated. Images in order are after and then before.",
    imgs: [
      require("../../../assets/crystal-right.png").default,
      require("../../../assets/crystal-left.png").default,
    ],
    tags: ["Python", "CV2"],
  },
  {
    title: "Panorama Stitcher",
    description:
      "Using RANSAC on the potential candidates from Harris corner detection, the best matches are found between the 2 images to be stitched. Then the transformation between the 2 images is computed which is used to transform and stich all pixels from the left image to the right image.",
    imgs: [
      require("../../../assets/panorama.png").default,
      require("../../../assets/panorama-2.png").default,
    ],
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
    title: "Undergraduate Research",
    description:
      "Engineered a 3 point system detecting drowsy/distracted driving, blinking, and yawning. I worked on creating the CNN for detecting distracted actions, and found optimal performance using YOLO and transfer learning with MobileNetV2. The system was heavily optimized and was run on a Raspberry Pi under the rear-view mirror. Worked with Dr. Teli, Hyekang Joo, and Ashan Panduwawala.",
    imgs: [require("../../../assets/research.png").default],
    tags: ["Python", "Tensorflow", "CV2"],
  },
  {
    title: "V1 Parallax",
    description:
      "I was really interested in parallax and wanted to learn React, therefore I combined the 2 into the site above. It built a strong foundation in states and functional/class components. The site features a parallax downfall from space to the bottom of the sea.",
    imgs: [
      require("../../../assets/sol2-1.PNG").default,
      require("../../../assets/sol2-4.PNG").default,
      require("../../../assets/sol2-3.PNG").default,
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
    title: "Roast Me Alexa Skill",
    description:
      "Using the serverless framework, a nodejs AWS lambda function reads in roasts from an external api and alexa reads it out loud.",
    imgs: [require("../../../assets/roast.jpeg").default],
    tags: ["JS", "Serverless Framework", "AWS"],
  },
  {
    title: "V3 Midnight",
    description:
      "Built a simple dark themed portfolio that preceded the current site. Many things were transfered over to this site.",
    imgs: [
      require("../../../assets/midnight-1.PNG").default,
      require("../../../assets/midnight-2.PNG").default,
      require("../../../assets/midnight-3.PNG").default,
    ],
    tags: ["JS", "ReactJS"],
  },
  {
    title: "Pedestrian Detection",
    description:
      "Detects pedestrians using HOG descriptors with a perceptron in the first image (less accurate). The second image accomplishes the same thing but this time with a convolutional neural network made with Pytorch.",
    imgs: [
      require("../../../assets/hog.png").default,
      require("../../../assets/pytorch.png").default,
    ],
    tags: ["Python", "Pytorch"],
  },
];
