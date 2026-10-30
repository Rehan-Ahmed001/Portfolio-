/* ==========================================================================
   Rehan Ahmed — Portfolio
   Behaviour: header state, mobile menu, active nav, reveal, counters, form
   No dependencies. All features degrade gracefully without JS.
   ========================================================================== */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Header: solid on scroll ---------- */
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        setMenu(false);
      }
    });
  }

  /* ---------- Active section in nav ---------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav__link")
  );
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var setActive = function (id) {
      navLinks.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
      });
    };

    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- Metric count-up ---------- */
  var counters = Array.prototype.slice.call(
    document.querySelectorAll("[data-count]")
  );

  var runCounter = function (el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    if (!isFinite(target)) return;

    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }

    var duration = 1400;
    var start = null;

    var step = function (timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(runCounter);
    } else {
      var counterObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );

      counters.forEach(function (el) {
        counterObserver.observe(el);
      });
    }
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");

  var emailLink = document.querySelector(".contact__email");
  var contactEmail =
    emailLink && emailLink.getAttribute("href")
      ? emailLink.getAttribute("href").replace("mailto:", "").split("?")[0]
      : "";

  var rules = {
    name: function (value) {
      return value.trim().length >= 2 ? "" : "Please enter your name.";
    },
    email: function (value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
        ? ""
        : "Please enter a valid email address.";
    },
    message: function (value) {
      return value.trim().length >= 10
        ? ""
        : "Tell me a little more — at least 10 characters.";
    }
  };

  var showError = function (field, message) {
    var wrapper = field.closest(".field");
    var errorEl = wrapper ? wrapper.querySelector(".field__error") : null;
    if (wrapper) wrapper.classList.toggle("is-invalid", Boolean(message));
    if (errorEl) errorEl.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
  };

  var validateField = function (field) {
    var rule = rules[field.name];
    var message = rule ? rule(field.value) : "";
    showError(field, message);
    return !message;
  };

  if (form) {
    var fields = Array.prototype.slice.call(
      form.querySelectorAll("input, textarea")
    );

    fields.forEach(function (field) {
      field.addEventListener("blur", function () {
        validateField(field);
      });
      field.addEventListener("input", function () {
        if (field.closest(".field").classList.contains("is-invalid")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var firstInvalid = null;
      fields.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) {
          firstInvalid = field;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        if (note) note.textContent = "Please fix the highlighted fields.";
        return;
      }

      if (!contactEmail) {
        if (note) note.textContent = "Add your email address to enable sending.";
        return;
      }

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();

      var subject = "New project enquiry from " + name;
      var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;

      window.location.href =
        "mailto:" +
        contactEmail +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      if (note) {
        note.textContent = "Opening your email app — just press send.";
      }
      form.reset();
    });
  }
})();
