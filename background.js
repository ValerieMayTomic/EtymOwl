function searchEtym(info,tab){
  var query =  encodeURI(info.selectionText);
  chrome.tabs.create(
          {"url" : 'http://etymonline.com/index.php?allowed_in_frame=0&search=' + query });
}

chrome.contextMenus.create({
  "title" : "Search Etymonline for'%s'",
  "contexts" : ["selection"],
  "onclick" : searchEtym
});