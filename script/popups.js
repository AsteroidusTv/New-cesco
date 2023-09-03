const commentPopup = document.getElementById("commentPopup");
const signinPopup = document.getElementById("signinPopup");
const signupPopup = document.getElementById("signupPopup");
const settingsPopup = document.getElementById("settingsPopup");
const editorPopup = document.getElementById("editorPopup")

const commentPopupContent = document.querySelector(".comment-popup-content");
const signinPopupContent = document.querySelector(".signin-popup-content");
const signupPopupContent = document.querySelector(".signup-popup-content"); 
const settingsPopupContent = document.querySelector(".settings-popup-content"); 
const editorPopupContent = document.querySelector(".editor-popup-content"); 

let commentPopupOpen = false;
let signinPopupOpen = false;
let signupPopupOpen = false;
let settingsPopupOpen = false;
let editorPopupOpen = false;

const body = document.body;

function openPopup(popup, content, isOpen) {
    if (!isOpen) {
        isOpen = true;
        body.style.overflow = "hidden";
        popup.classList.add('show');
        setTimeout(() => {
            document.addEventListener('click', clickOutsideHandler);
        }, 100);
    }
}

function closePopup(popup, isOpen) {
    isOpen = false;
    popup.classList.add('closing');
    body.style.overflow = "auto";
    setTimeout(() => {
        popup.classList.remove('show', 'closing');
        document.removeEventListener('click', clickOutsideHandler);
    }, 250);
}

function openCommentPopup() {
    openPopup(commentPopup, commentPopupContent, commentPopupOpen);
}

function closeCommentPopup() {
    closePopup(commentPopup, commentPopupOpen);
}

function openSigninPopup() {
    openPopup(signinPopup, signinPopupContent, signinPopupOpen);
}

function closeSigninPopup() {
    closePopup(signinPopup, signinPopupOpen);
}

function openSignupPopup() {
    openPopup(signupPopup, signupPopupContent, signupPopupOpen);
}

function closeSignupPopup() {
    closePopup(signupPopup, signupPopupOpen);
}

function openSettingsPopup() {
    openPopup(settingsPopup, settingsPopupContent, settingsPopupOpen);
}

function closeSettingsPopup() {
    closePopup(settingsPopup, settingsPopupOpen);
}

function openEditorPopup() {
    openPopup(editorPopup, editorPopupContent, editorPopupOpen);
}

function closeEditorPopup() {
    closePopup(editorPopup, editorPopupOpen);
}

function clickOutsideHandler(event) {
    if (commentPopupOpen && !commentPopupContent.contains(event.target)) {
        closeCommentPopup();
    }
    if (signinPopupOpen && !signinPopupContent.contains(event.target)) {
        closeSigninPopup();
    }
    if (signupPopupOpen && !signupPopupContent.contains(event.target)) {
        closeSignupPopup();
    }
    if (settingsPopupOpen && !settingsPopupContent.contains(event.target)) {
        closeSettingsPopup();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && (commentPopupOpen || signinPopupOpen || signupPopupOpen || settingsPopupOpen)) {
        closeCommentPopup();
        closeSigninPopup();
        closeSignupPopup();
        closeSettingsPopup();
    }
});
