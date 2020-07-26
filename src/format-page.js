const generateHtml = (teamArr) => {
  let cardsArray = []

  teamArr.forEach((item) => {
    let cardHtml
    switch (item.role) {
      case 'manager':
        cardHtml = generators.manager(item);
        break
      case 'intern':
        cardHtml = generators.intern(item);
        break
      case 'engineer':
        cardHtml = generators.engineer(item);
        break
    }
    cardsArray.push(cardHtml);
  });
  return cardsArray;
}


const generateMgrCard = ({ name, id, email, officeNum }) => {
  return `
  <div class="card" style="width: 25rem; text-align: center; margin-bottom:2em">
    <div class="card-header">
      <h4 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <span class="oi oi-briefcase" style="padding:.5em"></span>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">${officeNum}</li>
        <a href="#" class="list-group-item card-link">${email}</a>
      </ul>
    </div>
</div>
  `;
};

const generateEngCard = ({ name, id, email, github }) => { 
  return `
  <div class="card" style="width: 18rem; text-align: center; margin:1em 1em">
  <div class="card-header">
    <h4 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <span class="oi oi-terminal" style="padding:.5em"></span>
    </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${id}</li>
      <a href="#" class="list-group-item card-link">${github}</a>
      <a href="#" class="list-group-item card-link">${email}</a>
    </ul>
  </div>
</div>
  `
}

const generateIntCard = ({ name, id, email, school }) => { 
  return `
  <div class="card" style="width: 18rem; text-align: center; margin:1em 1em">
        <div class="card-header">
          <h4 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <span class="oi oi-monitor" style="padding:.5em"></span>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${id}</li>
            <li class="list-group-item">${school}</li>
            <a href="#" class="list-group-item card-link">${email}</a>
          </ul>
        </div>
      </div>
  `
}

const generators = { manager: generateMgrCard, engineer: generateEngCard, intern: generateIntCard };

module.exports = templateData => {

  // const { manager, engineers, interns } = templateData;
  let cardTemplates = generateHtml(templateData);
  // console.log("This is cardTemplates: ", cardTemplates)
  let mgrCard = cardTemplates.shift();
  let rnfCards = cardTemplates.join();
  // console.log("This is the mgrCard: ", mgrCard);
  // console.log("This is the rnfCard: ", rnfCards);


  // templateData.forEach((item) => {
  //   if (item.role === 'manager') {
  //     mgrCard += item.html
  //   } else {
  //     rnfCards += item.html
  //   }
  // })

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meet the Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"
    integrity="sha256-BJ/G+e+y7bQdrYkS2RBTyNfBHpA9IuGaPmf9htub5MQ=" crossorigin="anonymous" />
</head>

<body>
  <header>
    <div class="jumbotron jumbotron-fluid" style="text-align:center; background-color:cadetblue; color:white">
      <div class="container">
        <h1 class="display-4">Meet the Team</h1>
      </div>
    </div>
  </header>

  <div class="container">
    <div id="mgr-row" class="row row-cols-1 row-cols-sm-2 row-cols-md-4" style="justify-content:center">
    ${mgrCard}
    </div>

    <div id="ranknfile-row" class="row row-cols-1 row-cols-sm-2 row-cols-md-4" style="justify-content:center">
    ${rnfCards}
    </div>

  </div>
</body>

</html>
  `;
};



// E X A M P L E   C A R D S 
/*

MANAGER
      <div class="card" style="width: 25rem; text-align: center; margin-bottom:2em">
        <div class="card-header">
          <h4 class="card-title">Mgrname</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <span class="oi oi-briefcase" style="padding:.5em"></span>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">id #12</li>
            <li class="list-group-item">officeNum</li>
            <a href="#" class="list-group-item card-link">email@email.com</a>
          </ul>
        </div>
      </div>


ENGINEER
      <div class="card" style="width: 18rem; text-align: center; margin:1em 1em">
        <div class="card-header">
          <h4 class="card-title">Engname</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <span class="oi oi-terminal" style="padding:.5em"></span>
          </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">id #12</li>
            <a href="#" class="list-group-item card-link">github</a>
            <a href="#" class="list-group-item card-link">email@email.com</a>
          </ul>
        </div>
      </div>


INTERN
      <div class="card" style="width: 18rem; text-align: center; margin:1em 1em">
        <div class="card-header">
          <h4 class="card-title">Internname</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <span class="oi oi-monitor" style="padding:.5em"></span>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">id #12</li>
            <li class="list-group-item">School U</li>
            <a href="#" class="list-group-item card-link">email@email.com</a>
          </ul>
        </div>
      </div>

*/