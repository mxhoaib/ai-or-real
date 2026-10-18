'use strict';
/* Growth hooks: challenge links, share card, local best scores, tip CTA. */
(function(){
Viral.init({slug:'ai-or-real',name:'AI or Real?',url:'https://mxhoaib.github.io/ai-or-real/',emoji:'🤖',c1:'#0071e3',c2:'#bf5af2',light:true});
const ch=Viral.readChallenge();
const chal=ch&&Number.isInteger(ch.s)&&ch.s>=0&&ch.s<=10&&Array.isArray(ch.d)&&ch.d.length===10&&ch.d.every(n=>Number.isInteger(n)&&n>=0&&n<P.length)?ch:null;
const who=chal?(Viral.clean(chal.n,24)||'A friend'):'';
Viral.heroPay(document.querySelector('header.hero'),{item:'coffee',cta:'☕ Tip the maker',price:3,note:'Optional, via PayPal'});
const bar=Viral.payBar({item:'coffee',label:'Enjoyed the quiz?',cta:'☕ Tip',price:3});
const best=Viral.board('quiz',$('#end'),e=>`${e.s}/10 · ${new Date(e.t).toLocaleDateString('en',{dateStyle:'medium'})}`);
let idx=[],useChal=!!chal;
const _start=start;
start=function(){_start();if(useChal){deck=chal.d.map(n=>P[n]);useChal=false;show()}idx=deck.map(p=>P.indexOf(p))};
const _end=end;
end=function(){_end();best.add({s:score});
 if(chal&&!$('#vs')){const v=document.createElement('p');v.id='vs';v.className='sub';v.style.fontWeight='700';$('#rank').after(v)}
 if(chal)$('#vs').textContent=score>chal.s?`🏆 You beat ${who} (${chal.s}/10)!`:score===chal.s?`🤝 You tied with ${who} at ${chal.s}/10.`:`${who} wins this one with ${chal.s}/10. Rematch?`;
 panel.update();bar.show();Viral.count('quiz-finished','Finished quiz')};
const old=$('#share');if(old)old.remove();
const panel=Viral.sharePanel($('#end'),name=>({kicker:'Classic author or AI?',big:`${score}/10`,line:$('#rank').textContent,sub:'Ten passages. Some by famous authors, some by AI. Can you tell?',cta:'Can you beat me?',
 text:`${name?name+' scored':'I scored'} ${score}/10 telling classic authors from AI. Can you beat ${name?'them':'me'}? Same 10 passages:`,url:Viral.challengeUrl({s:score,d:idx,n:name})}),{title:'Challenge a friend with the same 10 passages'});
if(chal){Viral.banner(`🎯 ${who} scored ${chal.s}/10 on these exact 10 passages. Beat them!`,'Take the challenge',()=>{$('#quiz').scrollIntoView({behavior:'smooth'})},$('header.hero'))}
start();
})();
