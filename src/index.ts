import fs from 'fs';
import { zen } from './zen';

const main = () => {
    updateReadme();
};

const getZenText = (zen) => {
    return `#### Reading the Zen of Python (\`>>> import this\`) 🐍:\n${zen.zen}\n${zen.comment}\n`
}

const zenWidgetRegex = /<!-- Zen Widget Start -->[\s\S]*?<!-- Zen Widget End -->/;

const updateReadme = async () => {
  try {
    const newZen = zen[Math.floor(Math.random() * zen.length)];
    fs.readFile("./README.md", "utf8", async (err, data) => {
      if (err) throw err;

      const edited = data.replace(
        zenWidgetRegex,
        getZenText(newZen)
      );

      fs.writeFile("./README.md", edited, "utf8", (err) => {
        if (err) throw err;
      });
    });
  } catch (e) {
    console.log(e);
  }
};

main();