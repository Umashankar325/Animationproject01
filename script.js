let tl = gsap.timeline();

tl.from("nav h2", {
  y: -80,
  opacity: 0,
  duration: 0.5,
  delay: 1,
});
tl.from("nav h3", {
  y: -80,
  opacity: 0,
  duration: 0.5,

  stagger: 0.2,
});
tl.from(".left h1", {
  x: -80,
  opacity: 0,
  duration: 0.8,
});
tl.from(".left p", {
  x: -80,
  opacity: 0,
  duration: 0.8,
});

tl.from(".left button", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
});

tl.from(".right img", {
  x: 60,
  opacity: 0,
  duration: 0.8,
  // delay: 1,
});
