function toggleText() {
  let toggle = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");

  toggle.addEventListener("click", function() {
    if (text.hidden == false) {
      text.hidden = true;
    } else {text.hidden = false;}
  }
  );
}
