  VK.init(function() {
     // API initialization succeeded
     // Your code here
  }, function() {
     alert("ошибка вк")
}, '5.130');


function publish(level_id){
	VK.api("wall.post", {"message": 'Я собрал ' + level_id + ' паззлов в игре Block Puzzle! А сможешь ли ты?', "attachments" : "https://vk.com/app7848715", "v":"5.73"}, function (data) {
		//;
	});
};


function progress(level_id){
	VK.api("secure.addAppEvent", {"activity_id":"1", "value":level_id})
}