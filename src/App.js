import { useReducer } from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import { initialState, reducer } from "./AppReducer";
import Sidebar from "./components/sidebar";
import MainArea from "./components/mainArea";
import Preview from "./components/preview";
import { DragDropContext } from "react-beautiful-dnd";
import { ADD_ACTIONS_DATA } from "./constants/reducerConstants";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onDrop = (data) => {
    console.log(data);
    const { source, destination, draggableId } = data;

    if (!destination || destination.droppableId !== "board") {
      return;
    }

    if (
      source.droppableId === "motion" ||
      source.droppableId === "looks" ||
      source.droppableId === "control"
    ) {
      let newObj = {
        type: draggableId,
        value: state.sideBarData[draggableId],
        id: Date.now().toString(),
      };
      dispatch({
        type: ADD_ACTIONS_DATA,
        payload: newObj,
        index: destination.index,
      });
    } else {
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <DragDropContext onDragEnd={onDrop}>
        <div className="app-layout bg-blue-300">
          <Sidebar />
          <MainArea />
          <Preview />
        </div>
      </DragDropContext>
    </AppContext.Provider>
  );
}

export default App;
