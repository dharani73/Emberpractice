import Route from '@ember/routing/route';

export default class AnalysisRoute extends Route {
    fruitData = [
        {
            name : 'Apple',
            quantity : 100,
            price : 90,
        },
        {
            name :  'Mango',
            quantity : 120,
            price : 100,
        },
        {
            name :  'Orange',
            quantity : 130,
            price : 150,
        }

    ]
    model(){
        return this.fruitData;
    }
}
