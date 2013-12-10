// ==UserScript==
// @name          CaTE: Show All Students
// @namespace     https://github.com/edgemaster/cate-tools/
// @description   Default handin page to show all students.
// @include       https://cate.doc.ic.ac.uk/timetable.cgi?*
// @grant         none
// @version       1
// ==/UserScript==

var query = "//a[contains(@href, 'handinS.cgi')]";
var xr = document.evaluate(query, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i = 0; i < xr.snapshotLength; i++) {
  var a = xr.snapshotItem(i);
  a.href += "&showclass=ALL";
}

