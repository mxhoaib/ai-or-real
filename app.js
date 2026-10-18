'use strict';
const P=[
{t:"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",r:1,s:"Jane Austen, Pride and Prejudice (1813)"},
{t:"Happy families are all alike; every unhappy family is unhappy in its own way.",r:1,s:"Leo Tolstoy, Anna Karenina (tr. Constance Garnett, 1901)"},
{t:"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",r:1,s:"Herman Melville, Moby-Dick (1851)"},
{t:"I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",r:1,s:"Henry David Thoreau, Walden (1854)"},
{t:"There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all.",r:1,s:"Oscar Wilde, The Picture of Dorian Gray (1891)"},
{t:"True!—nervous—very, very dreadfully nervous I had been and am; but why will you say that I am mad?",r:1,s:"Edgar Allan Poe, The Tell-Tale Heart (1843)"},
{t:"There was no possibility of taking a walk that day.",r:1,s:"Charlotte Brontë, Jane Eyre (1847)"},
{t:"Beware; for I am fearless, and therefore powerful.",r:1,s:"Mary Shelley, Frankenstein (1818)"},
{t:"You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter.",r:1,s:"Mark Twain, Adventures of Huckleberry Finn (1884)"},
{t:"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.",r:1,s:"Charles Dickens, A Tale of Two Cities (1859)"},
{t:"A gentleman who has lately come into a modest inheritance will discover, within the week, that he has acquired a great many friends and very few opinions of his own.",r:0,s:"AI imitation of Jane Austen"},
{t:"The sea does not remember the ships it has swallowed; it is only men who keep such ledgers, and they keep them badly.",r:0,s:"AI imitation of Herman Melville"},
{t:"I have lately observed that most men hurry to their graves as though late for an appointment they never made.",r:0,s:"AI imitation of Henry David Thoreau"},
{t:"Hush!—I heard it again—that slow, patient knocking beneath the floor; and yet you tell me the house is empty.",r:0,s:"AI imitation of Edgar Allan Poe"},
{t:"The fog came up from the river like a creditor, and settled upon every doorstep in the street as if it meant to stay till it was paid.",r:0,s:"AI imitation of Charles Dickens"},
{t:"To be admired is pleasant; to be understood is dangerous. The wise man arranges to be only the first.",r:0,s:"AI imitation of Oscar Wilde"},
{t:"I had resolved to be calm, and I was calm, in the way a frozen lake is calm while the water below it moves without rest.",r:0,s:"AI imitation of Charlotte Brontë"},
{t:"Every good family keeps one secret in the cellar and one in the drawing room, and only the servants know both.",r:0,s:"AI imitation of Leo Tolstoy"},
{t:"Folks say a lie can travel halfway round the county before the truth gets its boots on, and I reckon our town had more boots than most.",r:0,s:"AI imitation of Mark Twain"},
{t:"I gave him life, and in return he taught me what it is to be hunted by the work of one's own hands.",r:0,s:"AI imitation of Mary Shelley"}];
const $=s=>document.querySelector(s);let deck=[],i=0,score=0;
function start(){deck=[...P].sort(()=>Math.random()-.5).slice(0,10);i=0;score=0;$('#end').hidden=true;$('#q').hidden=false;show()}
function show(){const p=deck[i];$('#text').textContent='“'+p.t+'”';$('#prog').textContent=`Passage ${i+1} of 10 · Score ${score}`;$('#fb').hidden=true;$('#next').hidden=true;$('#real').disabled=$('#ai').disabled=false}
function answer(g){const p=deck[i],ok=g===p.r;if(ok)score++;$('#real').disabled=$('#ai').disabled=true;$('#fb').hidden=false;$('#fb').innerHTML=(ok?'<b style="color:#1a7f37">Correct!</b> ':'<b style="color:#d70015">Not quite.</b> ')+'';$('#fb').append(p.s);$('#prog').textContent=`Passage ${i+1} of 10 · Score ${score}`;$('#next').hidden=false;$('#next').textContent=i<9?'Next passage':'See results';$('#next').focus()}
function end(){$('#q').hidden=true;$('#end').hidden=false;$('#final').textContent=`You scored ${score}/10`;$('#rank').textContent=score>=9?'Literary detective. The machines fear you.':score>=7?'Sharp eye. A well-read human.':score>=5?'Coin-flip territory — the AI is getting good.':'The robots have fooled you. Time for a library card!'}
$('#real').onclick=()=>answer(1);$('#ai').onclick=()=>answer(0);$('#next').onclick=()=>{if(++i<10)show();else end()};$('#restart').onclick=start;
$('#share').onclick=async()=>{const t=`I scored ${score}/10 telling classic authors from AI. Can you beat me?`;try{if(navigator.share)await navigator.share({text:t,url:location.href});else{await navigator.clipboard.writeText(t+' '+location.href);$('#toast').textContent='Copied to clipboard!'}}catch(e){$('#toast').textContent='Share cancelled'}};
start();
