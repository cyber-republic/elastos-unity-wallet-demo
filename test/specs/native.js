const checkWord = require('check-word');
const words = checkWord('en'); 

const getBtnElement = async (name)=>{
  return await $(`~btn:${name}`);
}

const getTxtElement = async (name)=>{
    return await $(`~txt:${name}`);
}

const getTxtInputElement = async (name)=>{
    return await $(`~txtInput:${name}`);
}

describe('Click Create button on the First Screen', () => {
    it('calls the GenerateMnemonic bridge', async()=>{
        let btn = await getBtnElement('Create');
        await btn.click();
        let txtComponent = await getTxtElement('Mnemonic');
        let txt = await txtComponent.getText();
        // the bridge returns the mnemonic
        const mnemonics = txt.split(" ");
        expect(mnemonics.length).toEqual(12);
        mnemonics.forEach(element => {
            expect(words.check(element)).toEqual(true);
        });
    });
});

describe('Create Wallet', () => {
    it('calls the CreateWallet bridge', async()=>{
        await getBtnElement('Create')
        .then((elem) => elem.click())
        await getBtnElement('CreateWallet')
        .then((elem) => elem.click())
        let txtComponent = await getTxtElement('Balance');
        expect(txtComponent.error).toBeUndefined();
    });
});