/* Reusable quiz component.
   Usage in a lesson: add a div with id="quiz" and class "quiz", then a JSON script
   element with id="quiz-data" holding an array of objects shaped like
   { "q": "...", "options": ["a","b","c","d"], "answer": 0, "why": "..." },
   then load this file with a script tag.
   Options are shuffled on every attempt. Feedback is immediate. Missed questions can be retried.
   NOTE: never write a closing script tag in this file; it breaks inlined copies. */
(function () {
  var root = document.getElementById("quiz");
  var dataEl = document.getElementById("quiz-data");
  if (!root || !dataEl) return;

  var all = JSON.parse(dataEl.textContent);

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function run(items) {
    root.innerHTML = "";
    var correct = 0, answered = 0, missed = [];
    var score = el("p", "quiz-score");
    var actions = el("p");

    items.forEach(function (item, idx) {
      var card = el("div", "q");
      card.appendChild(el("div", "num", "Question " + (idx + 1) + " of " + items.length));
      card.appendChild(el("p", "prompt", item.q));

      var opts = shuffle(item.options.map(function (text, i) { return { text: text, right: i === item.answer }; }));
      var buttons = [];

      opts.forEach(function (o) {
        var b = el("button", "opt", o.text);
        b.type = "button";
        b.addEventListener("click", function () {
          buttons.forEach(function (x) { x.disabled = true; });
          answered++;
          var why = el("p", "why");
          if (o.right) {
            correct++;
            b.classList.add("correct");
            why.classList.add("ok");
            why.appendChild(el("strong", null, "Correct. "));
          } else {
            missed.push(item);
            b.classList.add("wrong");
            buttons.forEach(function (x, k) { if (opts[k].right) x.classList.add("correct"); });
            why.classList.add("no");
            why.appendChild(el("strong", null, "Not quite. "));
          }
          why.appendChild(el("span", null, item.why));
          card.appendChild(why);
          if (answered === items.length) finish();
        });
        buttons.push(b);
        card.appendChild(b);
      });
      root.appendChild(card);
    });

    root.appendChild(score);
    root.appendChild(actions);

    function finish() {
      score.textContent = "You got " + correct + " of " + items.length + ".";
      if (missed.length) {
        var retry = el("button", "btn", "Retry the " + missed.length + " you missed");
        retry.type = "button";
        retry.addEventListener("click", function () { run(missed); root.scrollIntoView({ behavior: "smooth" }); });
        actions.appendChild(retry);
        actions.appendChild(document.createTextNode(" "));
      }
      var again = el("button", "btn ghost", "Start over");
      again.type = "button";
      again.addEventListener("click", function () { run(shuffle(all)); root.scrollIntoView({ behavior: "smooth" }); });
      actions.appendChild(again);
    }
  }

  run(all);
})();
