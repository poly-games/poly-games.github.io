  VK.init(function() {
     // API initialization succeeded
     // Your code here
  }, function() {
     alert("ошибка вк")
}, '5.130');


function publish(level_id){
	VK.api("wall.post", {"message": 'Я прошел ' + level_id + ' уровень в игре NetWork95! А ты сможешь?', "attachments" : "https://vk.com/app7851988_649233139", "v":"5.73"}, function (data) {
		alert("Error");
	});
};


function progress(level_id){
	VK.api("secure.addAppEvent", {"activity_id":"1", "value":level_id})
}