function format(command, value) {
    document.execCommand(command, false, value);
}

function getContent(){
    document.getElementById("postEditorTextArea").value = document.getElementById("postContentEditorDiv").innerHTML;
}