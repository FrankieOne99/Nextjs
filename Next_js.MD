# NEXTJS

Nextjs è un FRAMEWORK per React.

Facilita la creazione di web application e supporta la generazione di siti statici e rendering lato server.
Si tratta di un framework, che rispetto alla semplice libreria React, ci permette di creare delle applicazioni FULLSTACK.
Si pone come obiettivo di rendere più semplice la costruzione di applicazioni react su larga scala, implementando funzionalità (come ad esempio il routing) che per essere realizzate in react classico necessiterebbero di liberie esterne.

### NOTA: LIBRERIA VS FRAMEWORK

Nextjs è un framework di react, che a sua volta è una libreria di javascript.
Una libreria è una raccolta di funzioni e codice già scritto che gli sviluppatori possono utilizzare per svolgere specifici compiti, come la gestione delle stringhe, l'accesso al database, o la manipolazione di dati, mentre un framework è un ambiente di sviluppo predefinito che fornisce una struttura e un set di regole per costruire un'applicazione intera.

## CARATTERISTICHE PRINCIPALi:

### Rendering lato server (SSR)

Quando si sviluppa una pagina utilizzando React, questa viene renderizzata lato client. Il contenuto inizialmente non è presente nell'HTML che viene caricato dal browser. In particolare, se ispezioniamo la pagina, noteremo che all'interno del div con id "root" non ci sarà nessun dato visibile, poiché il contenuto viene aggiunto dinamicamente tramite JavaScript solo successivamente. Questo comportamento può causare dei problemi, soprattutto se la pagina deve caricare dati da un server, (esempio un elenco di immagini con relative descrizioni). In questi casi, l'utente potrebbe vedere un "loading" prolungato con la pagina che carica lentamente e ciò può compromettere l'esperienza utente (UX), dando l'impressione di un'applicazione poco performante.

Inoltre, il rendering lato client può rappresentare un ostacolo per l'ottimizzazione SEO (Search Engine Optimization). I motori di ricerca, infatti, durante la scansione di una pagina, vedono solo l'HTML iniziale, che non contiene i dati dinamici che vengono inseriti da JavaScript. Di conseguenza, il contenuto non viene ottimizzato al meglio.

Al contrario, Next.js risolve questi problemi grazie al rendering lato server (SSR - Server-Side Rendering). Qui, la pagina viene renderizzata completamente sul server prima di essere inviata al browser. Questo significa che, quando l'utente apre la pagina, vedrà subito il contenuto completo, riducendo il tempo di caricamento e migliorando significativamente l'esperienza utente. Inoltre, l'HTML che viene inviato è già popolato con i dati, il che consente anche ai motori di ricerca di vedere il contenuto fin da subito, migliorando l'ottimizzazione SEO.

### Pages router o app router?

Con react noi realizziamo delle SPA (Single Page Application), ma con il routing diamo all'utente l'illusione di navigare fra più pagine
(poichè c'è un cambiamento nell'URL). Nelle applicazioni in react, è necessario installare una libreria (React Router) e scrivere codice aggiuntivo. Con nextjs, tutto questo non è necessario poichè le rotte vengono definite direttamente dai file e dalle cartelle(modello basato sul file system).

In Nextjs è possibile lavorare con 2 tipi di routing.

1. PAGES ROUTER

Il pages router è il metodo più vecchio con cui eseguire routing in nextjs.
E' considerato più stabile, ed è ancora usato in molti progetti next.
Il rotuting è basato sul file system. Quando si crea una nuova pagina nella directory "pages" questa diverrà automaticamente disponibile come rotta. Ancora oggi si tratta di un approccio molto stabile ed essendo il metodo più vecchio con cui realizzare applicazioni, è molto presente in diversi progetti react già esistenti

2. APP ROUTER

L'app router è invece un modo per fare routing molto più recente (introdotto in nextjs13).
Rispetto al pages router permette di utilizzare e supportare features più recenti come i "React Server" o le "Server actions".
Anche qui il routing è basato sul file system, MA in questo caso le rotte vengono definte dalle cartelle e non dai singoli file.
All'interno di "app" ogni qualvolta creiamo una cartella (dentro cui poi si troverà il file js o tsx con la logica) questa diverrà automaticamente disponibile come rotta. E' possibile creare delle sotto-rotte creando cartelle una dentro l'altra. L'App router è molto probabile diventi lo standard per la realizzazione di applicazioni in nextjs

### Un Framework FULLSTACK

Abbiamo definito nextjs un framework fullstack, poichè è capace di gestire sia le attività lato client che quelle lato server. Dunque è possibile:

