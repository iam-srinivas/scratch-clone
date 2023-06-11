import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { ArrowUturnRightIcon, ArrowUturnLeftIcon, TrashIcon } from '@heroicons/react/24/solid'

const preventEventBubling = (e) => {
    e.preventDefault()
    e.stopPropagation()
}



export const MoveSteps = ({ id, index, value, onChange, onDelete }) => {



    const handleClick = (e) => {
        const moveEvent = new CustomEvent('customEvent', {
            detail: { type: "MoveSteps", value },
        });
        window.dispatchEvent(moveEvent);

    }


    const handleValueChange = (e) => {

        if (typeof onChange !== "function") return

        onChange(id, e.target.value)
    }

    const handleDeleteClick = (e) => {
        preventEventBubling(e)

        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor flex items-center space-x-2'
                    onClick={handleClick}
                >
                    <h3 className='text-s text-white font-medium'>Move</h3>
                    <input onClick={preventEventBubling} onChange={handleValueChange} value={value} className='w-10 rounded-md ps-1' type="number" name="" id="" />
                    <h3 className='text-s text-white font-medium'>Steps</h3>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }

                </div>
            )}
        </Draggable>
    )
}

export const RotateClockwise = ({ id, index, value, onChange, onDelete }) => {


    const handleClick = (e) => {
        const moveEvent = new CustomEvent('customEvent', {
            detail: { type: "RotateClockwise", value },
        });
        window.dispatchEvent(moveEvent);

    }

    const handleValueChange = (e) => {


        if (typeof onChange !== "function") return

        onChange(id, e.target.value)
    }

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor flex items-center space-x-2'
                    onClick={handleClick}
                >
                    <h3 className='text-s text-white font-medium'>Turn </h3>
                    <ArrowUturnRightIcon className='w-5 text-white' />
                    <input onClick={preventEventBubling} onChange={handleValueChange} value={value} className='w-10 rounded-md ps-1' type="number" name="" id="" />
                    <h3 className='text-s text-white font-medium'>Degrees</h3>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const RotateAntiClockwise = ({ id, index, value, onChange, onDelete }) => {

    const handleValueChange = (e) => {


        if (typeof onChange !== "function") return

        onChange(id, e.target.value)
    }

    const handleClick = (e) => {
        const moveEvent = new CustomEvent('customEvent', {
            detail: { type: "RotateAntiClockwise", value },
        });
        window.dispatchEvent(moveEvent);

    }

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor flex items-center space-x-2'
                    onClick={handleClick}
                >
                    <h3 className='text-s text-white font-medium'>Turn </h3>
                    <ArrowUturnLeftIcon className='w-5 text-white' />
                    <input onClick={preventEventBubling} onChange={handleValueChange} value={value} className='w-10 rounded-md ps-1' type="number" name="" id="" />
                    <h3 className='text-s text-white font-medium'>Degrees</h3>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const GoToPosition = ({ id, index, value, onChange, onDelete }) => {

    const handleClick = (e) => {
        const moveEvent = new CustomEvent('customEvent', {
            detail: { type: "GoToPosition", value },
        });
        window.dispatchEvent(moveEvent);

    }

    const handleValueChange = (e, key) => {


        if (typeof onChange !== "function") return

        onChange(id, {
            ...value,
            [key]: e.target.value
        })
    }

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor flex items-center space-x-2'
                    onClick={handleClick}
                >
                    <h3 className='text-s text-white font-medium'>Go to x: </h3>
                    <input onClick={preventEventBubling} onChange={e => handleValueChange(e, "x")} value={value?.x} className='w-10 rounded-md ps-1' type="number" name="" id="" />
                    <h3 className='text-s text-white font-medium'>y:
                    </h3>
                    <input onClick={preventEventBubling} onChange={e => handleValueChange(e, "y")} value={value?.y} className='w-10 rounded-md ps-1' type="number" name="" id="" />
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const SayHello = ({ id, index, value, onChange, onDelete }) => {



    const handleClick = (e) => {
        const moveEvent = new CustomEvent('customEvent', {
            detail: { type: "SayHello", value },
        });
        window.dispatchEvent(moveEvent);

    }

    const handleValueChange = (e) => {
        if (typeof onChange !== "function") return

        onChange(id, e.target.value)
    }


    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }


    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor flex items-center space-x-2'
                    onClick={handleClick}
                >
                    <h3 className='text-s text-white font-medium'>Say </h3>
                    <input onClick={preventEventBubling} onChange={handleValueChange} value={value} className='w-36 rounded-md ps-1' type="text" name="" id="" />
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const Think = ({ id, index, value, onChange, onDelete }) => {

    const handleClick = (e) => {
        const moveEvent = new CustomEvent('customEvent', {
            detail: { type: "Think", value },
        });
        window.dispatchEvent(moveEvent);

    }

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }


    const handleValueChange = (e) => {


        if (typeof onChange !== "function") return

        onChange(id, e.target.value)
    }
    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor flex items-center space-x-2'
                    onClick={handleClick}
                >
                    <h3 className='text-s text-white font-medium'>Think </h3>
                    <input onClick={preventEventBubling} onChange={handleValueChange} value={value} className='w-36 rounded-md ps-1' type="text" name="" id="" />
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const Show = ({ id, index, value, onChange, onDelete }) => {

    const handleClick = (e) => {
        const moveEvent = new CustomEvent('customEvent', {
            detail: { type: "Show" },
        });
        window.dispatchEvent(moveEvent);

    }

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor'
                    onClick={handleClick}
                >
                    <h3 className='text-s text-white font-medium'>Show </h3>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const Hide = ({ id, index, value, onChange, onDelete }) => {

    const handleClick = (e) => {
        const moveEvent = new CustomEvent('customEvent', {
            detail: { type: "Hide" },
        });
        window.dispatchEvent(moveEvent);

    }

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor'
                    onClick={handleClick}
                >
                    <h3 className='text-s text-white font-medium'>Hide </h3>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const WhenStartClicked = ({ id, index, value, onChange, onDelete }) => {

    const handleDeleteClick = (e) => {
        preventEventBubling(e)


        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor'
                >
                    <h4>When Start Clicked</h4>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const WhenSpriteClicked = ({ id, index, value, onChange, onDelete }) => {
    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor'
                >
                    <h4>When Sprite Clicked</h4>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const Wait = ({ id, index, value, onChange, onDelete }) => {
    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor'
                >
                    <h4>Wait</h4>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const Repeat = ({ id, index, value, onChange, onDelete }) => {

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor'
                >
                    <h4>Repeat</h4>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const IfThen = ({ id, index, value, onChange, onDelete }) => {

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor'
                >
                    <h4>If Then</h4>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
export const IfElse = ({ id, index, value, onChange, onDelete }) => {

    const handleDeleteClick = (e) => {
        preventEventBubling(e)
        if (typeof onDelete !== "function") return

        onDelete(id)
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='mb-2 bg-blue-400 p-3 cursor'
                >
                    <h4>If Else</h4>
                    {
                        onDelete ? <TrashIcon className='w-5 text-white cursor-pointer ml-auto' onClick={handleDeleteClick} /> : null
                    }
                </div>
            )}
        </Draggable>
    )
}
