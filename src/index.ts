import fs from 'fs';
import { zen } from './zen';

const main = () => {
    updateReadme();
};

const getZenText = (zen) => `<!-- Zen Widget Start -->
#### Hourly Zen of Python (\`>>> import this\`) 🐍:
${zen.zen}  
*My comment: ${zen.comment}*  
What do you think?  
<!-- Zen Widget End -->`

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
