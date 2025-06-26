const events = [
  {
    date: "Sep, 2024",
    title: "Event Alpha",
    subtitle: "a pre gravitas or smth",
    description: "Event Alpha is all about music, rhythm, and creative coding with sound.",
    image: "https://via.placeholder.com/400x400?text=Alpha"
  },
  {
    date: "Oct, 2024",
    title: "Event Beta",
    subtitle: "a pre gravitas or smth",
    description: "Beta brings together tech and art in an explosive visual experience.",
    image: "https://via.placeholder.com/400x400?text=Beta"
  },
  {
    date: "Nov, 2024",
    title: "Event Gamma",
    subtitle: "a pre gravitas or smth",
    description: "Gamma focuses on AI, storytelling, and interactive installations.",
    image: "https://via.placeholder.com/400x400?text=Gamma"
  },
  // Add more events as needed
];

const timelineList = document.getElementById("timeline-list");
const title = document.getElementById("event-title");
const subtitle = document.getElementById("event-subtitle");
const description = document.getElementById("event-description");
const image = document.getElementById("event-image");

events.forEach((event, index) => {
  const li = document.createElement("li");
  li.textContent = event.date;
  li.addEventListener("click", () => {
    updateEvent(index);
    document.querySelectorAll(".timeline li").forEach(item => item.classList.remove("active"));
    li.classList.add("active");
  });
  if (index === 0) li.classList.add("active");
  timelineList.appendChild(li);
});

function updateEvent(index) {
  const event = events[index];
  title.textContent = event.title;
  subtitle.textContent = event.subtitle;
  description.textContent = event.description;
  image.src = event.image;
}
