
import Input from "./Input";

const MoviesPerPageSelect = () => {
    const choices = [
        {
            inputId: "per-page-12",
            inputValue: 12
        }, {
            inputId: "per-page-8",
            inputValue: 8
        }, {
            inputId: "per-page-4",
            inputValue: 4
        }
    ]

    return (
        <fieldset className="mb-16 border border-gray-300 rounded p-1.5 text-gray-300">
            <legend className="font-semibold">Films par page</legend>
            <div className="flex">
                {choices.map(choice => 
                    <Input 
                        key={choice.inputValue}
                        inputId={choice.inputId}
                        inputValue={choice.inputValue}
                    />
                )}
            </div>
        </fieldset>
    ) 
}


export default MoviesPerPageSelect;