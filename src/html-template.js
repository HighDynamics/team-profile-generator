const generateManager = (manager) => {
  return `
    <article class='card'>
        <div class='card-header'>
            <h2 class='name'>${manager.getName()}</h2>
            <h3 class='role'>${manager.getRole()}</h3>
        </div>
        <div class='details'>
            <p>id: ${manager.getId()}</p>
            <p>Email: 
            <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            </p> 
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </article>
    `;
};

const generateEngineers = (engineers) => {
  let html = '';

  engineers.forEach((engineer) => {
    html += `
    <article class='card'>
        <div class='card-header'>
            <h2 class='name'>${engineer.getName()}</h2>
            <h3 class='role'>${engineer.getRole()}</h3>
        </div>
        <div class='details'>
            <p>id: ${engineer.getId()}</p>
            <p>Email: 
                <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </p> 
            <p>GitHub: <a href="https://github.com/${
              engineer.github
            } target="_blank">${engineer.github}</a></p>
        </div>
    </article>
        `;
  });

  return html;
};

const generateInterns = (interns) => {
  let html = '';

  interns.forEach((intern) => {
    html += `
        <article class='card'>
            <div class='card-header'>
                <h2 class='name'>${intern.getName()}</h2>
                <h3 class='role'>${intern.getRole()}</h3>
            </div>
            <div class='details'>
                <p>id: ${intern.getId()}</p>
                <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p> 
                <p>School: ${intern.school}</p>
            </div>
        </article>
            `;
  });

  return html;
};

const generateHtml = ({ manager, engineers, interns }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel='stylesheet' href='style.css'>
      <title>My Team</title>
  </head>
  <body>
      <header>
          <h1>MyTeam</h1>
      </header>
      <section class='content'>
          ${generateManager(manager)}
          ${generateEngineers(engineers)}
          ${generateInterns(interns)}
      </section>
  </body>
  </html>
    `;
};

module.exports = generateHtml;
