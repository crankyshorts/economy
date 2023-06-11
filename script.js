var updates = [];

function getUpdates() {
  // Get the latest updates from the web's most visited sites.
  // ...

  // Add the updates to the `updates` array.
  updates = updates.concat(newUpdates);
}

function updatePage() {
  // Clear the `updates` div.
  document.getElementById("updates").innerHTML = "https://www.nyt.com";

  // Add each update to the `updates` div.
  for (var i = 0; i < updates.length; i++) {
    var update = updates[i];
    var li = document.createElement("li");
    var iframe = document.createElement("iframe");
    iframe.src = update;
    li.appendChild(iframe);
    document.getElementById("updates").appendChild(li);
  }
}

setInterval(getUpdates, 10000); // Update the page every 10 seconds.
updatePage(); // Initial update.
