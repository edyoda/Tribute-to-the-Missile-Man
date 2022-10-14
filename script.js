(function () {
  "use strict";

  let tl = gsap.timeline(),
    labels = document.getElementsByClassName("labels"),
    rocket = document.querySelectorAll(".rocket__body, .rocket__wing, .rocket__fire"),
    smokeL = document.querySelectorAll(".rocket__smoke--left"),
    smokeR = document.querySelectorAll(".rocket__smoke--right"),
    fire = document.getElementsByClassName("rocket__fire"),
    wish = document.getElementsByClassName("rocket__wish");

  // Durations!
  let cdStart = 1.25,
    cdLeave = cdStart / 2,
    esDuration = 0.1,
    smDuration = 2;

  // Animations!
  tl.addLabel("countdown")
    .from(
      labels,
      {
        duration: cdStart,
        scale: 0,
        x: "50px",
        y: "50px",
        stagger: cdStart / labels.length,
      },
      "countdown"
    )
    .to(
      labels,
      {
        duration: cdLeave,
        scale: 0,
        x: "20px",
        y: "20px",
        opacity: 0,
        stagger: cdStart / labels.length,
      },
      "countdown+=" + cdStart / labels.length
    )
    .addLabel("engine-start")
    .from(
      rocket,
      {
        duration: esDuration,
        x: "+=3px",
      },
      "engine-start-=.5"
    )
    .from(
      rocket,
      {
        duration: esDuration * 20,
        y: "+=5px",
      },
      "engine-start-=1"
    )
    .from(
      smokeL,
      {
        duration: smDuration,
        scale: 0,
        opacity: 2,
        stagger: smDuration / smokeL.length,
        x: "+=300px",
        y: "+=200px",
      },
      "engine-start-=.5"
    )
    .from(
      smokeR,
      {
        duration: smDuration,
        scale: 0,
        opacity: 2,
        stagger: smDuration / smokeR.length,
        x: "-=300px",
        y: "+=200px",
      },
      "engine-start-=.5"
    )
    .from(
      fire,
      {
        duration: smDuration,
        scale: 0,
      },
      "engine-start-=.5"
    )
    .addLabel("lift-off")
    .to(
      rocket,
      {
        duration: 2,
        y: "-=100px",
      },
      "lift-off-=1"
    )
    .to(
      fire,
      {
        duration: 0.25,
        scale: 2,
      },
      "lift-off-=1"
    )
    .addLabel("launch")
    .to(
      rocket,
      {
        duration: 3,
        y: () => "-=" + document.body.offsetHeight + "px",
        ease: "power4",
      },
      "launch-=1.5"
    )
    .to(
      fire,
      {
        duration: 0.25,
        scale: 1.75,
      },
      "launch-=1.8"
    )
    .addLabel("wish")
    .to(
      wish,
      {
        duration: 3,
        y: () => "-=" + document.body.offsetHeight + "px",
        ease: "power4",
      },
      "launch-=1.5"
    )
    .to(
      fire,
      {
        duration: 0.25,
        scale: 1.75,
      },
      "launch-=1.8"
    );
})();

// Background

var limit = 1001;
space = document.getElementById("space");

stars = {
  rand: function () {
    return Math.random();
  },

  createStar: function () {
    let star = document.createElement("div");
    star.className = "star";

    return star;
  },

  create: function () {
    for (let i = 0; i <= limit; i++) {
      let star = this.createStar();
      star.style.top = `${this.rand() * 100}%`;
      star.style.left = `${this.rand() * 100}%`;
      star.style.animationDelay = `${this.rand() * 8}s`;
      space.appendChild(star);
    }
  }
};

stars.create();

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
setTimeout(function () {
  anime.timeline({ loop: false })
    .add({
      targets: '.ml3 .letter ',
      opacity: [0, 1],
      duration: 2250,
      delay: (el, i) => 300 * (i + 1)
    }).add({
      targets: '.ml3',
      opacity: 1,
      duration: 1000,
      delay: 300
    });
}, 4500);

