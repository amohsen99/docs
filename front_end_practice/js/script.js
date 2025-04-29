// Wait for the DOM to be fully loaded before running any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements we want to interact with
    const changeColorBtn = document.getElementById('changeColorBtn');
    const nameHighlight = document.querySelector('.highlight');
    const header = document.querySelector('header');
    const profileSection = document.querySelector('.profile');
    
    // Array of colors to cycle through
    const colors = [
        '#e8491d', // Original color
        '#2980b9', // Blue
        '#27ae60', // Green
        '#8e44ad', // Purple
        '#f39c12'  // Orange
    ];
    
    // Keep track of the current color index
    let colorIndex = 0;
    
    // Add click event listener to the button
    changeColorBtn.addEventListener('click', function() {
        // Move to the next color in the array
        colorIndex = (colorIndex + 1) % colors.length;
        
        // Apply the new color to the name highlight
        nameHighlight.style.color = colors[colorIndex];
        
        // Also change the header border color
        header.style.borderBottomColor = colors[colorIndex];
        
        // Add a message to the console
        console.log(`Color changed to: ${colors[colorIndex]}`);
    });
    
    // Add a hover effect to the profile section
    profileSection.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    profileSection.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Add a welcome message to the console
    console.log('Welcome to Mohsen\'s JavaScript practice!');
    console.log('Try clicking the "Change Color" button to see what happens.');
    console.log('Also, hover over the profile section to see an effect.');
});

// Function to add a new element to the page
function addNewElement() {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    
    // Add some text to the paragraph
    newParagraph.textContent = 'This paragraph was added using JavaScript!';
    
    // Add a class to the paragraph
    newParagraph.className = 'js-added';
    
    // Add some inline styles
    newParagraph.style.backgroundColor = '#f0f0f0';
    newParagraph.style.padding = '10px';
    newParagraph.style.marginTop = '10px';
    newParagraph.style.borderLeft = '3px solid #e8491d';
    
    // Find the profile section and append the new paragraph to it
    const profileSection = document.querySelector('.profile');
    profileSection.appendChild(newParagraph);
}

// Add a timeout to call the function after 2 seconds
setTimeout(addNewElement, 2000);
