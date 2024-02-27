(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }


    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) {
        }
    }

    class InputEvents {
        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    class InputElement {
        htmlElement: HtmlElement;
        inputAtribute: InputAttributes;
        constructor(id: string, type: HtmlType, value: string, placeholder: string) {
            this.htmlElement = new HtmlElement(id, type);
            this.inputAtribute = new InputAttributes(value, placeholder);

        }
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Fernando', 'input', 'Enter first name', 'txtName');

    console.log({ nameField });

})()