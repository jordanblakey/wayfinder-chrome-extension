// Copyright (c) 2012 The Chromium Authors. All rights reserved
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.
// Copyright (c) 2012 The Chromium Authors. All rights reserved
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.

function click(e) {
  chrome.tabs.executeScript(null, // execute the script
    {code:"document.body.style.backgroundImage='url(" + images[e.target.id] + "'"}); // change the color to the color clicked
  window.close(); // close the popup window

  document.addEventListener('DOMContentLoaded', function () { // 1. When dom is completely loaded
    var divs = document.querySelectorAll('div'); // 2. Find all divs
    for (var i = 0; i < divs.length; i++) { // 3. Loop through the divs
      divs[i].addEventListener('click', click)  // 4. Wait for a click
    }
  });

  var images = {
    joe: 'https://cloud.fullstackacademy.com/joe_alves.jpg',
    kate: 'https://cloud.fullstackacademy.com/kate.jpg',
    david: 'https://cloud.fullstackacademy.com/david_yang.jpg',
    nimit: 'https://cloud.fullstackacademy.com/nimit_maru.jpg',
  }
}
