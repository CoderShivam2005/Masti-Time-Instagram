const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: `
Available commands:
  about     → Who is Shivam Mishra?
  skills    → My technical skills
  projects  → Some projects I built
  contact   → How to reach me
  clear     → Clear the terminal
  `,
  about: "Hi Babu...I'm Shivam Mishra, a Software Engineer.",
  skills: "Languages: C++, JavaScript, Next.js, React, Node js, Express js, MongoDB, MySQL\nOther: Competitive Programming, System Design",
  projects: "Go inside Universe of Shivam\n : https://github.com/Sm6718858",
  contact: "📧 Email: sm6718858@gmail.com\n🔗 LinkedIn: https://www.linkedin.com/in/shivam134/",
  mobile: "+91 7307334885"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let value = input.value.trim();
    if (value) {
      if (value === "clear") {
        output.textContent = "";
      } else if (commands[value]) {
        output.textContent += `\n$ ${value}\n${commands[value]}\n`;
      } else {
        output.textContent += `\n$ ${value}\nCommand not found. Type 'help'\n`;
      }
    }
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
