// JS de Manuel Michael Retamozo García - Github: Snakeblack

const quizData = [
    {
        question: '¿Cómo se llama la primera Criptomoneda?',
        a: 'Ethereum',
        b: 'Monero',
        c: 'Bitcoin',
        d: 'Litecoin',
        correct: 'c'
    },
    {
        question: '¿Cómo se llama el metodo de transferencia de datos que usa Bitcoin?',
        a: 'SHA1',
        b: 'Blockchain',
        c: 'Tangle',
        d: 'SmartContract',
        correct: 'b'
    },
    {
        question: '¿Cúal es el seudónimo del creador/es de Bitcoin?',
        a: 'Elon Musk',
        b: 'Emurgo\'s',
        c: 'Michael Saylor',
        d: 'Satoshi Nakamoto',
        correct: 'd'
    },
    {
        question: '¿Cúal es la primera cripto en implementar el SmartContract?',
        a: 'EOS',
        b: 'Ethereum',
        c: 'Binance',
        d: 'Cardano',
        correct: 'b'
    },
    {
        question: '¿Cúal es el primer país que convierte a Bitcoin en moneda de curso legal?',
        a: 'Suiza',
        b: 'Estados Unidos de America',
        c: 'El Salvador',
        d: 'Estonia',
        correct: 'c'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // TAREA: Mostrar los resultados.
        alert("Has acabado!")
    }
})