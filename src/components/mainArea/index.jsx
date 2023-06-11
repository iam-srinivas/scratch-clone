import React, { useContext, useRef } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { AppContext } from '../../AppContext'
import { WrapperComponent } from '../actionComponents/WrapperComponent'
import { DELETE_ACTION_DATA, UPDATE_ACTIONS_DATA } from '../../constants/reducerConstants'

const MainArea = () => {

    const { state, dispatch } = useContext(AppContext)
    const actionTimeoutsRef = useRef([]);

    const runAllActions = () => {
        clearActionTimeouts();

        state.actions.forEach((element, index) => {
            const delay = 1000 * index; // Delay calculation based on the index (1 second delay between each action)
            const timeoutId = setTimeout(() => {
                const customEvent = new CustomEvent('customEvent', {
                    detail: { type: element.type, value: element.value },
                });
                window.dispatchEvent(customEvent);
            }, delay);
            actionTimeoutsRef.current.push(timeoutId);
        });
    };

    const clearActionTimeouts = () => {
        actionTimeoutsRef.current.forEach((timeoutId) => {
            clearTimeout(timeoutId);
        });
        actionTimeoutsRef.current = [];
    };

    const handleDelete = (id) => {
        dispatch({
            type: DELETE_ACTION_DATA,
            payload: id
        })
    }

    const handleDataChange = (id, value) => {
        dispatch({
            type: UPDATE_ACTIONS_DATA,
            payload: { id, value },
        })
    }

    return (
        <div className='bg-white h-full overflow-auto px-5 py-10'>
            <div className='flex items-center justify-between mb-3'>
            <h2 className=' font-bold'> </h2>
            {
                state.actions.length > 0 && <button className='bg-lime-500 text-white px-5 py-2 rounded-md' onClick={runAllActions}>Run</button>
            }
            </div>
            <Droppable droppableId='board'>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}

                        className={`min-h-full   ${snapshot.isDraggingOver ? "bg-purple-200" : "bg-red-300"} `}
                    >
                        {
                            state.actions.map((action, index) => <WrapperComponent showDelete={true} key={action.id} type={action.type} data={{ id: action.id, index, target: "mainarea", value: action.value, onChange: handleDataChange, onDelete: handleDelete }} />)
                        }

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default MainArea