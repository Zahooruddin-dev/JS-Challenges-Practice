function getLabelsHtml(text,sender, ...name) {
 let renderHtml =''
  const names = Object.values(name)
  const contentHtml = names.forEach(names => {
    renderHtml+=	`<div class="label-card">
       <p>Dear ${names.name} </p>
       <p>${text}</p>
       <p>Best wishes,</p>
       <p>${sender}</p>
   </div>`;   
  });



	
	/*
  Challenge:
  1. Add parameters.
  2. Update the HTML template where you 
     see **NAME**.
  3. Return HTML template for each label.
  */

	// `<div class="label-card">
	//     <p>Dear **NAME** </p>
	//     <p>${text}</p>
	//     <p>Best wishes,</p>
	//     <p>${sender}</p>
	// </div>`
  return renderHtml
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁';
const sender = 'Tom';

document.getElementById('labels-container').innerHTML = getLabelsHtml(
	text,
	sender,
	{ name: 'Sally' },
	{ name: 'Mike' },
	{ name: 'Rob' },
	{ name: 'Harriet' }
);
