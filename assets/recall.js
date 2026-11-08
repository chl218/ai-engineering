/* Reusable free-recall component.
   Markup:
     <div class="recall">
       <textarea placeholder="..."></textarea>
       <p><button class="btn" type="button" data-reveal>Check against the answer</button></p>
       <div class="answer">...</div>
     </div>
   The learner writes from memory first; the answer only appears after they click. */
document.querySelectorAll(".recall").forEach(function (box) {
  var btn = box.querySelector("[data-reveal]");
  if (!btn) return;
  btn.addEventListener("click", function () {
    box.classList.add("open");
    btn.disabled = true;
  });
});
