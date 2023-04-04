const score_container = document.getElementById("score-container");

const color = [
  "hsl(0, 100%, 67%)",
  "hsl(39, 100%, 56%)",
  "hsl(166, 100%, 37%)",
  "hsl(234, 85%, 45%)",
];
const bg_color = [
  "hsla(0, 100%, 67%, 0.1)",
  "hsla(39, 100%, 56%, 0.1)",
  "hsla(166, 100%, 37%, 0.1)",
  "hsla(234, 85%, 45%, 0.1)",
];

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((element, i) => {
      //   console.log(element);
      const li = document.createElement("li");
      const p_1 = document.createElement("p");
      const div_1 = document.createElement("div");

      // CATEGORY && ICON
      div_1.setAttribute("class", "category")
      div_1.style = "display: flex;";
      p_1.textContent = `${element.category}`;
      p_1.style = `color:${color[i]};`;
      const img = document.createElement("img");
      img.src = element.icon;
      div_1.appendChild(img);
      div_1.appendChild(p_1);

      // SCORE Element
      const p_2 = document.createElement("p");
      const max_score = document.createElement("span");
      p_2.style = `color:${"hsl(224, 30%, 27%)"}; font-weight:700;`;
      max_score.textContent = " / 100";
      max_score.style = `color:${"hsla(224, 30%, 27%,0.5)"};`;
      const score = document.createTextNode(`${element.score}`);

      p_2.appendChild(score);
      p_2.appendChild(max_score);

      // li && ul setting
      li.style = `display: flex; background:${bg_color[i]}; border-radius: 0.5rem;  justify-content: space-between`;

      li.appendChild(div_1);
      li.appendChild(p_2);
      score_container.appendChild(li);
    });
  });
