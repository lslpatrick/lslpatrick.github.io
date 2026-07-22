const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 70}ms`;
  observer.observe(item);
});

const timelineTabs = document.querySelectorAll("[data-timeline-target]");
const timelinePanels = document.querySelectorAll("[data-timeline-panel]");

timelineTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.timelineTarget;

    timelineTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    timelinePanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.timelinePanel === target);
    });
  });
});
