function lottoGenerator() {
    //const lottArr = [];
    const lottoSet = new Set();

    while(lottoSet.size < 6) {
        const result = parseInt(Math.random() * 45 + 1);
        
        lottoSet.add(result);
    }

    return lottoSet;
}

console.log(lottoGenerator());
