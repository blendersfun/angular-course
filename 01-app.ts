import { TableComponent, ColumnConfig } from './table-component';

class AppComponent {
    constructor() {
        const usernameValidator = (value: string) => value.length < 25;
        const lifeStoryColumn: ColumnConfig = {
            name: 'Life Story'
        };
        const table = new TableComponent({
            cols: [{
                name: 'Username',
                validators: [usernameValidator]
            }],
            data: [
                {
                    username: 'blendersfun',
                    lifeStory: 'I was born in a little hamlet in France... '
                }
            ]
        });
        
        table.config.cols.forEach((col: ColumnConfig) => {
            const { name, validators } = col;
            if (validators.length) {
                validators.pop();
            }
            console.log(name, validators && validators.length);
        })
    }
}
