//-----------------------//
// TYPING INDICATOR DEMO //
//  PROGRAMMED BY AKURO  //
//-----------------------//

const typing = [];

// Buttons
const chrisButton = document.getElementById("start-chris");
const taoButton = document.getElementById("start-tao");
const sendAlert = document.getElementById("send-alert");

// Functions
function startChris() {
    typing.push("Chris");
    console.log("Chris");
}

function startTao() {
    typing.push("Tao");
    console.log("Tao");
}

function alertTyping() {
    console.log(typing.join(','));
}

// Event Listeners

chrisButton.addEventListener("click", function() {
    startChris();
});

taoButton.addEventListener("click", function() {
    startTao();
});

sendAlert.addEventListener("click", function() {
    alertTyping();
});