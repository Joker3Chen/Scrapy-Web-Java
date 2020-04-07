document.getElementById("login").onclick = function () {
  chrome.runtime.sendMessage({
    text: "openLogin",
  }, function(response) {
    console.log("Response: ", response);
  });
}