- Scrivere direttamente la logica di backend. Nei file del progetto è presente la cartella "api". Queste API possono essere usate per gestire richieste, interagire con database, inviare email, ecc., senza L'uso di un backend separato.

- Recuperare e manipolare i dati da un database o API esterne utilizzando le server actions.

In sostanza, è possibile realizzare in un unico progetto (senza quindi la necessità di crearne un altro per il backend) un applicazione perfettamente funzionante che presenta in un UNICA repository sia codice di frontend che di backend.

## VANTAGGI

### Rispetto a React

- Migliore esperienza utente
- Sviluppo rapido con funzionalità hot-reload
  (essendo un framework, non dovrò installare librerie esterne)
- integrazione semplice con API e servizi web

### Personalizzazione e configurazione

Next.js permette di usare CSS e Sass senza bisogno di configurazioni particolari.

- E' presente un file "globals.css" con gli stili globali.
- In Next.js, è possibile usare i CSS Modules, ovvero, un modo per scrivere stili CSS in locale a uno specifico componente

### SEO

- Grande supporto per la gestione e creazione di metatag. e ottimizzazione delle prestazioni.

### Internazionalizzazione

La creazione di pagine multilingua è facilitata. Per fare ciò, la documentazione di NextJs consiglia di usare la libreria next-translate.

### Deploy e hosting

Buona compatibilità con più piattaforme di hosting, come netlify o Vercel.

## INSTALLAZIONE

Per usare nextJs è necessario aver installato prima node js e Node Package Manager (NPM).

E' possibile verificarlo dai seguenti comandi:

- node -v
- npm -v

Se sono installati correttamente il comando per iniziare un nuovo progetto è:

- npx create-next-app@latest

### TURBOPACK

Il pacchetto turbopack in Next.js è un nuovo bundler (un sistema che prepara il codice per la produzione, raggruppando e ottimizzando i file) ottimizzato sia per javascript che per typescript. E' scritto in linguaggio Rust, e può essere utilizzato sia con il "Pages router" che con "l'app router". Con l'ultima versione di nextjs( Febbraio 2025) è stabile, pur non supportando ancora alcune funzioni. come ad esempio il next build. (supporta solo next dev).

## FILE PRINCIPALI

- "app" o "pages" (in base al tipo di router selezionato)--> dove si trova il nostro codice.
- "public"→ dove si trovano le risorse esterne (tipo le immagini).
- "node_modules"→ contiene tutti i pacchetti necessari al funzionamento del nostro applicativo.
- "next"→ generata in maniera automatica dall’applicativo. se la eliminiamo e poi esguiamo il comando "run dev" verrà ricreata. Si tratta della cartella che conterrà la build. dell’applicazione quando eseguiamo il comando npm run build

## FILE DAI NOMI "SPECIALI"

### Page

Il file page.js è il file principale che definisce una pagina in Next.js. Ogni volta che hai una pagina specifica (come la homepage, una pagina di prodotto o un blog), creerai un file page.js per quella rotta .

### Layout

il file layout.js viene utilizzato per definire un layout condiviso per più pagine o sezioni dell'applicazione. È utile quando desideri avere una struttura comune (come intestazioni, piè di pagina, sidebar, navbar, ecc.) che venga ripetuta su diverse pagine.
In next è possibile creare Layout annidati. E' sufficiente creare il proprio Layout (come component) e aggiungerlo alle pagine in cui desideriamo sia presente--> per aggiungerlo a tutte le pagine basta inserirlo nel file di layout principale.

### Loading

Il file loading.js viene utilizzato per gestire e mostrare un "loading state" (stato di caricamento) quando un componente o una pagina è in fase di caricamento. È utile per creare una migliore esperienza utente, mostrando un'indicazione visiva (come un spinner o un messaggio) mentre i dati o il componente sono in attesa di essere caricati.

### Not-found

Gestisce la pagina di errore "404" (pagina non trovata). Quando ad una rotta non corrisponde nessuna pagina, nextjs ci reinderizzerò su questo file che può quindi essere personalizzato.

### Error

Gestisce gli errori nell'applicazione. Se si verifica un errore in un component, nextjs ci reinderizza su questo file che può quindi essere personalizzato.

## AUTENTICAZIONE

### Middleware

Il middleware in Next.js è una funzionalità che ci permette di eseguire logica personalizzata prima che una richiesta raggiunga una rotta di destinazione. In altre parole, il middleware agisce come una sorta di "filtro" che e può eseguire operazioni come il controllo delle autorizzazioni, la gestione dei cookie, il reindirizzamento, l'analisi delle richieste, la gestione della sessione etc.
Il file middleware va inserito nella cartella principale del progetto "src".

