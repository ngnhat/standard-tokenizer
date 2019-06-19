# elasticsearch tokenizers

    const { standardTokenizer } = require('tokenizers');
    const tokens = standardTokenizer("Düsseldorf, Köln, Москва, 北京市, !@#$");

    tokens ~ [ 'düsseldorf', 'köln', 'москва', '北', '京', '市' ];
___

    const { asciiFoldingTokenizer } = require('tokenizers');
    const tokens = asciiFoldingTokenizer("Düsseldorf, Köln, Москва, 北京市, !@#$");

    tokens ~ [ 'dusseldorf', 'koln', 'москва', '北', '京', '市' ];
