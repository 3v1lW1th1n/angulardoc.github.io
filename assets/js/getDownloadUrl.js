(function () {
  $.ajax({
    url: 'http://34.211.205.168/copilot/download/win32/latest',
    type: 'get',
    success: function (data) {
      console.log(data);
    }
  });
  $.ajax({
    url: 'http://34.211.205.168/copilot/download/darwin/latest',
    type: 'get',
    success: function (data) {
      console.log(data);
    }
  });
})();