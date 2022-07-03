import { createSlice } from '@reduxjs/toolkit'
import {ICard} from "../../types/card.types";

const data: ICard[] = [
    ...Array.from({ length: 10 }).map((_, i) => ({
        name: `Card ${i + 2}`,
        description: `Card ${i + 2} description`,
        image: 'https://picsum.photos/200/300',
        id: i + 2,
        cost: Math.floor(Math.random() * 1000),
    })),
]



const initialState = data;

export const cardReducer = createSlice({
  name: 'card',
  initialState,
  reducers: {
    increment: (state) => {
      state.forEach((item) => {
        item.cost += 100;
      }
      )
    },
  },
})

export const { increment } = cardReducer.actions
