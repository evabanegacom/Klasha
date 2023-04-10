import axios, { AxiosResponse } from 'axios';
import { AppDispatch } from "./store"
import * as types from "./types"


const apiUrl = 'https://api-test.innoloft.com';

export interface Product {
  id: number;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  businessModels: string[];
  trl: number;
  investment: string;
  videoUrl: string;
  user: {
    name: string;
    imageUrl: string;
    companyName: string;
    address: string;
  };
}

export interface TRL {
  id: number;
  name: string;
}

export interface Configuration {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}

const headers = {
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

}

const fetchProduct = async () => {
  return await axios
    .get(`${apiUrl}/product/${6781}`, {
      headers: headers,
    })
    .then((res: any) => {
      return res
    })
    .catch((error: any) => {
      throw error
    })
}

export const getProduct = () => async (dispatch: AppDispatch) => {
  try {
    await dispatch({ type: types.GET_PRODUCTS_BEGIN })
    const PRODUCTS: any = await fetchProduct()
    dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: PRODUCTS.data })
  } catch (error: any) {
    dispatch({ type: types.GET_PRODUCTS_FAILURE, message: error.message })
  }
}

const createTodo = async (todoInfo: any) => {
  return await axios
    .post(`${apiUrl}/todo`, todoInfo, {
      headers: headers,
    })
    .then((res: any) => {
      return res
    })
    .catch((error: any) => {
      throw error
    })
}

export const addPRODUCTS = (todoInfo: any) => async (dispatch: AppDispatch) => {
  try {
    await dispatch({ type: types.CREATE_PRODUCTS_BEGIN })
    const create: any = await createTodo(todoInfo)
    dispatch({ type: types.CREATE_PRODUCTS_SUCCESS, payload: create.data })
  } catch (error: any) {
    dispatch({ type: types.CREATE_PRODUCTS_FAILURE, message: error.message })
  }
}

const editTodo = async (id: any, todoInfo: any) => {
  return await axios
    .put(`${apiUrl}/todo/${id}`, todoInfo, {
      headers: headers,
    })
    .then((res: any) => {
      return res
    })
    .catch((error: any) => {
      throw error
    })
}

export const updatePRODUCTS = (id: any, todoInfo: any) => async (dispatch: AppDispatch) => {
  try {
    await dispatch({ type: types.EDIT_PRODUCTS_BEGIN })
    const update: any = await editTodo(id, todoInfo)
    dispatch({ type: types.EDIT_PRODUCTS_SUCCESS, payload: update.data })
  } catch (error: any) {
    dispatch({ type: types.EDIT_PRODUCTS_FAILURE, message: error.message })
  }
}

const deleteTodo = async (id: any) => {
  return await axios
    .delete(`${apiUrl}/todo/${id}`, {
      headers: headers,
    })
    .then((res: any) => {
      return res
    })
    .catch((error: any) => {
      throw error
    })
}

export const removeTodo = (id: any) => async (dispatch: AppDispatch) => {
  try {
    await dispatch({ type: types.DELETE_PRODUCTS_BEGIN })
    const todo: any = await deleteTodo(id)
    console.log({todo})
    dispatch({ type: types.DELETE_PRODUCTS_SUCCESS, payload: todo.data })
  } catch (error: any) {
    dispatch({ type: types.DELETE_PRODUCTS_FAILURE, message: error.message })
  }
}

