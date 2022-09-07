let title = document.getElementsByClassName("title");
let header = document.getElementsByClassName("header");
let boxes = document.getElementsByClassName("box");

TweenLite.from(title, {
  duration: 1.4,
  x: -150,
  alpha: 0,
});

TweenLite.from(header, {
  duration: 1.4,
  x: -850,
  alpha: 0,
});

for (let i = 0; i < boxes.length; i++) {
  TweenLite.from(boxes[i], {
    duration: 0.8,
    x: -150,
    alpha: 0,
    delay: i * 0.15,
  });
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#2184b5";
  });

  boxes[i].addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "#8b2299";
  });

  boxes[i].addEventListener("click", (event) => {
    TweenLite.to(boxes[i], {
      duration: 0.5,
      x: 100,
      alpha: 0,
    });
  });
}
