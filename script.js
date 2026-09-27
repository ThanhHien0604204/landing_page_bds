/**
 * Vinhomes Grand Park Landing Page JavaScript
 * Vanilla JavaScript thuần - Không backend, Không external JS framework
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // 1. Header scroll effect
  const siteHeader = document.querySelector(".site-header");
  function handleHeaderScroll() {
    if (window.scrollY > 20) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // 2. Mobile navbar auto-collapse upon navigation
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // 3. Smooth scrolling for anchor links with offset
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        const headerHeight = siteHeader ? siteHeader.offsetHeight : 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        // Set focus for accessibility
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // 4. Active nav link highlight on scroll
  const sections = document.querySelectorAll("section[id], footer[id]");
  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    const headerHeight = siteHeader ? siteHeader.offsetHeight : 70;

    sections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight - 60;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }
  window.addEventListener("scroll", highlightNavOnScroll, { passive: true });
  highlightNavOnScroll();

  // 5. Consultation Form & Success Popup Handling
  const successPopupEl = document.getElementById("successPopupModal");
  let bsSuccessModal = null;
  if (successPopupEl && typeof bootstrap !== "undefined") {
    bsSuccessModal = new bootstrap.Modal(successPopupEl);
  }

  function handleFormSubmission(formElement, nameFieldId, phoneFieldId) {
    if (!formElement) return;

    formElement.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById(nameFieldId);
      const phoneInput = document.getElementById(phoneFieldId);

      if (!nameInput || !phoneInput) return;

      const nameVal = nameInput.value.trim();
      const phoneVal = phoneInput.value.trim();

      if (!nameVal || !phoneVal) {
        alert("Vui lòng điền đầy đủ họ tên và số điện thoại.");
        return;
      }

      // If modal is currently open, close it
      const consultationModalEl = document.getElementById("consultationModal");
      if (consultationModalEl && typeof bootstrap !== "undefined") {
        const bsModal = bootstrap.Modal.getInstance(consultationModalEl);
        if (bsModal) {
          bsModal.hide();
        }
      }

      // Reset form
      formElement.reset();

      // Show success popup with thumbs-up icon
      if (bsSuccessModal) {
        bsSuccessModal.show();
      } else if (successPopupEl && typeof bootstrap !== "undefined") {
        bsSuccessModal = new bootstrap.Modal(successPopupEl);
        bsSuccessModal.show();
      }
    });
  }

  // Bind inline form and modal form
  const inlineForm = document.getElementById("inlineConsultationForm");
  const modalForm = document.getElementById("consultationForm");

  handleFormSubmission(inlineForm, "inlineFullName", "inlinePhoneNumber");
  handleFormSubmission(modalForm, "fullName", "phoneNumber");

  // 6. Direct Hero Explore CTA Interaction
  const heroCtaBtn = document.getElementById("heroCtaBtn");
  if (heroCtaBtn) {
    heroCtaBtn.addEventListener("click", function (e) {
      const target = document.getElementById("overview");
      if (target) {
        e.preventDefault();
        const headerHeight = siteHeader ? siteHeader.offsetHeight : 70;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  }
});
