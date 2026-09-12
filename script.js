// ======================================
// HER NAME
// ======================================

const herName = "My ROD🥺";


// Put her name automatically
const nameElement = document.querySelector(".name");

if (nameElement) {
    nameElement.textContent = herName;
}


// ======================================
// SECTION NAVIGATION
// ======================================

function nextSection(sectionId) {

    const currentSection = document.querySelector(".section.active");
    const next = document.getElementById(sectionId);

    if (!next) return;

    if (currentSection) {
        currentSection.classList.remove("active");
    }

    // Start the new section
    setTimeout(() => {

        next.classList.add("active");

        // Always start the new section from the top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

    }, 120);
}


// ======================================
// YES / NO BUTTONS
// ======================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");
const buttonArea = document.getElementById("buttonArea");


// ======================================
// YES BUTTON
// ======================================

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        if (finalMessage) {
            finalMessage.classList.add("show");
        }

        createHearts();

        yesBtn.style.display = "none";

        if (noBtn) {
            noBtn.style.display = "none";
        }

    });

}


// ======================================
// NO BUTTON
// Runs away 😂
// ======================================

function moveNoButton() {

    if (!noBtn) return;

    const padding = 12;

    /*
        Get the real size of the button
        before moving it.
    */

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;


    /*
        Keep the button completely
        inside the phone / screen.
    */

    const maxX = Math.max(
        padding,
        viewportWidth - buttonWidth - padding
    );

    const maxY = Math.max(
        padding,
        viewportHeight - buttonHeight - padding
    );


    /*
        Random position inside viewport.
    */

    const x =
        padding +
        Math.random() * Math.max(0, maxX - padding);

    const y =
        padding +
        Math.random() * Math.max(0, maxY - padding);


    /*
        Fixed positioning means:
        - it doesn't increase page width
        - it doesn't create horizontal scroll
        - it stays relative to the screen
    */

    noBtn.classList.add("is-moving");

    noBtn.style.left = `${Math.round(x)}px`;
    noBtn.style.top = `${Math.round(y)}px`;
    noBtn.style.right = "auto";
    noBtn.style.bottom = "auto";
}


// ======================================
// DESKTOP
// ======================================

if (noBtn) {

    noBtn.addEventListener("mouseenter", () => {
        moveNoButton();
    });

}


// ======================================
// MOBILE
// ======================================

if (noBtn) {

    noBtn.addEventListener("touchstart", (event) => {

        event.preventDefault();

        moveNoButton();

    }, {
        passive: false
    });

}


// ======================================
// PREVENT ACCIDENTAL CLICK ON NO
// ======================================

if (noBtn) {

    noBtn.addEventListener("click", (event) => {

        event.preventDefault();

        moveNoButton();

    });

}


// ======================================
// KEEP NO BUTTON INSIDE SCREEN
// AFTER RESIZING / ROTATION
// ======================================

window.addEventListener("resize", () => {

    if (!noBtn) return;

    if (noBtn.classList.contains("is-moving")) {
        moveNoButton();
    }

});


// ======================================
// HEARTS CELEBRATION
// ======================================

function createHearts() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;

        heart.style.fontSize =
            `${15 + Math.random() * 25}px`;

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "99999";


        document.body.appendChild(heart);


        const animation = heart.animate(

            [
                {
                    transform: "translateY(0) scale(0)",
                    opacity: 0
                },

                {
                    transform: "translateY(-80px) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(-${200 + Math.random() * 300}px)
                         rotate(360deg)`,

                    opacity: 0
                }
            ],

            {
                duration: 1500 + Math.random() * 1500,

                easing: "ease-out"
            }

        );


        animation.onfinish = () => {
            heart.remove();
        };

    }

}


// ======================================
// ENTER KEY
// ======================================

document.addEventListener("keydown", (event) => {

    if (event.key !== "Enter") return;

    const active =
        document.querySelector(".section.active");

    if (active && active.id === "welcome") {

        nextSection("apology");

    }

});