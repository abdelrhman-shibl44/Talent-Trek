// scroll to top
scrollTop = document.querySelector(".top");
scrollTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// start scrollTop option

scrollTopSpan = document.querySelectorAll(".Scroll-option span");
getShowScroll = localStorage.getItem("showScroll");
if (getShowScroll !== null) {
  scrollTopSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (getShowScroll === "block") {
    document.querySelector(".Scroll-option .true").classList.add("active");
    scrollTop.style.display = "block";
  } else {
    document.querySelector(".Scroll-option .false").classList.add("active");
    scrollTop.remove();
  }
}
scrollTopSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive2(span);
    e.target.classList.add("active");
    if (e.target.dataset.scroll === "show") {
      scrollTop.style.display = "block";
      window.location.reload();
      localStorage.setItem("showScroll", "block");
    } else {
      scrollTop.remove();
      localStorage.setItem("showScroll", "display");
    }
  });
});

// End scrollTop option

// make the colors

const mainH = document.querySelector(".mainBox");
function myFunction(x) {
  x.classList.toggle("fa-spin");
  mainH.classList.toggle("open");
}

const color = localStorage.getItem("color-options");

if (localStorage !== null) {
  document.documentElement.style.setProperty("--main-color", color);

  document.querySelectorAll(".colors-list li").forEach((e) => {
    e.classList.remove("active");
    if (e.dataset.color === color) {
      e.classList.add("active");
    }
  });
}
mainColor = localStorage.getItem("color-options");
mainBackground = localStorage.getItem("background-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-options")
  );
  document.documentElement.style.setProperty(
    "--background-color",
    localStorage.getItem("background-option")
  );
}
const colorList = document.querySelectorAll(".colors-list li");
colorList.forEach((li) => {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    document.documentElement.style.setProperty(
      "--background-color",
      e.target.dataset.background
    );
    localStorage.setItem("color-options", e.target.dataset.color);
    localStorage.setItem("background-option", e.target.dataset.background);
    colorList.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// end the colors
// start DarkMode
let getdarkMode_active = localStorage.getItem("darkMode-active");

darkmode = document.querySelector(".dark-mode");
feetBoxP = document.querySelectorAll(".feetBox p");
bodyD = document.querySelector("body");
if (localStorage !== null) {
  if (getdarkMode_active === "active") {
    darkmode.classList.add("active");
    bodyD.classList.add("active");
    feetBoxP.forEach((p) => {
      p.style.color = "#fff";
      localStorage.setItem("darkMode-active", "active");
    });
  } else {
    darkmode.classList.remove("active");
    bodyD.classList.remove("active");
    feetBoxP.forEach((p) => {
      p.style.color = "#444";
    });
  }
}
darkmode.addEventListener("click", (e) => {
  darkmode.classList.toggle("active");
  bodyD.classList.toggle("active");
  if (bodyD.classList.contains("active")) {
    feetBoxP.forEach((p) => {
      p.style.color = "#fff";
      localStorage.setItem("darkMode-active", "active");
    });
  } else {
    feetBoxP.forEach((p) => {
      p.style.color = "#444";
    });
    localStorage.setItem("darkMode-active", "");
  }
});
// End DarkMode
// start nav links

links = document.querySelectorAll(".head-area nav li a ");
links.forEach((a) => {
  a.addEventListener("click", (e) => {
    links.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// start navigation bullets

let getImage = localStorage.getItem("getImage");

if (getImage !== null) {
  document.documentElement.style.setProperty(
    "--background-image",
    localStorage.getItem("--getImage")
  );
}
// start random background
let landing_Page = document.querySelector(".landing_page");
let array = ["land1.webp", "land2.jpg", "land3.webp", "land4.jpg"];
span = document.querySelectorAll(".toggle span");
let clearBackground;
let background = true;

let check = localStorage.getItem("saveBackground");

if (check !== null) {
  if (check === "true") {
    background = true;
  } else {
    background = false;
  }
  span.forEach((e) => {
    e.classList.remove("active");
  });
  if (check === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".no").classList.add("active");
  }
}
span.forEach((span) => {
  span.addEventListener("click", (ele) => {
    handleActive(ele);
    if (ele.target.dataset.back === "yes") {
      background = true;
      localStorage.setItem("saveBackground", true);
      window.location.reload();
    } else {
      background = false;
      clearInterval(clearBackground);
      localStorage.setItem("saveBackground", false);
      window.location.reload();
    }
  });
});

function myIntervalBack() {
  if (background === true) {
    clearBackground = setInterval(() => {
      const randomNumbers = Math.floor(Math.random() * array.length);
      landing_Page.style.backgroundImage =
        "url('images/" + array[randomNumbers] + "')";
    }, 6000);
  }
}
myIntervalBack();

// end random background

// Start orderd background
const img1 = document.querySelector("#btn_1");
const img2 = document.querySelector("#btn_2");
const img3 = document.querySelector("#btn_3");
const img4 = document.querySelector("#btn_4");

Our_button = document.querySelectorAll(".our-imgs button");

Our_button.forEach((button) => {
  button.addEventListener("click", (ele) => {
    handleActive(ele);
    document.documentElement.style.setProperty(
      "--background-image",
      ele.target.dataset.image
    );
    localStorage.setItem("getImage", ele.target.dataset.image);
  });
});
// end orderd background

let skillSpan = document.querySelectorAll(".Our_skills span");
window.onscroll = function () {
  if (this.pageYOffset >= 750) {
    skillSpan.forEach((span) => {
      span.style.width = span.dataset.value;
      scrollTop.style.display = "block";
    });
  } else {
    scrollTop.style.display = "none";
  }
};

bullets = document.querySelectorAll(".navigation-bullets .bullet");
toolTip = document.querySelectorAll(".navigation-bullets .tooltip");
a = document.querySelectorAll(".head-area nav a");

function scrollToSection(elements) {
  elements.forEach(function (ele) {
    ele.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSection(a);
scrollToSection(toolTip);
scrollToSection(bullets);
bullets.forEach((bullet) => {
  bullet.addEventListener("mouseover", (e) => {
    toolTip.forEach((tool) => {
      tool.style.display = "block";
    });
  });
});
document.addEventListener("click", (e) => {
  if (e.target !== toolTip) {
    toolTip.forEach((tool) => {
      tool.style.display = "none";
    });
  }
});
getImgs = document.querySelectorAll(".imgs img");

getImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    // creatOverlay
    let overlay_pop = document.createElement("div");
    overlay_pop.className = "overlay_pop";
    document.body.appendChild(overlay_pop);
    // create Box_pop
    let box_pop = document.createElement("div");
    box_pop.className = "box_pop";
    let head_3 = document.createElement("h3");
    let headText = document.createTextNode(img.alt);
    head_3.appendChild(headText);
    box_pop.appendChild(head_3);
    let imgs = document.createElement("img");
    imgs.src = img.src;
    box_pop.appendChild(imgs);
    document.body.appendChild(box_pop);
    // create close button
    let btn = document.createElement("button");
    btn.className = "btnX";
    let btnText = document.createTextNode("x");
    btn.appendChild(btnText);
    box_pop.appendChild(btn);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.className === "btnX") {
    document.querySelector(".overlay_pop").remove();
    document.querySelector(".box_pop").remove();
    // e.target.parentNode.remove();
  }
});

function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
  ev.target.classList.add("active");
}
function handleActive2(ev) {
  ev.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
}

// start nav-bullets
bulletSpan = document.querySelectorAll(".bullets-option span");
bulletsHolder = document.querySelector(".navigation-bullets");

// get items from localStorage

get_navBullets = localStorage.getItem("nav-bullets");
if (get_navBullets !== null) {
  bulletSpan.forEach((span) => {
    handleActive2(span);
  });
  if (get_navBullets === "block") {
    bulletsHolder.style.display = "block";
    document.querySelector(".true").classList.add("active");
  } else {
    bulletsHolder.style.display = "none";
    document.querySelector(".false").classList.add("active");
  }
}
bulletSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);
    if (span.dataset.display === "show") {
      bulletsHolder.style.display = "block";
      localStorage.setItem("nav-bullets", "block");
    } else {
      bulletsHolder.style.display = "none";
      localStorage.setItem("nav-bullets", "none");
    }
  });
});

