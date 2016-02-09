var firstItem = document.getElementById('one'); // Find first list item
var showTextContent = firstItem.textContent; // Get value of text content
var showInnerText = firstItem.innerText; // Get value of inner text

var msg = '<p>textContent ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';
