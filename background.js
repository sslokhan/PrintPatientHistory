// Copyright (c) 2015 LFHC-Shehzad and Lohn


chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript(null, {file: "jquery.js"});
  chrome.tabs.executeScript(null, {code: "$('header').hide();", runAt: "document_end"});
  chrome.tabs.executeScript(null, {code: "$('#breadcrumbs').hide();", runAt: "document_end"});
  chrome.tabs.executeScript(null, {code: "$('.actions.dropdown').hide();", runAt: "document_end"});
  chrome.tabs.executeScript(null, {code: "$('#visits-list').hide();", runAt: "document_end"});
  chrome.tabs.executeScript(null, {code: "$('.visit-actions').hide();", runAt: "document_end"});
  chrome.tabs.executeScript(null, {code: "$('.ui-tabs-nav').hide();", runAt: "document_end"});
  chrome.tabs.executeScript(null, {code: "var elements = document.getElementsByClassName('view-details');for (i=0; i<elements.length; i++) { elements[i].click();}"});
});