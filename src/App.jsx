import "./App.css";
import CodeEditorWindow from "./Components/CodeEditorWindow";
// import CustomInputWindow from "./Components/CustomInputWindow";
// import CodeOutPutWIndow from "./Components/CodeOutPutWIndow";

function App() {
    return (
        <>
            <h3>PROJECT CODE</h3>
            <CodeEditorWindow />
            {/* <div className="bottom">
                <CodeOutPutWIndow />
                <CustomInputWindow />
            </div> */}
        </>
    );
}

export default App;
