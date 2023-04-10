import * as types from "../types"

const initialState = {
  data: {},
  loading: false,
  error: null,
}

const todoReducer = (state = initialState,action: any) => {
  const { type, payload, message } = action
  switch (type) {
    case types.GET_PRODUCTS_BEGIN:
    case types.DELETE_PRODUCTS_BEGIN:
    case types.EDIT_PRODUCTS_BEGIN:
      return {
        data: [],
        loading: true,
        error: null,
      };

      case types.GET_PRODUCTS_SUCCESS:
      case types.DELETE_PRODUCTS_SUCCESS:
      case types.EDIT_PRODUCTS_SUCCESS:
        return { ...state, data: payload, loading: false, error: null }

    case types.GET_PRODUCTS_FAILURE:
      return { ...state, data: {}, loading: false, error: message}

    case types.CREATE_PRODUCTS_SUCCESS:
      return {...state,
        data: state?.data, payload,
        loading: false,
        error: null
      }
    case types.EDIT_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: state.data,
        loading: false,
        error: null,
      }
    // case YourEntityActionType.DELETE:
    //   return {
    //     ...state,
    //     data: state.data.filter(
    //       (yourEntity) => yourEntity.id !== (action.payload as number)
    //     ),
    //     loading: false,
    //   }
    default:
      return state
  }
}
export default todoReducer;