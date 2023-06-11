import React, { useContext } from 'react'
import { controlConstants, eventConstants, looksConstants, motionConstants } from '../../constants/elements'
import { Droppable } from 'react-beautiful-dnd'
import { WrapperComponent } from '../actionComponents/WrapperComponent'
import { AppContext } from '../../AppContext'
import { UPDATE_SIDEBAR_COMPONENT_STATES } from '../../constants/reducerConstants'

const SideBar = () => {

  const { state, dispatch } = useContext(AppContext)

  const handleDataChange = (id, value) => {
    dispatch({
      type: UPDATE_SIDEBAR_COMPONENT_STATES,
      payload: { [id]: value },
    })
  }

  return (
    <div className='bg-white h-full overflow-auto'>
      <Droppable droppableId="motion" >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='m-3  '
          >
            <h2 className=' font-bold'>Motion</h2>
            {
              motionConstants.map((data, index) => <WrapperComponent key={data} type={data} data={{ id: data, index, target: "siderbar", value: state.sideBarData[data], onChange: handleDataChange }} />)
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="looks" >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='m-3  '
          >
            <h2 className=' font-bold'>Looks</h2>
            {
              looksConstants.map((data, index) => <WrapperComponent key={data} type={data} data={{ id: data, index, target: "siderbar", value: state.sideBarData[data], onChange: handleDataChange }} />)
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {/* <Droppable droppableId="control" >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='m-3  '
          >
            <h2 className=' font-bold'>Control</h2>
            {
              controlConstants.map((data, index) => <WrapperComponent key={data} type={data} data={{ id: data, index, target: "siderbar", value: state.sideBarData[data], onChange: handleDataChange }} />)
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="events" >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='m-3  '
          >
            <h2 className=' font-bold'>Events</h2>
            {
              eventConstants.map((data, index) => <WrapperComponent key={data} type={data} data={{ id: data, index, target: "siderbar", value: state.sideBarData[data], onchange: handleDataChange }} />)
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable> */}

    </div>
  )
}

export default SideBar