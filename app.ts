// app.ts

// Select elements by their tag names or classes
const taglineElement = document.querySelector('h3') as HTMLElement;

// Function to update the tagline
function updateTagline(newTagline: string) {
    taglineElement.textContent = newTagline;
}

// Example: Call the function with a sample tagline
updateTagline("Professional Web Developer and Designer");
