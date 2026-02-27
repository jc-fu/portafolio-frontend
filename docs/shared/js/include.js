async function includeHTML() {
  const includes = document.querySelectorAll("[data-include]");
  for (const el of includes) {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    if (!res.ok) {
      el.innerHTML = `<p style="color:red">No pude cargar ${file}</p>`;
      continue;
    }
    el.innerHTML = await res.text();
  }
}
document.addEventListener("DOMContentLoaded", includeHTML);