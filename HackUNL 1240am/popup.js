document.addEventListener('DOMContentLoaded', function() {
  
 
		var link = document.getElementById("submit_button");
		link.addEventListener("click", function(){
			event.preventDefault();
			console.log('Click event listened');
			  chrome.tabs.getSelected(function(tab) {
				  console.log('getSelected function executes');
				  chrome.tabs.create({url: 'http://dontstandby.me.s3-website.us-east-2.amazonaws.com/'});
			  });
		});
 
});