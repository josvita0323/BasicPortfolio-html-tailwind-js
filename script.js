// Dynamic projects array
const projects = [
  {
    title: "Weatherly",
    desc: "Real-time weather updates with animated icons and dark mode.",
  },
  {
    title: "Let's Bake",
    desc: "Bakery website with carousel, card flip, and category filters.",
  },
  {
    title: "Smart Pill Box",
    desc: "IoT-based reminder with Bluetooth syncing and alert system.",
  },
  {
    title: "Unstop Clone",
    desc: "Manage events, coding rounds, and quizzes with role-based login.",
  },
  {
    title: "Josvita Blog",
    desc: "Modern blog with Markdown posts and tag filtering.",
  },
  {
    title: "DevLinkUp",
    desc: "LinkedIn-style social platform built in Bubble with real-time feeds.",
  },
];

const container = document.querySelector("#portfolio .grid");
projects.forEach((proj) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer";
  card.innerHTML = `
    <div class="h-48 bg-orange-200 flex items-center justify-center text-orange-500 font-bold text-xl text-center px-4">
      ${proj.title}
    </div>
    <div class="p-6">
      <h4 class="font-semibold text-lg mb-2">${proj.title}</h4>
      <p class="text-gray-700 text-sm">${proj.desc}</p>
    </div>
  `;
  container.appendChild(card);
});

// Scroll to top button
const btn = document.createElement("button");
btn.innerHTML = "↑";
btn.className =
  "fixed bottom-6 right-6 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 hidden";
btn.title = "Back to Top";
btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
document.body.appendChild(btn);

window.addEventListener("scroll", () => {
  btn.classList.toggle("hidden", window.scrollY < 300);
});