// End nav-bullets

document.querySelector(".reset_settings").onclick = function () {
  localStorage.clear();
  window.location.reload();
};

// open and close menu
let nav_button = document.querySelector(".nav-container .nav-btn");
let nav_links = document.querySelector(".nav-container nav");
nav_button.onclick = function (e) {
  e.stopPropagation();
  nav_links.classList.toggle("open");
  this.classList.toggle("menu-active");
  // nav_After.style.display = "block";
};

document.addEventListener("click", (e) => {
  if (e.target !== nav_links && e.target !== nav_button) {
    if (nav_links.classList.contains("open")) {
      nav_links.classList.toggle("open");
      nav_button.classList.toggle("menu-active");
    }
  }
});
nav_links.onclick = function (e) {
  e.stopPropagation();
};

// start run navbarFixed
navbar_span = document.querySelectorAll(".navbar-option span");
nav_open = document.querySelector(".head-area nav ");
nav_container = document.querySelector(".nav-container");

headArea = document.querySelector(".head-area");

get_navbar = localStorage.getItem("get_navbar");
get_navbarSmall = localStorage.getItem("get_navbarSmall");
let mq = window.matchMedia("(max-width: 576px)");

if (get_navbar !== null) {
  navbar_span.forEach((span) => {
    handleActive2(span);
  });
  if (get_navbar === "position:fixed") {
    document.querySelector(".navbar-option .true").classList.add("active");
    headArea.classList.add("sticky");
    headArea.style.cssText = "position:fixed";
  } else {
    document.querySelector(".navbar-option .false").classList.add("active");
    headArea.classList.remove("sticky");
    headArea.style.cssText = "position:relative";
  }
}
navbar_span.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);
    if (span.dataset.running === "show") {
      headArea.classList.add("sticky");
      headArea.style.cssText = "position:fixed";
      localStorage.setItem("get_navbar", "position:fixed");
    } else {
      headArea.classList.remove("sticky");
      headArea.style.cssText = "position:relative";
      localStorage.setItem("get_navbar", "position:relative");
    }
  });
});

