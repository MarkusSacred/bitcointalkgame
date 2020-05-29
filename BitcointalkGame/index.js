   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
   var quizBox1=document.getElementById('again');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'Discussion of specific Bitcoin-related services usually belongs in other sections?', options:['Bitcoin Discussion','Development & Technical Discussion','Trading Discussion','Beginners & Help'],answer:1},

                          {q:'Discussion about the Bitcoin Forum?',options:['Beginners & Help','Meta','Altcoin Discussion','Serious discussion'],answer:2},

                          {q:'Discussion about doing business with Bitcoin. Best trading practices, delivery methods etc?',options:['Trading Discussion','Services','Project Development','Mining'],answer:1},

                          {q:'Discussion of sports games and other gambling-related topics which are separate from games and services themselves?',options:['Gambling discussion','Games and rounds','Gambling','Trading Discussion'],answer:1},

                          {q:'A title allows you to post images even if you are a newbie, reduces the time-between-actions limit, and provides some of the same benefits as being of natural Member rank.?',options:['VIP','Staff','Donator','Copper Membership'],answer:4},

                          {q:'A button enables registered members to mark all posts in the entire forum as read?',options:['Mark Read',' Notify of replies ','Help','Members'],answer:1},

                          {q:'A button enables you to reply to the topic.?',options:['Quote','Reply','+Merit','Notify'],answer:2},

                          {q:'One of the administrator in bitcointalk.org?',options:['Theymos','LoyceV','DdmrDdmr','CryptopreneurBrainboss'],answer:1},

                          {q:'What is the longest running campaign?',options:['Best Change','Chipmixer','Roobet.com','777Coin'],answer:2},

                          {q:'It is called as _____ defines the number of your good contribution?',options:['Activity','Post','Quote','Merit'],answer:4}
                
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();

                        }
                        else{

                        quizBox.innerHTML="Thank you for playing" 
                        quizBox1.style.visibility="visible";
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                            op4.style.display="none";
                            btn.style.display="none";
                            }
                    },
                    next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



