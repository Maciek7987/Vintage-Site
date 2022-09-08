

  const hamburger = document.querySelector("span.hamburger");
  const divGreyMove = document.querySelector("div.only-grey-move-background");
  const headerButton1 = document.querySelector("a.only-to-js-1"); //link Home at website
  const headerButton2 = document.querySelector("a.only-to-js-2"); //link Under
  const video = document.querySelector("video");
  video.play();
  let informationToShowText = []; //global scope

  const a = document.querySelectorAll("a");
  const aboutMe = document.querySelector("article.articles_about-me");
  const lorem = document.querySelector("article.articles_lorem");

  //span.hamburger -> div.line-one,div.line-two
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    divGreyMove.classList.toggle("moved"); //in style.css divGreyMove out of left:-36vw gets 0
    hamburger.classList.toggle("moved");
    informationToShowText[0] = divGreyMove.classList.contains("moved"); //true or false
    if (divGreyMove.classList.contains("moved")) {
      //sliding background is shown, links begin animation and video gets new values in style.css
      video.pause();
    } else {
      lorem.classList.remove("show"); //texts gets display: none;
      aboutMe.classList.remove("show");

      const newArryToHaveRemove = [...a].filter(
        //create new array and assign it all links which are different from link Under and link Home
        (item) => item != headerButton1 && item != headerButton2
      );
      console.log(newArryToHaveRemove);
      removeActiveClass(newArryToHaveRemove); //function below
      video.play();
    }
  });

  //it is a white line after click
  a.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault;
      removeActiveClass(a); //remove from all links but below is immediately add class "active"

      item.children[0].classList.toggle("active"); // this element at html <div class="header_nav-menu-list-item-line every-line"/>
      informationToShowText[1] = item; //item is a clicked target which is assign to second place in array

      //based on whether clicked link is Lorem or About Me and whether background is showing after click hamburger show text
      showMeAText(informationToShowText[0], informationToShowText[1]);
    });
  });

  function removeActiveClass(whichHaveToRemove) {
    for (let i = 0; i < whichHaveToRemove.length; i++) {
      const arrOfChildA = whichHaveToRemove[i].children; //sequentially assigns this white line
      if (arrOfChildA[0]) {
        if (arrOfChildA[0].classList.contains("active")) {
          arrOfChildA[0].classList.remove("active");
        }
      }
    }
  }

  function showMeAText(infoAboutBackground, infoAboutClickedLink) {
    if (
      infoAboutBackground &&
      infoAboutClickedLink.classList.contains("a-on-background-one")
    ) {
      lorem.classList.remove("show");
      aboutMe.classList.add("show");
    }
    if (
      infoAboutBackground &&
      infoAboutClickedLink.classList.contains("a-on-background-two")
    ) {
      aboutMe.classList.remove("show");
      lorem.classList.add("show");
    }
  }

  //////////////////////
  const waves = document.querySelector("div.audio-wave");
  const gAll = document.querySelectorAll("g");
  const audio = document.querySelector("audio");
  let animateofHeightSl = [];
  audio.volume = 0.2;

  //a function to pause or play music
  const togglePlayPauseAudio = () => {
    return audio.paused ? audio.play() : audio.pause();
  };

  waves.addEventListener("click", (e) => {
    e.preventDefault;
    waves.classList.remove("firstView");

    togglePlayPauseAudio();

    if (audio.paused) {
      //a function to slowly decrese volume or increase

      waves.classList.add("stop");
      [...gAll].forEach((sl, index) => {
        animateofHeightSl[index] = sl.animate(
          [
            // keyframes
            { height: sl.clientHeight + "px" },
            { height: "3px" },
          ],
          {
            // timing options
            fill: "forwards",
            duration: 500,
          }
        );
      });
    } else {
      console.log("audio is played");

      //a function to slowly decrese volume or increase
      waves.classList.remove("stop");
      for (let i = 0; i < animateofHeightSl.length; i++) {
        animateofHeightSl[i].cancel();
      }
      //turn on for sound
    }
  });

  ////////////////
  const sectionSoundBgc = document.getElementById(
    "dark-background-to-question"
  );

  //function to off background after .8s if was clicked
  function closeSoundBgc() {
    sectionSoundBgc.classList.add("effectToClose");
    setTimeout(() => {
      sectionSoundBgc.style.display = "none";
    }, 800);
  }

  sectionSoundBgc.addEventListener("click", closeSoundBgc);
  //or close automaticly after 3.5s + .8s
  setTimeout(closeSoundBgc, 3500);

  /////////////////
  const infoIcon = document.getElementById("info-icon");

  //after click from under is eject background with information
  infoIcon.addEventListener("click", (e) => {
    e.preventDefault;
    if (e.target.parentElement.classList.contains("showed")) {
      e.target.parentElement.style.transform = "translateY(0)";
      e.target.parentElement.classList.remove("showed");
    } else {
      e.target.parentElement.style.transform = "translateY(-50%)";
      e.target.parentElement.classList.add("showed");
    }
  });

