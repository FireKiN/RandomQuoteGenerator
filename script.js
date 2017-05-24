$(function() {
	var quotes = [
    	["\"Talk is cheap. Show me the code.\"", "Linus Torvalds"],
    	["\"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.\"", "Rick Cook"],
    	["\"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live\"", "John Woods"],
    	["\"That's the thing about people who think they hate computers. What they really hate is lousy programmers.\"", "Larry Niven"],
    	["\"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.\"", "Waseem Latif"],
    	["\"Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.\"", "Zig Ziglar"],
    	["\"The team that keeps winning is not the most talented but the most hard-working.\"", "Zoltan Andrejkovics"]
    	]
    var quoteTweet;
    $('canvas').click(function() {
		var images = [
		"https://images.unsplash.com/photo-1493680772813-f6ffe1e96087?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1493666835815-de6b83927e24?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1493689415776-a479ef0700e3?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1493656672004-266b8eb87a5d?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1493684127012-28fc27e3db5b?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1493710282585-ce6a89fbc821?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1439886183900-e79ec0057170?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1469173479606-ada03df615ac?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1488485300416-de7f8f876d4b?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1490723412895-f49eb0a9ce0a?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1439209306665-700c9bca794c?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1469119674997-bc930fb66072?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1481584381127-bc1cc69e001d?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=",
		"https://images.unsplash.com/photo-1480365192324-83232188157e?dpr=1&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg="
		]
		var randImage = images[Math.floor(Math.random()*images.length)];
		var randQuote = quotes[Math.floor(Math.random()*quotes.length)];
		quoteTweet = randQuote[0] + " - " + randQuote[1];
		$('canvas').animate({opacity: 1}, 1600, function() {
			$('#quoteAuthor').animate({left: -250}, 800, function() {
					//Animation Complete
			})
			$('img').attr('src', randImage);
			$('#quoteText').html(randQuote[0]);
			$('#quoteAuthor').html(randQuote[1]);
			$('canvas').animate({opacity: 0}, 1600, function() {
				$('#quoteAuthor').animate({left: 0}, 400, function() {
					//Animation Complete
				})
			})
		});
    });
    $('a').click(function() {
    	$('a').attr('href', 'https://twitter.com/intent/tweet?text=' + quoteTweet);
    })
});