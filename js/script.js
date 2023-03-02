const observer = new IntersectionObserver((entries) => {
  entries.forEach((entrie) =>
    entrie.isIntersecting
      ? entrie.target.classList.add("tecno-visible")
      : entrie.target.classList.remove("tecno-visible")
  );
});

observer.observe(document.querySelector("header"));
observer.observe(document.querySelector(".tecno"));
observer.observe(document.querySelector(".navBar"));
observer.observe(document.querySelector(".miProfile"));
observer.observe(document.querySelector(".cursos"));
observer.observe(document.querySelector(".projects"));
observer.observe(document.querySelector(".socials-div"));
