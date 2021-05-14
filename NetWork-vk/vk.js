  VK.init(function() {
     // API initialization succeeded
     // Your code here
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.130');

function publish(level_id){
	VK.api("wall.post", {"message": "Я прошел " + level_id + " уровень в игре NetWork95! А ты сможешь?", "attachments" : "photo-204575851_457239018,https://vk.com/app7851988_649233139" "v":"5.73"}, function (data) {
alert("Post ID:" + data.response.post_id);
});
}


