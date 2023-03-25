var checkAll = document.getElementById('checkAll');
var checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
checkAll.addEventListener('click', function() {
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = checkAll.checked;
  });
});
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    checkAll.checked = document.querySelectorAll('tbody input[type="checkbox"]:checked').length === checkboxes.length;
  });
});
