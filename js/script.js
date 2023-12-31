/*
Consegna)
    1   -   L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    2   -   Ogni cella ha un numero progressivo, da 1 a 100.
    3   -   Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    4   -   Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/
// dichiarazione della variabile bottone
const playButton = document.getElementById('play');
console.log(playButton);
//dichiarazione variabile al punteggio
let score = document.getElementById('score');
console.log(score);
//dichiarazione variabile punteggio
let punteggio = 0;
// dichiarazione variabile dell'area di gioco
const playArea = document.querySelector('.bg-acquamarine');
console.log(playArea);
//aggiungo nodo di testo dentro il bottone
let play = document.createTextNode('Play');
playButton.append(play);
// event listener al bottone
playButton.addEventListener('click', function(){

    // dichiarazione variabile della difficoltà
    let difficult = document.getElementById('difficolta');
    //assegnazione valore in base alla scelta dell'utente
    difficult = difficult.value;
    
    if (difficult === 'easy'){
        //se la difficolta è stata settata, andra via la selezione della difficoltà
        let difficult = document.getElementById('difficolta');
        difficult.style.display = 'none';
        let label = document.getElementById('etichetta');
        label.style.display = 'none';
        //se si riclicca su play, la pagina verrà azzerata
        playButton.removeChild(play);
        let retry = document.createTextNode('Riprova');
        playButton.append(retry);
        playButton.addEventListener('click',
            function(){
                alert('Comincio nuova partita');
                history.go(0);
            }
        );
        // dichiarazione della variabile grid
        let grid = document.createElement('div');
        // gli aggiungo la calsse grid
        grid.classList.add('gride');
        console.log(grid);
        //al click si aggancia l'elemento creato
        playArea.append(grid);
        //creo array numeri random
        const newArrNum = genArrayRandomNum(1, 100, 100);
        console.log(newArrNum);

        //creazione quadratini nella griglia principale
        //ciclo n volte la creazione del quadratino
        for (let i = 0; i < newArrNum.length; i++) {
            //dichiaro la variabile n che farà da contatore aLLe interazioni
            let n = i;
            //dichiarazione variabile ncasual(bombe)
            let nCasual = newArrNum[n];
            console.log(nCasual);
            //dichiaro la funzione che crea i quadrati
            const newElement = creaElem('div', 'square');
            //creo la variabile che contiene il numero della casella iterata
            console.log(newElement);
            let nCasella = document.createTextNode(`${n}`);
            //e lo appendo alla casella generata
            newElement.append(nCasella);
            //se l'iterazione è safe o con bomba inserirà classi diverse
            if (nCasual % 6 === 0) {
                //ogni iterazione casuale aggiunge classe bomb
                newElement.classList.add('bomb');
            } else {
                // altrimenti aggiunge la casella safe
                newElement.classList.add('safe');

            }
            //evento click sulla casella iterata
            newElement.addEventListener('click',
                function () {
                    //il valore del punteggio incrementa se si clicca sulla casella safe
                    punteggio++;
                    console.log('Hai cliccato la casella n°' + i);
                    newElement.classList.add('clicked');
                    //se il numero casuale ha lo stesso cvalore della bomba
                    if (nCasual % 6 === 0) {
                        punteggio = punteggio - 1;
                        //alert
                        alert('BOOM!! Hai perso. Il tuo punteggio è: ' + punteggio);
                        history.go(0);

                    } else {
                        console.log(punteggio);
                        score.innerHTML = 'Il tuo punteggio: ' + punteggio;
                    };
                    //se il punteggio raggiunge 33 la partita termina con una vittoria
                    if (punteggio === 84) {
                        alert('Incredibile! Hai vinto!! Il tuo punteggio è: ' + punteggio);
                        history.go(0);
                    }
                }

            );
            //appendo alla griglia 100 volte la funzione che crea i quadratini
            grid.append(newElement);

        }

    };
    if (difficult === 'medium'){
        //se la difficolta è stata settata, andra via la selezione della difficoltà
        let difficult = document.getElementById('difficolta');
        difficult.style.display = 'none';
        let label = document.getElementById('etichetta');
        label.style.display = 'none';
        //se si riclicca su play, la pagina verrà azzerata
        playButton.removeChild(play);
        let retry = document.createTextNode('Riprova');
        playButton.append(retry);
        playButton.addEventListener('click',
        function () {
            alert('Comincio nuova partita');
            history.go(0);
        }
        );
        // dichiarazione della variabile grid
        let grid = document.createElement('div');
        // gli aggiungo la calsse grid
        grid.classList.add('gride');
        console.log(grid);
        //al click si aggancia l'elemento creato
        playArea.append(grid);
        //creo array numeri random
        const newArrNum = genArrayRandomNum(1, 81, 81);
        console.log(newArrNum);
        
        //creazione quadratini nella griglia principale
        //ciclo n volte la creazione del quadratino
        for (let i = 0; i < newArrNum.length; i++) {
            //dichiaro la variabile n che farà da contatore aLLe interazioni
            let n = i;
            //dichiarazione variabile ncasual(bombe)
            let nCasual = newArrNum[n];
            console.log(nCasual);
            //dichiaro la funzione che crea i quadrati
            const newElement = creaElem('div', 'squarem');
            console.log(newElement);
            //creo la variabile che contiene il numero della casella iterata
            let nCasella = document.createTextNode(`${n}`);
            //e lo appendo alla casella generata
            newElement.append(nCasella);
            //se l'iterazione è salva o con bomba inserirà classi diverse
            if (nCasual % 5 === 0) {
                //ogni iterazione casuale aggiunge classe bomb
                newElement.classList.add('bomb');
            } else {
                // altrimenti aggiunge la casella safe
                newElement.classList.add('safe');

            }
            //evento click sulla casella iterata
            newElement.addEventListener('click',
                function () {
                    //il valore del punteggio incrementa se si clicca sulla casella safe
                    punteggio++;
                    console.log('Hai cliccato la casella n°' + i);
                    newElement.classList.add('clicked');
                    //se il numero casuale ha lo stesso cvalore della bomba
                    if (nCasual % 5 === 0) {
                        punteggio = punteggio - 1;
                        //alert
                        alert('BOOM!! Hai perso. Il tuo punteggio è: ' + punteggio);
                        history.go(0);

                    } else {
                        console.log(punteggio);
                        score.innerHTML = 'Il tuo punteggio: ' + punteggio;
                    };
                    //se il punteggio raggiunge 33 la partita termina con una vittoria
                    if (punteggio === 65) {
                        alert('Incredibile! Hai vinto!! Il tuo punteggio è: ' + punteggio);
                        history.go(0);
                    }
                }
            
            );
            //appendo alla griglia 100 volte la funzione che crea i quadratini
            grid.append(newElement);
        }
    };
    if(difficult === 'hard') {
        //se la difficolta è stata settata, andra via la selezione della difficoltà
        let difficult = document.getElementById('difficolta');
        difficult.style.display = 'none';
        let label = document.getElementById('etichetta');
        label.style.display = 'none';
        //se si riclicca su play, la pagina verrà azzerata
        playButton.removeChild(play);
        let retry = document.createTextNode('Riprova');
        playButton.append(retry);
        playButton.addEventListener('click',
        function () {
            alert('Comincio nuova partita');
            history.go(0);
        }
        );
        // dichiarazione della variabile grid
        let grid = document.createElement('div');
        // gli aggiungo la calsse grid
        grid.classList.add('gride');
        console.log(grid);
        //al click si aggancia l'elemento creato
        playArea.append(grid);
        //creo array numeri random
        const newArrNum = genArrayRandomNum(1, 49 ,49);
        console.log(newArrNum);
        
        //ciclo n volte la creazione del quadratino
        for (let i = 0; i < newArrNum.length; i++) {
            //dichiaro la variabile n che farà da contatore aLLe interazioni
            let n = i;
            //dichiarazione variabile ncasual(bombe)
            let nCasual = newArrNum[n];
            console.log(nCasual);
            //dichiaro la funzione che crea i quadrati
            const newElement = creaElem('div', 'squareh');
            //definisco variabile che assegna i numeri casuali dell'array
            console.log(newElement);
            //creo la variabile che contiene il numero della casella iterata
            let nCasella = document.createTextNode(`${n}`);
            //e lo appendo alla casella generata
            newElement.append(nCasella);
            //se l'iterazione è salva o con bomba inserirà classi diverse
            if (nCasual % 3 === 0){
                //ogni iterazione casuale aggiunge classe bomb
                newElement.classList.add('bomb');
            } else {
                // altrimenti aggiunge la casella safe
                newElement.classList.add('safe');
                
            }
            //evento click sulla casella iterata
            newElement.addEventListener('click',
            function () {
                //il valore del punteggio incrementa se si clicca sulla casella safe
                punteggio++;
                console.log('Hai cliccato la casella n°' + i);
                newElement.classList.add('clicked');
                //se il numero casuale ha lo stesso cvalore della bomba
                if (nCasual % 3 === 0) {
                    //alert
                    punteggio = punteggio -1;
                    alert('BOOM!! Hai perso. Il tuo punteggio è: ' + punteggio);
                    history.go(0);

                } else {
                    console.log(punteggio);
                    score.innerHTML = 'Il tuo punteggio: ' + punteggio;
                };
                //se il punteggio raggiunge 33 la partita termina con una vittoria
                if (punteggio === 33 ){
                    alert('Incredibile! Hai vinto!! Il tuo punteggio è: ' + punteggio);
                    history.go(0);
                }
            }
            
            );
            //appendo alla griglia 100 volte la funzione che crea i quadratini
            grid.append(newElement);
            
        }
    }
    if(difficult === ''){
        alert('Scegli la difficolà');
        let difficult = document.getElementById('difficolta');
        difficult.style.border = '1px solid red';  
    };
    //funzione che crea un array con orine random di numeri in range minmax
    function genArrayRandomNum(minNum, maxNum, arrLenght) {
        //array vuoto da popolare 
        const arrayToGen = [];

        //ciclo che poplerà l'array
        while(arrayToGen.length < arrLenght) {
            //generare num random in un range
            let newNum = generaNumMinMax(minNum, maxNum);
            //se un num generato non èp presente nell'array
            if (!arrayToGen.includes(newNum)){
                //lo inserisco nell'array
                arrayToGen.push(newNum);
            }
        }
        return arrayToGen;
    }
    //funzione che genera numeri random in range min max
    function generaNumMinMax(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //funzione crea quadratimi
    function creaElem(tagType, classname) {
        const elementoCorrente = document.createElement(tagType);
        elementoCorrente.classList.add(classname);


        return elementoCorrente;
    }
    }
    );