All'interno del Middleware è necessario inserire una funzione di configurazione detta "matcher" che ci permette di indicare su quali pagine della nostra applicazione il middleware deve agire. Senza di ciò, il middleware verrebbe invocato ogni volta che refreshamo o cambiamo pagina all'interno del nostro sito.

### Next Auth

NextAuth.js, che coi prossimi aggiornamenti diverrà Auth.js (Febbraio 2025) è una libreria open source che rappresenta un ottima soluzione per gestire le autenticazioni con Next.js

### Caratteristiche principali:

- Sicurezza elevata: Fornisce una gestione robusta delle sessioni, crittografia dei cookie e supporto per i moderni standard di sicurezza come l'autenticazione basata su JWT e OAuth2.

- Scalabilità: Può supportare sia piccole applicazioni che progetti di grandi dimensioni.

- Integrazione: Offre supporto per l'interazione con diversi database come MongoDB, MySQL, PostgreSQL

- Supporto: Auth.js offre una vasta gamma di provider di autenticazione integrati, come Google, Facebook, Twitter, GitHub etc.

## LE ROTTE

### ROTTE DINAMICHE

In nextjs è possibile generare delle rotte cosìdette dinamiche.
Se per esempio abbiamo una pagina "blog" al cui interno ci sono dei post, e vogliamo creare delle rotte per ciascun post non è sostenibile creare un componente per ogni singolo post. Possiamo, invece, creare un unico componente che aggiornerà la rotta in base al post selezionato. per fare ciò bastare creare una cartella il cui nome DEVE essere messo fra le quadre (esempio [slug] ), all'interno di Blog.

### ROTTE PARALLELE

Le rotte parallele si riferiscono a una funzionalità che consente di caricare diverse sezioni di una pagina in modo indipendente e parallelo, migliorando l’esperienza utente e le prestazioni del sito.

All'interno della rotta in cui vogliamo inserire le rotte parallele dobbiamo creare le cartelle delle nostre sezioni ma dovranno essere nominate con la "@" davanti.

Esempio, se all'interno di una pagina "post" vogliamo caricare 2 sezioni, una per mostrare i vecchi post e una quelli nuovi dobbiamo:

- creare le cartelle @oldPost e @newPost
- Creare un nuovo Layout, che però non passerà come paramento "children" bensì i nomi delle due cartelle oldPost e newPost.
- Renderizzarli all'interno del Layout

### ROTTE CATCH ALL

Una rotta catch-all è una rotta che cattura tutti i parametri che seguono una parte fissa dell'URL, senza limitazioni sul numero di segmenti, usando [[..."nomeRotta]]. Se per esempio creiamo una cartella "Blog" al cui interno creaiamo una cartella chiamata [[...filter]] il componente all'interno di quest'ultima cartella verrà renderizzato PER OGNI rotta successiva a "blog" indipendentemente dal numero di segmenti presenti nell'url.

- localhost:3000/blog/post
- localhost:3000/blog/post/123
- localhost:3000/blog/post/123/Lorem/Ipsum

Esempio, nel nostro caso, tutte queste rotte ci portano sempre all'interno di [[...filter]]

### ROUTE GROUPS

Le Route Groups consentono di raggrupare tutte quelle rotte a cui voglio dare un layout condiviso . Per fare ciò è sufficiente creare una cartella (in cui inserire le rotte in questione) e darle un nome che metterò tra le parentesi tonde.

Esempio:

Se voglio creare un layout per tutte le pagine della mia applicazione ad eccezione della hompage, dovrò inserire queste pagine all'interno di una cartella che possiamo chiamare (content). Successivamente, basterà creare all'interno di questa nuova cartella il layout che verrà automaticamente condiviso a tutte le pagine all'interno di (content).

### ROUTE API

Si tratta di rotte pubbliche, che possono essere chiamate da servizi esterni per integrazioni. Possiamo quindi creare delle API integrate direttamente al nostro progetto.

E' sufficiente creare all'interno della cartella del progetto una cartella chiamata "api" e poi un file "route.ts" . Qui possiamo creare le nostre funzioni (GET, POST ETC.) che potranno essere utilizzate all'interno del nostro progetto.
Le differenze sostanziali, tra le server action e che le route API sono pubbliche, e sono sopratutto SERVERLESS.

## CLIENT E SERVER COMPONENT

In nextjs, più precisamente quando usiamo app router, esistono 2 tipologie di componenti:

