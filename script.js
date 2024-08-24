function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
/documents/ezgif-frame-001.jpg
/documents/ezgif-frame-002.jpg
/documents/ezgif-frame-003.jpg
/documents/ezgif-frame-004.jpg
/documents/ezgif-frame-005.jpg
/documents/ezgif-frame-006.jpg
/documents/ezgif-frame-007.jpg
/documents/ezgif-frame-008.jpg
/documents/ezgif-frame-009.jpg
/documents/ezgif-frame-010.jpg
/documents/ezgif-frame-011.jpg
/documents/ezgif-frame-012.jpg
/documents/ezgif-frame-013.jpg
/documents/ezgif-frame-014.jpg
/documents/ezgif-frame-015.jpg
/documents/ezgif-frame-016.jpg
/documents/ezgif-frame-017.jpg
/documents/ezgif-frame-018.jpg
/documents/ezgif-frame-019.jpg
/documents/ezgif-frame-020.jpg
/documents/ezgif-frame-021.jpg
/documents/ezgif-frame-022.jpg
/documents/ezgif-frame-023.jpg
/documents/ezgif-frame-024.jpg
/documents/ezgif-frame-025.jpg
/documents/ezgif-frame-026.jpg
/documents/ezgif-frame-027.jpg
/documents/ezgif-frame-028.jpg
/documents/ezgif-frame-029.jpg
/documents/ezgif-frame-030.jpg
/documents/ezgif-frame-031.jpg
/documents/ezgif-frame-032.jpg
/documents/ezgif-frame-033.jpg
/documents/ezgif-frame-034.jpg
/documents/ezgif-frame-035.jpg
/documents/ezgif-frame-036.jpg
/documents/ezgif-frame-037.jpg
/documents/ezgif-frame-038.jpg
/documents/ezgif-frame-039.jpg
/documents/ezgif-frame-040.jpg
/documents/ezgif-frame-041.jpg
/documents/ezgif-frame-042.jpg
/documents/ezgif-frame-043.jpg
/documents/ezgif-frame-044.jpg
/documents/ezgif-frame-045.jpg
/documents/ezgif-frame-046.jpg
/documents/ezgif-frame-047.jpg
/documents/ezgif-frame-048.jpg
/documents/ezgif-frame-049.jpg
/documents/ezgif-frame-050.jpg
/documents/ezgif-frame-051.jpg
/documents/ezgif-frame-052.jpg
/documents/ezgif-frame-053.jpg
/documents/ezgif-frame-054.jpg
/documents/ezgif-frame-055.jpg
/documents/ezgif-frame-056.jpg
/documents/ezgif-frame-057.jpg
/documents/ezgif-frame-058.jpg
/documents/ezgif-frame-059.jpg
/documents/ezgif-frame-060.jpg
/documents/ezgif-frame-061.jpg
/documents/ezgif-frame-062.jpg
/documents/ezgif-frame-063.jpg
/documents/ezgif-frame-064.jpg
/documents/ezgif-frame-065.jpg
/documents/ezgif-frame-066.jpg
/documents/ezgif-frame-067.jpg
/documents/ezgif-frame-068.jpg
/documents/ezgif-frame-069.jpg
/documents/ezgif-frame-070.jpg
/documents/ezgif-frame-071.jpg
/documents/ezgif-frame-072.jpg
/documents/ezgif-frame-073.jpg
/documents/ezgif-frame-074.jpg
/documents/ezgif-frame-075.jpg
/documents/ezgif-frame-076.jpg
/documents/ezgif-frame-077.jpg
/documents/ezgif-frame-078.jpg
/documents/ezgif-frame-079.jpg
/documents/ezgif-frame-080.jpg
/documents/ezgif-frame-081.jpg
/documents/ezgif-frame-082.jpg
/documents/ezgif-frame-083.jpg
/documents/ezgif-frame-084.jpg
/documents/ezgif-frame-085.jpg
/documents/ezgif-frame-086.jpg
/documents/ezgif-frame-087.jpg
/documents/ezgif-frame-088.jpg
/documents/ezgif-frame-089.jpg
/documents/ezgif-frame-090.jpg
/documents/ezgif-frame-091.jpg
/documents/ezgif-frame-092.jpg
/documents/ezgif-frame-093.jpg
/documents/ezgif-frame-094.jpg
/documents/ezgif-frame-095.jpg
/documents/ezgif-frame-096.jpg
/documents/ezgif-frame-097.jpg
/documents/ezgif-frame-098.jpg
/documents/ezgif-frame-099.jpg
/documents/ezgif-frame-100.jpg
/documents/ezgif-frame-101.jpg
/documents/ezgif-frame-102.jpg
/documents/ezgif-frame-103.jpg
/documents/ezgif-frame-104.jpg
/documents/ezgif-frame-105.jpg
/documents/ezgif-frame-106.jpg
/documents/ezgif-frame-107.jpg
/documents/ezgif-frame-108.jpg
/documents/ezgif-frame-109.jpg
/documents/ezgif-frame-110.jpg
/documents/ezgif-frame-111.jpg
/documents/ezgif-frame-112.jpg
/documents/ezgif-frame-113.jpg
/documents/ezgif-frame-114.jpg
/documents/ezgif-frame-115.jpg
/documents/ezgif-frame-116.jpg
/documents/ezgif-frame-117.jpg
/documents/ezgif-frame-118.jpg
/documents/ezgif-frame-119.jpg
/documents/ezgif-frame-120.jpg
/documents/ezgif-frame-121.jpg
/documents/ezgif-frame-122.jpg
/documents/ezgif-frame-123.jpg
/documents/ezgif-frame-124.jpg
/documents/ezgif-frame-125.jpg
/documents/ezgif-frame-126.jpg
/documents/ezgif-frame-127.jpg
/documents/ezgif-frame-128.jpg
/documents/ezgif-frame-129.jpg
/documents/ezgif-frame-130.jpg
/documents/ezgif-frame-131.jpg
/documents/ezgif-frame-132.jpg
/documents/ezgif-frame-133.jpg
/documents/ezgif-frame-134.jpg
/documents/ezgif-frame-135.jpg
/documents/ezgif-frame-136.jpg
/documents/ezgif-frame-137.jpg
/documents/ezgif-frame-138.jpg
/documents/ezgif-frame-139.jpg
/documents/ezgif-frame-140.jpg
/documents/ezgif-frame-141.jpg
/documents/ezgif-frame-142.jpg
/documents/ezgif-frame-143.jpg
/documents/ezgif-frame-144.jpg
/documents/ezgif-frame-145.jpg
/documents/ezgif-frame-146.jpg

 
 `;
  return data.split("\n")[index];
}

const frameCount = 146;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});




// document.getElementById('navbar-toggle').addEventListener('click', function() {
//     document.getElementById('navbar-menu').classList.toggle('active');
// });

gsap.to(".navbar", {
    opacity: 1,       // Make the navbar fully visible
    y: 0,             // Move the navbar to its original position (from translateY)
    duration: 1,      // The duration of the animation (1 second)
    ease: "power2.out" // A smooth easing function for a natural animation
});





var tl = gsap.timeline()
tl.from("#loader h3",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.8
})

tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
}
)

tl.to("#loader",{
    opacity:0
})

tl.to("#loader",{
   display:"none"
})


// tl.to("#text-animation span", {
//   opacity: 1,
//   y: 20, // Start 20px below
//   delay:0.5,
//   stagger: 0.15, // Animate each letter with a 0.1s delay between them
//   ease: "power2.out"
// });


// Initialize variables to track touch position
let touchStartY = 0;
let touchEndY = 0;

// Handle wheel scroll for desktops
window.addEventListener("wheel", function(dets) {
    if (dets.deltaY > 0) {
        animateScrollForward();
    } else {
        animateScrollBackward();
    }
});

// Handle touch events for mobile devices
window.addEventListener("touchstart", function(e) {
    touchStartY = e.touches[0].clientY;
});

window.addEventListener("touchmove", function(e) {
    touchEndY = e.touches[0].clientY;
});

window.addEventListener("touchend", function() {
    if (touchStartY > touchEndY) {
        animateScrollForward();
    } else if (touchStartY < touchEndY) {
        animateScrollBackward();
    }
});

// Function to animate forward scroll
function animateScrollForward() {
    gsap.to("#marque", {
        xPercent: -200, // Move the element 200% of its width to the left
        duration: 5,   // Duration of the animation in seconds
        ease: "linear", // Linear easing for smooth constant speed
        repeat: -1      // Repeat the animation indefinitely
    });
    gsap.to("#marque img", {
        rotate: 195,
    });
    gsap.to(".scroll-icon-container", {
        rotate: 0,
    });
}

// Function to animate backward scroll
function animateScrollBackward() {
    gsap.to("#marque", {
        xPercent: 0, // Move the element back to its original position
        duration: 5,   // Duration of the animation in seconds
        ease: "linear", // Linear easing for smooth constant speed
        repeat: -1      // Repeat the animation indefinitely
    });
    gsap.to("#marque img", {
        rotate: 0,
    });
    gsap.to(".scroll-icon-container", {
        rotate: 180,
    });
}





var page1Content=document.querySelector("#page")
var cursor = document.querySelector("#cursor")
page1Content.addEventListener("mousemove",function(dets){
console.log(dets);

gsap.to(cursor,{
    x:dets.x,
    y:dets.y
})
    
})

page1Content.addEventListener("mouseenter",function(dets){
    //    cursor.style.left = dets.x+"px"
    //    cursor.style.top=dets.y+"px"
    gsap.to(cursor,{
        scale:1,
       opacity:1
    })
        
    })

    page1Content.addEventListener("mouseleave",function(dets){
        //    cursor.style.left = dets.x+"px"
        //    cursor.style.top=dets.y+"px"
        gsap.to(cursor,{
            scale:0,
          opacity:0
        })
            
        })

//         const observer = new IntersectionObserver((entries)=>{
//           entries.forEach((entry)=>{
//             if(entry.isIntersecting){
//               entry.target.classList.add('show')
//             }
//             else{
//               entry.target.classList.remove('show')
//             }
//           })
//         })
// const hidden = document.querySelectorAll(".container")
// const hiddenelems = document.querySelectorAll('.container')
// hiddenelems.forEach((el)=>observer.observe(el))


// document.addEventListener('DOMContentLoaded', function () {
//   const projectListItems = document.querySelectorAll('.project-list li');
//   const videoSource = document.getElementById('video-source');
//   const projectVideo = document.getElementById('project-video');

//   projectListItems.forEach(item => {
//       item.addEventListener('click', function () {
//           const videoFile = this.getAttribute('data-video');
//           videoSource.src = videoFile;
//           projectVideo.load();
//           projectVideo.play();
//       });
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  const projectListItems = document.querySelectorAll('.project-list li');
  const projectVideo = document.getElementById('project-video');
  const projectDescription = document.getElementById('project-description');

  projectListItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
          const videoFile = this.getAttribute('data-video');
          const description = this.getAttribute('data-description');

          gsap.to('.video-container', {
            opacity: 1,
            
           
        });

          // Change the video source with GSAP animation
          gsap.to(projectVideo, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                  projectVideo.src = videoFile;
                  projectVideo.load();
                  projectVideo.play();
                  gsap.to(projectVideo, { opacity: 1, duration: 0.5 });
              }
          });

          gsap.to(projectDescription, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                projectDescription.innerText = description;
                gsap.to(projectDescription, { opacity: 1, duration: 0.5 });
            }
        });
      });

      item.addEventListener('mouseleave', function () {
          // Optional: You can keep the video playing or pause/reset it on hover out
          gsap.to(projectVideo, {
            opacity: 0,
           
           
        });

      });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  // Animation for the line
  gsap.from('.timeline-svg line', {
      strokeDashoffset: 1000,
      strokeDasharray: 1000,
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,            // Repeat indefinitely
      repeatDelay: 2,        // Delay between repeats
      yoyo: true             // Makes the animation reverse
  });

  // Animation for the circles
  gsap.from('.timeline-svg circle', {
      scale: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'bounce.out',
      repeat: -1,            // Repeat indefinitely
      repeatDelay: 2,        // Delay between repeats
  });

  // Animation for the text
  gsap.from('.timeline-svg text', {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.inOut',
            // Repeat indefinitely
      repeatDelay: 2,        // Delay between repeats
  });
});