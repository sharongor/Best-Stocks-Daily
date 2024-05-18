document.getElementById('fetchButton').addEventListener('click', async () => {

    try {
        // hiding the button after clicking
        document.getElementById('fetchButton').style.display = 'none';

        //will run to the server side(our app.js) and in there it will fetch the json from the api and will retreive back the json
        const res = await fetch('http://localhost:3000/stocks')
        if (!res.ok) {
            throw new Error(`http error status  ${res.status}`);
        }

        const data = await res.json()

        // each card contains the name of the stock ( ticker) , sentiment - the verdict on whether the stock
        // is bearish ( decresing ) or bullish ( increasing ) , and a score for that stock . 
        const sentiments = data.map(senti => senti.sentiment).join('\n')
        const sentiments_scores = data.map(senti_score => senti_score.sentiment_score).join('\n')
        const tickers = data.map(my_ticker => my_ticker.ticker).join('\n')

        //converting from an array of objects into a regular array
        const arrSenti_Scores = sentiments_scores.split("\n")
        const arrSentiments = sentiments.split("\n")
        const arrTickers = tickers.split("\n")

        const arrStocks = []

        for (let i = 0; i < arrSenti_Scores.length; i++) {
            arrStocks.push(new StocksClass(arrSentiments[i], arrSenti_Scores[i], arrTickers[i]))
        }

        for (let i = 0; i < arrStocks.length; i++) {
            console.log(i)
            const url = arrStocks[i];

            // These lines define a card
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card');
            cardContainer.style.margin = '10%';

            const tickerElement = document.createElement('h1');
            tickerElement.innerText = 'Stock Name: ' + url.ticker;

            const sentimentElement = document.createElement('h2');
            sentimentElement.innerText = 'Market Type: ' + url.sentiment;

            const sentimentScoreElement = document.createElement('h2');
            sentimentScoreElement.innerText = 'Sentiment Score: ' + url.score;

            cardContainer.appendChild(tickerElement);
            cardContainer.appendChild(sentimentElement);
            cardContainer.appendChild(sentimentScoreElement);
            document.getElementById('svgContainer').appendChild(cardContainer);
        }
    }

    catch (error) {
        console.log(error)
    }

})