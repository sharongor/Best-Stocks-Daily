class StocksClass {
    #sentiment
    #sentiment_score
    #ticker


    constructor(senti, senti_score, ticker) {
        this.#sentiment = senti;
        this.#sentiment_score = senti_score;
        this.#ticker = ticker;
    }



    get sentiment() {
        return this.#sentiment;
    }

    get score() {
        return this.#sentiment_score;
    }
    get ticker() {
        return this.#ticker;
    }

    set sentiment(newSenti) {
        this.#sentiment = newSenti;
    }

    set score(newScore) {
        this.#sentiment_score = newScore
    }

    set ticker(newTicker) {
        this.#ticker = newTicker;
    }

}