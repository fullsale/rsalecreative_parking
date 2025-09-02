// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
	CShamburgerMenu.classList.toggle("cs-active");
	CSnavbarMenu.classList.toggle("cs-active");
	CSbody.classList.toggle("cs-open");
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}


	// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
	const scroll = document.documentElement.scrollTop;
	if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
	} else {
	document.querySelector('body').classList.remove('scroll')
	}
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
	for (const item of dropDowns) {
		const onClick = () => {
		item.classList.toggle('cs-active')
	}
	item.addEventListener('click', onClick)
	}
	

// Select all heading elements (h2-h6) that have an id attribute
document.addEventListener("DOMContentLoaded", function () {
	const tocList = document.getElementById('toc-list');
	const headings = document.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]');
	
	const counters = [0, 0, 0, 0, 0]; // for h2 to h6
	const ulStack = [tocList]; // keeps track of nesting <ul>s
  
	headings.forEach((heading, index) => {
	  const level = parseInt(heading.tagName.substring(1)); // 2 for h2, 3 for h3, etc.
	  const depth = level - 2; // index 0 for h2, 1 for h3, etc.
  
	  // Ensure the heading has an ID
	  if (!heading.id) heading.id = `heading-${index}`;
  
	  // Reset deeper counters
	  for (let i = depth + 1; i < counters.length; i++) {
		counters[i] = 0;
	  }
  
	  // Increment this level's counter
	  counters[depth]++;
  
	  // Create numbering string
	  const numberString = counters.slice(0, depth + 1).join('.');
  
	  // Create list item
	  const li = document.createElement('li');
	  const a = document.createElement('a');
	  a.href = `#${heading.id}`;
	  a.textContent = `${numberString} ${heading.textContent}`;
	  li.appendChild(a);
  
	  // Ensure ulStack has a level for this depth
	  while (ulStack.length <= depth) {
		const parentUl = ulStack[ulStack.length - 1];
		const lastLi = parentUl.lastElementChild;
		const newUl = document.createElement('ul');
		lastLi.appendChild(newUl);
		ulStack.push(newUl);
	  }
  
	  // Trim ulStack if coming up a level
	  ulStack.length = depth + 1;
  
	  // Append to the correct UL
	  ulStack[depth].appendChild(li);
	});
  });


  