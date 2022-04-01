let audio = document.getElementById("audio");
let pause = document.getElementById("pause");
let play = document.getElementById("play");
let volup = document.getElementById("volup");
let voldown = document.getElementById("voldown");
let cur = document.getElementById("cur");
let audio2 = document.getElementById("audio2");
let pause2 = document.getElementById("pause2");
let play2 = document.getElementById("play2");
let volup2 = document.getElementById("volup2");
let voldown2 = document.getElementById("voldown2");
let cur2 = document.getElementById("cur2");
let audio3 = document.getElementById("audio3");
let pause3 = document.getElementById("pause3");
let play3 = document.getElementById("play3");
let volup3 = document.getElementById("volup3");
let voldown3 = document.getElementById("voldown3");
let cur3 = document.getElementById("cur3");
let audio4 = document.getElementById("audio4");
let pause4 = document.getElementById("pause4");
let play4 = document.getElementById("play4");
let volup4 = document.getElementById("volup4");
let voldown4 = document.getElementById("voldown4");
let cur4 = document.getElementById("cur4");
let audio5 = document.getElementById("audio5");
let pause5 = document.getElementById("pause5");
let play5 = document.getElementById("play5");
let volup5 = document.getElementById("volup5");
let voldown5 = document.getElementById("voldown5");
let cur5 = document.getElementById("cur5");
let audio6 = document.getElementById("audio6");
let pause6 = document.getElementById("pause6");
let play6 = document.getElementById("play6");
let volup6 = document.getElementById("volup6");
let voldown6 = document.getElementById("voldown6");
let cur6 = document.getElementById("cur6");

pause.addEventListener("click", function () {
  audio.pause();
});

pause2.addEventListener("click", function () {
  audio2.pause();
});

pause3.addEventListener("click", function () {
  audio3.pause();
});

pause4.addEventListener("click", function () {
  audio4.pause();
});

pause5.addEventListener("click", function () {
  audio5.pause();
});

pause6.addEventListener("click", function () {
  audio6.pause();
});

play.addEventListener("click", function () {
  audio.play();
});

play2.addEventListener("click", function () {
  audio2.play();
});

play3.addEventListener("click", function () {
  audio3.play();
});

play4.addEventListener("click", function () {
  audio4.play();
});

play5.addEventListener("click", function () {
  audio5.play();
});

play6.addEventListener("click", function () {
  audio6.play();
});

volup.addEventListener("click", function () {
  audio.volume = audio.volume + 0.1;
});

volup2.addEventListener("click", function () {
  audio2.volume = audio2.volume + 0.1;
});

volup3.addEventListener("click", function () {
  audio3.volume = audio3.volume + 0.1;
});

volup4.addEventListener("click", function () {
  audio4.volume = audio4.volume + 0.1;
});

volup5.addEventListener("click", function () {
  audio5.volume = audio5.volume + 0.1;
});

volup6.addEventListener("click", function () {
  audio6.volume = audio6.volume + 0.1;
});

voldown.addEventListener("click", function () {
  audio.volume = audio.volume - 0.1;
});

voldown2.addEventListener("click", function () {
  audio2.volume = audio2.volume - 0.1;
});

voldown3.addEventListener("click", function () {
  audio3.volume = audio3.volume - 0.1;
});

voldown4.addEventListener("click", function () {
  audio4.volume = audio4.volume - 0.1;
});

voldown5.addEventListener("click", function () {
  audio5.volume = audio5.volume - 0.1;
});

voldown6.addEventListener("click", function () {
  audio6.volume = audio6.volume - 0.1;
});

audio.addEventListener("timeupdate", function () {
  cur.max = audio.duration;
  percentPlayed = (audio.currentTime / audio.duration) * 100;
  cur.value = percentPlayed;
});

audio2.addEventListener("timeupdate", function () {
  cur2.max = audio2.duration;
  percentPlayed = (audio2.currentTime / audio2.duration) * 100;
  cur2.value = percentPlayed;
});

audio3.addEventListener("timeupdate", function () {
  cur3.max = audio3.duration;
  percentPlayed = (audio3.currentTime / audio3.duration) * 100;
  cur3.value = percentPlayed;
});

audio4.addEventListener("timeupdate", function () {
  cur4.max = audio4.duration;
  percentPlayed = (audio4.currentTime / audio4.duration) * 100;
  cur4.value = percentPlayed;
});

audio5.addEventListener("timeupdate", function () {
  cur5.max = audio5.duration;
  percentPlayed = (audio5.currentTime / audio5.duration) * 100;
  cur5.value = percentPlayed;
});

audio6.addEventListener("timeupdate", function () {
  cur6.max = audio5.duration;
  percentPlayed = (audio6.currentTime / audio6.duration) * 100;
  cur6.value = percentPlayed;
});
