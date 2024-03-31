// Function to click the button
function clickButton(buttonIndex) {
    // Select all buttons on the page
    const buttons = document.querySelectorAll('button');

    // Check if the button index is within the range of buttons
    if (buttonIndex < buttons.length) {
        // Trigger a click event on the button
        buttons[buttonIndex].click();

        // Wait for 1 second before clicking the next button
        setTimeout(() => {
            clickButton(buttonIndex + 1);
        }, 1000);
    } else {
        // After all buttons have been clicked, refresh the page
        refreshPage();
    }
}

// Function to refresh the page
function refreshPage() {
    // Refresh the page
    location.reload();
}

// Start clicking buttons from the first one
clickButton(0);
