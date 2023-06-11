import {
  ADD_ACTIONS_DATA,
  UPDATE_SIDEBAR_COMPONENT_STATES,
  DELETE_ACTION_DATA,
  UPDATE_ACTIONS_DATA,
} from "./constants/reducerConstants";

export const initialState = {
  sideBarData: {
    MoveSteps: 0,
    RotateClockwise: 15,
    RotateAntiClockwise: 15,
    GoToPosition: { x: 0, y: 0 },
    SayHello: "Hello",
    Think: "Hmm...",
    Show: null,
    Hide: null,
    WhenStartClicked: null,
    WhenSpriteClicked: null,
    Wait: null,
    Repeat: null,
    IfThen: null,
    IfElse: null,
  },

  actions: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SIDEBAR_COMPONENT_STATES:
      return {
        ...state,
        sideBarData: {
          ...state.sideBarData,
          ...action.payload,
        },
      };
    case ADD_ACTIONS_DATA:
      const temp = [...state.actions];
      temp.splice(action.index, 0, action.payload);
      return {
        ...state,
        actions: temp,
      };
    case UPDATE_ACTIONS_DATA:
      return {
        ...state,
        actions: state.actions.map((e) => {
          if (e.id === action.payload.id) {
            return { ...e, value: action.payload.value };
          }
          return e;
        }),
      };
    case DELETE_ACTION_DATA:
      return {
        ...state,
        actions: state.actions.filter((e) => e.id !== action.payload),
      };

    default:
      return state;
  }
};
