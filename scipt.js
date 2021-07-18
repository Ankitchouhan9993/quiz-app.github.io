const quixQuestions=[{
question:'What is your name?',
a:'Ankit Chouhan',
b:'Devendra Yadav',
c:'Rahul Somkunwar',
d:'kailsh Maivada',
correct:'a'
},{
    question:'Where do you live?',
a:'Bhopal',
b:'Hosangabad',
c:'indore',
d:'Ujjain',
correct:'a'
},{
    question:'in which Collage do you study?',
    a:'SIRT',
    b:'BIST',
    c:'LNCT',
    d:'SISTec',
    correct:'d'
},{
    question:'which is your branch?',
    a:'Mechanical Engineering',
    b:'Civil Engineering',
    c:'Computer Science Engineering',
    d:'Electrical Engineering',
    correct:'c'
},{
    question:'What is your date of birth?',
    a:'10 JUlY 2001',
    b:'24 JULY 2000',
    c:'15 AUG 1999',
    d:'23 MAR 2000',
    correct:'b'
},{
    question:'What is your favouite subject?',
    a:'Mathematics',
    b:'English',
    c:'Data Structure',
    d:'Computet Network',
    correct:'c'
}];
let currentQuestion=0;
let score=0;
loadQuiz();
function loadQuiz(){
const question=document.getElementById('question');
const questionno=document.getElementById('q-no');
const option1=document.getElementById('option1');
const option2=document.getElementById('option2');
const option3=document.getElementById('option3');
const option4=document.getElementById('option4');
questionno.textContent= `Question ${currentQuestion+1}:`;
question.childNodes[1].data=" "+quixQuestions[currentQuestion].question;
option1.textContent=quixQuestions[currentQuestion].a;
option2.textContent=quixQuestions[currentQuestion].b;
option3.textContent=quixQuestions[currentQuestion].c;
option4.textContent=quixQuestions[currentQuestion].d;
}
const button= document.getElementById('submit');
button.addEventListener("click",update);
function update(){
    const AnsElement=document.getElementsByName('answer');
    AnsElement.forEach((ans)=>{
        if(ans.checked){
            if(quixQuestions[currentQuestion].correct==ans.value){
                score++;
            }
            currentQuestion++;
            ans.checked=false;
        }
    });
    if(currentQuestion<quixQuestions.length){
    loadQuiz();
    }
    else{
        const container=document.querySelector('.quiz-container').innerHTML=`<h2 class="result">test completed<br>your Score is ${score}/${quixQuestions.length}</h2><br><button class="restart" onclick="location.reload()"> restart</button>`;
        document.getElementById('submit').style.display='none';
    }
}
