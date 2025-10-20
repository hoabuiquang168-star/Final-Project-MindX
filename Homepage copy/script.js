
const courses = [
  { name: "Byway", url: "../shopping/index.html" },
  { name: "Ronald Richards", url: "../shopping/index.html" },
  { name: "React Fundamentals", url: "react.html" },
  { name: "Python Data Analysis", url: "python.html" },
  { name: "UI/UX Design Principles", url: "design.html" },
];

const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");

searchInput.addEventListener("input", e => {
  const query = e.target.value.toLowerCase().trim();
  if (!query) {
    dropdown.style.display = "none";
    return;
  }

  const filtered = courses.filter(c => c.name.toLowerCase().includes(query));
  showResults(filtered);
});

function showResults(filteredCourses) {
  dropdown.innerHTML = "";

  if (filteredCourses.length === 0) {
    dropdown.style.display = "none";
    return;
  }

  filteredCourses.forEach(course => {
    const item = document.createElement("div");
    item.classList.add("dropdown-item");
    item.textContent = course.name;

    item.addEventListener("click", () => handleSelect(course));
    dropdown.appendChild(item);
  });

  dropdown.style.display = "flex";
}

function handleSelect(course) {
  searchInput.value = course.name;
  dropdown.style.display = "none";

 
  window.location.href = course.url;
}


document.addEventListener("click", e => {
  if (!document.querySelector(".search-container").contains(e.target)) {
    dropdown.style.display = "none";
  }
});

