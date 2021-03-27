// method -> obj
// function -> global (window, global)

// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };

// video.stop = function () {
//   console.log(this);
// };

// video.stop();

// function playVideo() {
//   console.log(this)
// }

// playVideo();

// constructor function
function Video(title) {
  this.title = title;
  console.log(this);
}
Video()

const v = new Video("Lethal Weapon"); // {}

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

video.showTags();
