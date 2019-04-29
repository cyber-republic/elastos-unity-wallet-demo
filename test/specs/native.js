let log;
// var expect = require('chai').expect

const getBtnElement = async (name)=>{
  return await $(`~btn:${name}`);
}
const getTxtElement = async (name)=>{
    return await $(`~txt:${name}`);
}

describe('Click Test button', () => {
    it('calls the test bridge', async()=>{
        let btn = await getBtnElement('testBridgeButton');
        await btn.click();
        let txtComponent = await getTxtElement('testBridgeText');
        let txt = await txtComponent.getText();
        // the bridge returns the text test
        expect(txt).toEqual("test");
    });
});