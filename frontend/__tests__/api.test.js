const ApiData = require('../src/api/api.js');

const rows = [
    { id: 1, col0: "",  col1:'ANPINA', col2: 'antonio.pina@tvglobo', col3: '28/05/2019', col4:'30/05/2019',  col5:'01' , col6:'ATIVO'},
    { id: 2, col0: "", col1:'CCHANG',col2: 'ciro.chang@tvglobo.c', col3: '28/05/2019', col4:'30/05/2019' , col5:'01' , col6:'ATIVO' },
    { id: 3, col0: "", col1:'TMARCAL',col2: 'thiago.marcal@tvglob', col3: '28/05/2019', col4:'30/05/2019' , col5:'01' , col6:'ATIVO' },
    { id: 4, col0: "", col1:'ECGIANN',col2: 'ecgiannotto@tvglobo.', col3: '28/05/2019', col4:'30/05/2019' , col5:'01' , col6:'ATIVO' },
    { id: 5, col0: "", col1:'YFERNAND',col2: 'yuri.vasquez@tvglobo', col3: '28/05/2019', col4:'30/05/2019' , col5:'02' , col6:'ATIVO' },
    { id: 6, col0: "", col1:'PLACERDA',col2: 'pedro.soares.lacerda', col3: '28/05/2019', col4:'30/05/2019' , col5:'02' , col6:'ATIVO' }
  ];

it('returns the data from the api sucessfully', () => {
    const rowsData =  ApiData();  
    expect(rowsData).toEqual(rows);  
  });