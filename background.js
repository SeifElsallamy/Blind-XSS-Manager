function generateUrlHash() {
  // Get the current URL
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;

    // Generate a 6-character unique hash for the current URL using the md5 function
    const hash = md5(currentUrl).substring(0, 6);

    // Insert the hash into the nonce input
    document.getElementById("nonce").value = hash;
  });
}
function captureCurrentUrl() {
  // Get the current URL
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;

    // Insert the current URL into the current URL input
    document.getElementById("current-url").value = currentUrl;
  });
}

function toload(){
	captureCurrentUrl();
	generateUrlHash();
	getDomain(function(domain){document.getElementById("domain").value=domain; payloadBuilder();});
	var btn = document.getElementById('saveDomainButton');
	btn.onclick = function(){saveDomain(document.getElementById("domain").value); location.reload();};
	copyBuild();
}





window.onload = function() {
  toload();
}
