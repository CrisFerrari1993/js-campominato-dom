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

        //creazione quadratini nella griglia principale
        //ciclo 100 volte la creazione del quadratino
        for (let i = 1; i <= 100; i++) {
            //dichiaro la variabile n che farà da contatore aLLe interazioni
            let n = i;
            //dichiaro la funzione che crea i quadrati
            const newElement = creaElem('div', 'square');
            //creo la variabile che contiene il numero della casella iterata
            let nCasella = document.createTextNode(`${n}`);
            //e lo appendo alla casella generata
            newElement.append(nCasella);
            //evento click sulla casella iterata
            newElement.addEventListener('click',
                function () {
                    console.log('Hai cliccato la casella n°' + i);
                    newElement.classList.add('clicked');
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
        
        //creazione quadratini nella griglia principale
        //ciclo 100 volte la creazione del quadratino
        for (let i = 1; i <= 81; i++) {
            //dichiaro la variabile n che farà da contatore aLLe interazioni
            let n = i;
            //dichiaro la funzione che crea i quadrati
            const newElement = creaElem('div', 'squarem');
            //creo la variabile che contiene il numero della casella iterata
            let nCasella = document.createTextNode(`${n}`);
            //e lo appendo alla casella generata
            newElement.append(nCasella);
            //evento click sulla casella iterata
            newElement.addEventListener('click',
            function () {
                console.log('Hai cliccato la casella n°' + i);
                newElement.classList.add('clicked');
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
        
        //creazione quadratini nella griglia principale
        //ciclo 100 volte la creazione del quadratino
        for (let i = 1; i <= 49; i++) {
            //dichiaro la variabile n che farà da contatore aLLe interazioni
            let n = i;
            //dichiaro la funzione che crea i quadrati
            const newElement = creaElem('div', 'squareh');
            //creo la variabile che contiene il numero della casella iterata
            let nCasella = document.createTextNode(`${n}`);
            //e lo appendo alla casella generata
            newElement.append(nCasella);
            //evento click sulla casella iterata
            newElement.addEventListener('click',
            function () {
                console.log('Hai cliccato la casella n°' + i);
                newElement.classList.add('clicked');
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

    //funzione crea quadratimi
    function creaElem(tagType, classname) {
        const elementoCorrente = document.createElement(tagType);
        elementoCorrente.classList.add(classname);


        return elementoCorrente;
    }
    }
    );