import { LightningElement, track } from 'lwc';

export default class QueryBuilder extends LightningElement {
    @track selectedObject='';
    @track selectedField='';
    @track selectedOperator='';
    @track queryResult=null;
    @track column=[];

    get objectOptions() {
        return [
            { label: 'Account', value: 'Account' },
        ];
    }

    get fieldOptions() {
        return[];
    }

    get operatorOptions() {
        return [
            { label: '=', value: '=' },
            { label: '>', value: '>' },
            { label: '<', value: '<' },
        ];
    }

    handleObjectChange(event) {
        this.selectedObject = event.target.value;
    }

    handleFieldChange(event) {
        this.selectedField = event.target.value;
    }

    handleOperatorChange(event) {
        this.selectedOperator = event.target.value;
    }

    buildQuery() {
        if (!this.selectedObject || !this.selectedField || !this.selectedOperator) {

            return;
        }
        const queryString = `SELECT ${this.selectedField} FROM ${this.selectedObject}`;
        this.queryResult = queryString;
        this.columns = [
            { label: this.selectedField, fieldName: this.selectedField }
        ];
    }
}
