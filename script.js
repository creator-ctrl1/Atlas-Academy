function showSubjects(level) {
  document.getElementById("levels").classList.add("hidden");
  document.getElementById("subjects").classList.remove("hidden");
}

function goBack() {
  document.getElementById("subjects").classList.add("hidden");
  document.getElementById("levels").classList.remove("hidden");
}
