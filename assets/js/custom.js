(function () {
  "use strict";

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 50) {
      $("#home > .navbar").removeClass("navbar-transparent");
    } else {
      $("#home > .navbar").addClass("navbar-transparent");
    }
  });

  $('a[href="#"]').click(function (event) {
    event.preventDefault();
  });

  $(".bs-component").each(function () {
    var $component = $(this);
    var $button = $(
      '<button class="source-button btn btn-primary btn-xs" role="button" tabindex="0">&lt; &gt;</button>'
    );
    $component.append($button);

    if ($component.find('[data-bs-toggle="tooltip"]').length > 0) {
      $component.attr("data-html", $component.html());
    }
  });

  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var sourceModalElem = document.getElementById("source-modal");
  if (sourceModalElem) {
    var sourceModal = new bootstrap.Modal(
      document.getElementById("source-modal")
    );
  }

  $("body").on("click", ".source-button", function (event) {
    event.preventDefault();

    var component = $(this).parent();
    var html = component.attr("data-html")
      ? component.attr("data-html")
      : component.html();

    html = cleanSource(html);
    html = Prism.highlight(html, Prism.languages.html, "html");
    $("#source-modal code").html(html);
    sourceModal.show();
  });

  function cleanSource(html) {
    html = html
      .replace(/×/g, "&times;")
      .replace(/«/g, "&laquo;")
      .replace(/»/g, "&raquo;")
      .replace(/←/g, "&larr;")
      .replace(/→/g, "&rarr;");

    var lines = html.split(/\n/);

    lines.shift();
    lines.splice(-1, 1);

    var indentSize = lines[0].length - lines[0].trim().length;
    var re = new RegExp(" {" + indentSize + "}");

    lines = lines.map(function (line) {
      if (line.match(re)) {
        line = line.slice(Math.max(0, indentSize));
      }

      return line;
    });

    lines = lines.join("\n");

    return lines;
  }
})();

function smoothScroll() {
  //window.scroll({ top: 42, behavior: 'smooth' })
  document.body.style.overflow = "hidden";
}

window.scroll({ top: 0, behavior: "smooth" });

window.addEventListener("mousemove", (e) => {
  if (e.y < window.innerHeight / 10) {
    window.scroll({ top: 0, behavior: "smooth" });
  } else {
    window.scroll({ top: 42, behavior: "smooth" });
  }
});

var keys = [];

window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key == "c") {
    keys = [];
    keys.push("c");
  } else {
    keys.push(key);
    if (keys.join("") == "secretpasscode") {
      alert("nothing here, but maybe soon");
    }
  }
});

if (localStorage.getItem("reloads") == undefined) {
  localStorage.setItem("reloads", "");
} else {
  localStorage.setItem("reloads", localStorage.getItem("reloads") + ".");

  if (localStorage.getItem("reloads").length > 15) {
    document.getElementById("title").innerText = "Near -3153 72 -550, check the lava";
  } else if (localStorage.getItem("reloads").length > 17) {
    localStorage.setItem("reloads", "");
  }
}


const cheatcode = document.getElementById("cheatcode");

cheatcode.addEventListener("keyup", (e) => {
  const input = cheatcode.value;
});

