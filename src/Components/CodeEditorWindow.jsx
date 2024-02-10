import Editor from "@monaco-editor/react";

const CodeEditorWindow = () => {
    function getCode() {
        return [
            "// Oh, prepare yourself for the most hilarious joke you've ever heard!",
            "",
            "const jokeSetup = () => {",
            '  const hilariousVariable = "Why did the chicken cross the road?"; // Wow, such a unique and original question!',
            "  return hilariousVariable;",
            "};",
            "",
            "const jokePunchline = (setup) => {",
            "  const kneeSlapperFunction = (setup) => {",
            '    const response = setup + " To get to the other side, of course!"; // Ah, the epitome of humor!',
            "    return response;",
            "  };",
            "",
            "  return kneeSlapperFunction(setup);",
            "};",
            "",
            "const joke = jokePunchline(jokeSetup());",
            "console.log(joke); // Brace yourself for an outburst of laughter!",
            "",
            "",
            "",
            "",
            "",
            "",
        ].join("\n");
    }

    return (
        <div className="editor">
            <Editor
                height="50vh"
                width={`100%`}
                value={getCode()}
                language="javascript"
                defaultValue="// some comment"
            />
        </div>
    );
};
export default CodeEditorWindow;
