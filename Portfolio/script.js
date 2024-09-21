// تفعيل القائمة الرئيسية
function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

// الوضع الليلي (Dark Mode)
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// تأثير الكتابة (Typing Effect)
var typingEffect = new Typed(".typedText", {
    strings: [ "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

// تأثير التمرير (Scroll Animation)
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".Project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

// srRight.reveal(".skill", { delay: 100 });
// srRight.reveal(".skill-box", { delay: 100 });

// تفعيل الرابط النشط بناءً على التمرير (Active Link)
const sections = document.querySelectorAll(".section[id]");
const homeLink = document.querySelector('.nav-menu a[href="#home"]');

function scrollActive() {
    const scrollY = window.pageYOffset; // الحصول على قيمة التمرير العمودية
    let activeSectionFound = false; // للتحقق مما إذا تم العثور على قسم نشط أم لا

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // تعويض الفروقات
        const sectionId = current.getAttribute("id");

        // التحقق من موقع التمرير بالنسبة للقسم الحالي
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
            activeSectionFound = true; // تم العثور على قسم نشط
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });

    // إذا لم يتم العثور على قسم نشط، فهذا يعني أننا في قسم "Home"
    if (!activeSectionFound) {
        homeLink.classList.add("active-link");
    } else {
        homeLink.classList.remove("active-link");
    }
}

// إضافة مستمع التمرير إلى النافذة
window.addEventListener("scroll", scrollActive);

// إضافة الرابط النشط عند تحميل الصفحة إلى "Home"
window.onload = () => {
    scrollActive(); // تفعيل الرابط النشط عند التحميل الأولي
};