// for test
// function countTrue(arr) {
//   let sum = 0
//   let filter = arr.map((boolean) => {
//     let Bool = boolean && boolean
//     if (Bool === true) {
//       return +Bool
//     }
//     return Bool
//     return sum += Bool
//   })

//   // return filter
// }
// countTrue([true, false, false, true, false])


// // without spaces followed by an equal
// function StringChallenge(str) {
//   let right = str.split("*")
//   let result = right[0].length + "=" + right[1].length
//   return result
// }
// StringChallenge('SampleNumber=3234 provider=Dr. M. Welby')

// function BitwiseOne(str) {
//   let firstVal = str[0].split("")
//   let lastVal = str[1].split("")
//   let result = ""

//   for (let i = 0; i < firstVal.length; i++) {
//     if (firstVal[i] === lastVal[i] && firstVal[i] === "0") {
//       result += "0"
//     } else {
//       result += "1"
//     }

//   }
//   console.log(result)
//   return result
// }
// BitwiseOne(["1001", "0001"])







function StringChallenge(str) {
  let ele = str.split("=")
  console.log(ele)
  // let letters = []
  // console.log(ele)
  // for (let i = 0; i < ele.length; i++) {
  //   if (ele[i] == "A B Z T") {
  //     letters.push(ele[i])
  //   }
  // }
  // console.log(letters)
}

StringChallenge("letters=A B Z T")
// numbers = 1 2 26 20 combine = true






// authors










