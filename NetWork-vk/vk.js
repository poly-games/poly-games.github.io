  VK.init(function() {
     // API initialization succeeded
     // Your code here
  }, function() {
     alert("ошибка вк")
}, '5.130');


function publish(level_id){
	VK.api("wall.post", {"message": 'Я прошел ' + level_id + ' уровень в игре NetWork95! А ты сможешь?', "v":"5.73"}, function (data) {
		alert("Post ID:" + data.response.post_id);
	});
};


