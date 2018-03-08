var afinn;

function preload(){
	afinn = loadJSON('afinn.json')
}

function setup() {
	noCanvas();
	console.log(afinn);

	var txt = select('#txt_area');
	txt.input(typing);

	function typing(){
		var txtinput = txt.value();
		var words = txt.split(/\W/);
		var scoredwords=[];
		var totalscore = 0;
		for (var i=0;i<words.length; i++){
			var word = words[i].toLowerCase();
			if(afinn.hasOwnProperty(word)){
				var score = Number(afinn[word]);
				totalscore+=score;
				scoredwords.push(word+': '+score);
			}
		}
		var scorep=select('#score');
		scorep.html('score: '+totalscore);
		var wordlist = select('#wordlist');
		wordlist.html(scoredwords)
	}
}

function draw() {

}
