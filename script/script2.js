pause7.addEventListener("click", function () {
  audio7.pause();
});

play7.addEventListener("click", function () {
  audio7.play();
});

volup7.addEventListener("click", function () {
  audio7.volume = audio7.volume + 0.1;
});

voldown7.addEventListener("click", function () {
  audio7.volume = audio7.volume - 0.1;
});

pause8.addEventListener("click", function () {
  audio8.pause();
});

play8.addEventListener("click", function () {
  audio8.play();
});

volup8.addEventListener("click", function () {
  audio8.volume = audio8.volume + 0.1;
});

voldown8.addEventListener("click", function () {
  audio8.volume = audio8.volume - 0.1;
});

audio7.addEventListener("timeupdate", function () {
  cur7.max = audio7.duration;
  percentPlayed = (audio7.currentTime / audio7.duration) * 100;
  cur7.value = percentPlayed;
});

audio8.addEventListener("timeupdate", function () {
  cur8.max = audio8.duration;
  percentPlayed = (audio8.currentTime / audio8.duration) * 100;
  cur8.value = percentPlayed;
});