- Server Component
- Client Component

Nei progetti in vanilla React vengono usati i Client Component. Qui, react viene usata come libreria puramente lato client che esgue il codice nel browser SUL client.

Con Next questo cambia poichè TUTTI i component (pagine, layout etc) per default vengono renderizzati SOLO lato server.
Proprio per questo, quando eseguiamo un "console.log" in un component nextjs se guardiamo nella console dei devTools non vedremo nulla.

Altro esempio è quando utilizziamo "fetch". possiamo utilizzare async e await direttamente all'interno del componente e quindi non abbiamo più necessità di usare useState o useEffect o librerie come redux, per recuperare dei dati.

E' giusto segnalare però, che all'interno dei server component NON è possibile utilizzare Hook, oppure gli event handler (onClick,doubleClick etc.)

I client component, invece vengono solo PRE-RENDERIZZATI sul server, per poi venire potenzialmente anche renderizzati sul client.

Si tratta di component che il più delle volte contengono funzionalità disponibili solo dal client (esempio UseState o UseEffect o gli event Handler). Considerando che tutti i component sono di default server component per renderli client component dovviamo usare una direttiva:

- "use-client"

ATTENZIONE: questi tipi di component esistono entrambi in react, ma funzionano e posso essere usati solo quando si usa un framework come Nextjs

## PAGE RENDERING

Quando utilizziamo il pages router, possiamo individuare 3 tipi di rendering delle nostre pagine:

### SSG

Acronimo per Static Site Generation. La pagina finale, che l'utente vede viene generata in fase di build. Il sito viene generato in modo statico:

Questa generazione conviene quando bisogna ad esempio creare una pagina di documentazione, con contenuti che una volta inseriti non vanno modificati.

### SSR

Acronimo per Server Side Rendering. La pagina finale viene generata SOLO quando l'utente la richiede (e quindi non in fase di build).

### ISR

Acronimo Incremental Static Regeneration. La pagina finale è anche qui statica, viene generata quando l'utente la richiede ma qui, tramite l'uso di "revalidate" è possibile invalidare la cache di una specifica pagina o percorso e forzare una rigenerazione istantanea della stessa da parte di Next.js. È particolarmente utile quando si vuole aggiornare il contenuto di una pagina a seguito di un'azione o di un cambiamento (per esempio, una modifica nel database o una richiesta da un'API).

## SERVER ACTION

Le Server Action ti permettono di scrivere funzioni(non componenti da renderizzare) che vengono eseguite SOLO lato server, ma che possono essere invocate direttamente da un componente React lato client. Di solito, viene creato un file chiamation action.ts che avrà in alto la direttiva

- "use-server"

Le server action ci permettono quindi di creare codice lato server, che possiamo richiamare quando ne abbiamo bisogno (esempio il submit di un form), senza fare chiamate HTTP. Inoltre, questo codice NON è raggiungibile dagli utenti.

## COMPONENTI BULT-IN

I componenti bult-in sono dei componenti nativi di next js, più importanti sono:

### Image

Utilizzando il component Image è possibile caricare immagini ottimizzate al meglio, anche grazie al LazyLoading.
le sue propietà obbligatorie sono:

- src-->Percorso dell'immagine
- alt-->Testo alternativo dell'immagine
- width--> width NON determina la grandezza in pixel dell'immagine in questo caso, ma serve a migliorare la qualità dell'immagine.
- height--> heigth NON determina la grandezza in pixel dell'immagine in questo caso, ma serve a migliorare la qualità dell'immagine.

### Link

Il componenti Link, come suggerisce il nome, è quello che ci permette di spostarci e navigare attraverso le varie pagine del nosto sito.
Al suo interno va inserita l'attributo href="" al quale sarà sufficiente inserire l'url della pagina che vogliamo collegare.
ES:

### Suspense

In Next.js, Suspense è una funzionalità che permette di gestire il caricamento di dati asincroni e risorse in modo più elegante, migliorando l'esperienza utente. Risulta utile nella gestione del caricamento di componenti che dipendono da risorse esterne o dati che devono essere recuperati in modo asincrono (ad esempio, chiamate API).

### Script

Ci permette di caricare in modo ottimizzato script esterni, di avere maggior controllo sul tempo di caricamento e possiamo anche usarlo per prevenire un eventuale blocco del rendering della pagina.

Esempio:

Se abbiamo uno script molto pesante, che vogliamo venga caricato per ultimo possiamo farlo accedendo alla propietà "strategy" del component Script e impostarla a "lazyOnload".
