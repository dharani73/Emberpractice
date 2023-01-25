import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
export default class AnalysisController extends Controller {
tableheading = 'Fruit Info';
@tracked fruitName;
@tracked price;
@tracked quantity;

@tracked fruitData = [
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

@action
submitNow(e){
    console.log(this.fruitData);
    e.preventDefault();
    alert('Hi Im submitting the form');
    // console.log(this.fruitName+this.quantity+this.price);
    let fruitProp = {
        name: this.fruitName,
        quantity:Number(this.quantity),
        price:Number(this.price)
    }
    // this.fruitData.push(fruitProp);
    // console.log(this.fruitData);
    let supplyData = this.fruitData;
    supplyData.push(fruitProp);
    this.fruitData=supplyData;

}
}
