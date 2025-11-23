/**
 * Remove Consecutive Separators
 * -----------------------------
 * Demonstrates usage of MutationObserver to handle dynamic DOM changes.
 */

function removeConsecutiveElements() {
    const elements = document.querySelectorAll('.js-separator');
    for (let i = 0; i < elements.length - 1; i++) {
        if (elements[i].nextElementSibling === elements[i + 1]) {
            elements[i + 1].remove();
            break;
        }
    }
}

const observer = new MutationObserver(removeConsecutiveElements);
observer.observe(document.body, { childList: true, subtree: true });

removeConsecutiveElements();
