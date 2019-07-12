# elasticsearch tokenizers

## Using tokenizers

Install tokenizers from npm

With yarn

    yarn add tokenizers

or alternatively using npm:

    npm install --save tokenizers

___
    const {
      asciiFolding,
      standardTokenizer,
      asciiFoldingTokenizer,
      nGramTokenizerCreater,
      edgeNGramTokenizerCreater,
    } = require('tokenizers');


    asciiFolding('Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉO')
    // ~ Iлternationɑlizati߀ԉO


    standardTokenizer("Düsseldorf Köln, Москва 北京市 !@#$");
    // ~ [ 'düsseldorf', 'köln', 'москва', '北', '京', '市' ];


    asciiFoldingTokenizer("Düsseldorf Köln, Москва 北京市 !@#$");
    // ~ [ 'dusseldorf', 'koln', 'москва', '北', '京', '市' ];


    const standardNGramTokenizer = nGramTokenizerCreater({
      min: 3,
      max: 4,
      analyzer: 'standard',
    });
    standardNGramTokenizer('Quick Foxes');
    // ~ ['qui', 'quic', 'uic', 'uick', 'ick', 'fox', 'foxe', 'oxe', 'oxes', 'xes']

    const asciifoldingEdgeNGramTokenizer = nGramTokenizerCreater({
      min: 2,
      max: 10,
      analyzer: 'asciifolding'
    });
    asciifoldingEdgeNGramTokenizer('Tiệt nhiên phận định tại thiên thư')
    // ~ ['ti', 'tie', 'tiet', 'nh', 'nhi', 'nhie', 'nhien', 'ph', 'pha', 'phan', 'di', 'din', 'dinh', 'ta', 'tai', 'th', 'thi', 'thie', 'thien', 'th', 'thu']
