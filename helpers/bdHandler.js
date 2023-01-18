const { readFileSync, writeFileSync } = require('node:fs');

const bdFile = './historyBD.json';
const config = {
  encoding: 'utf-8'
}

const readBD = () => {
  const readData = readFileSync(bdFile, config);
  return JSON.parse(readData);
}

const pushDataToBDCache = ( data = {} ) => {
  let dbData = readBD();
  
  if(dbData.length >= 3) {
    dbData.pop();
    dbData.unshift(data);
  } else {
    dbData.unshift(data);
  }
  return dbData
}


const writeBD = ( data ) => {

  const dbData = JSON.stringify( pushDataToBDCache( data ));

  try {
    writeFileSync( bdFile, dbData, config );
  } catch( err ) {
    console.log(`Hubo un problema,\n problema tipo: ${ err }`)
  }
} 

module.exports = {
  readBD,
  writeBD
}