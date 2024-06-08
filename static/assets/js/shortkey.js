const githubUrl = 'https://github.com/Hydrogen-Network/Hydrogen/edit/main/';
const url = location.href.replace('https://brrrrrr.pages.dev/', '');
document.onkeydown = (e) => {
  if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
    switch (e.key) {
      case "q":
        window.location.replace("https://classroom.google.com/");
        break;
      case "e":
        open(`${githubUrl}${url}`);
        break;
      case "h":
        document.title = document.title === "Hydrogen" ? "Google" : "Hydrogen";
        document.querySelector("link[rel*='icon']").href =
          document.title === "Google"
            ? "https://raw.githubusercontent.com/whitespider-dev/whitespider/Main/res/google.ico"
            : "/img/gas.png";
        break;
      default:
        break;
    }
  }
};