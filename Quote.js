var quotes= [
 "Fold in the cheese",
  "It wasn't easy but it's worth it",
  "I like wine, not the label",
  "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way",
  "I wish there was a way to know you're in the good old days before you've actually left them",
  "please stop talking,",
  "I don't skate through life David, I walk through life in really nice shoes,",
  "i'm walking here, i'm walking here,",
  "Four for you Glen Coco,You go Glen Coco ,",
  "It's October 3rd",
  "Your killing me smalls",
  "Let me raise a toast to the girl I love the most, ... please don't say me",
  "Keep the change ya filthy animal !",
] 
function newquote() {
    var randomnumber=Math.floor(Math.random() * (quotes.length)); 
    document.getElementById('quotedisplay').innerHTML= quotes[randomnumber];


}