
let log;

const getBtnElement = async (name)=>{
  return await $(`~btn:${name}`);
}
const getTxtElement = async (name)=>{
    return await $(`~txt:${name}`);
  }
const getLogElement = async ()=>{
  return await $('~log');
}
const print = (msg)=>{
  console.log(`[LOG] => ${msg}`);
};
const printLog = async ()=>{
  const msg = await log.getText();
  print(msg);
}

describe('Bridge test', () => {
    it('test bridge clickes', async()=>{
        let btn = await getBtnElement('testBridgeButton');
        await btn.click();
        let txt = await getTxtElement('testBridgeText');
        console.log(txt);
        await printLog();
    });
});