interface TextInputProp {
    gap: string;
    labelName: string
}

export function TextInputWithLabel(prop: TextInputProp) {
    return (
        <>
            <div className={`sm:col-span-3 md:w-full ${prop.gap}`}>
                <label htmlFor="first-name" className="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-medium leading-6 text-gray-900">{prop.labelName}</label>
                <div className="mt-2">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
        </>
    )
}


interface DropDownPorp {
    options: string[]
    labelName: string
}
export function DropDown(prop: DropDownPorp) {
    return (
        <div className="w-full">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">{prop.labelName}</label>
            <div className="mt-2">
                <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    {
                        prop.options.map(
                            element => <option>{element}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}

interface DropDownSuggesstionsProp{

}
export function DropDownSuggestions(prop: DropDownSuggesstionsProp) {
    return (
        <div className="w-full">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">{}</label>
            <div className="mt-2">
                <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    {/* {
                        prop.options.map(
                            element => <option>{element}</option>
                        )
                    } */}
                </select>
            </div>
        </div>
    )
}

export function CheckBox(){
    return (
        <>
             <div className="flex h-6 items-center">
                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              </div>
        </>
    )
}


interface RadioButtonProp{
    radioLabelName:string
    radioBtnName:string
}
export function RadioButton(prop:RadioButtonProp){
    return (
        <>
            <div className="flex items-center gap-x-3">
              <input id="push-everything" name={`${prop.radioBtnName}`} type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">{prop.radioLabelName}</label>
            </div>
        </>
    );
}