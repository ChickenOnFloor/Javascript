function toggleText(button) {
    const moreText = button.previousElementSibling;
    const isVisible = moreText.style.display === 'inline';

    if (isVisible) {
    moreText.style.display = 'none';
    button.textContent = 'Read more';
    } else {
    moreText.style.display = 'inline';
    button.textContent = 'Read less';
    }
}
