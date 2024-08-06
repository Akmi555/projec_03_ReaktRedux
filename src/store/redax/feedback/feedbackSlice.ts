import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../createAppSlice"
import { FeedbackStateSlice} from "./types"

const feedbackInitialState: FeedbackStateSlice = {
    like: 0,
    dislike: 0,
}

export const feedbackSlice = createAppSlice ({
    name: "FEEDBACK",
    initialState: feedbackInitialState,
    reducers: create => ({
        //2-й аргумент в функции reducer - action (это объект, в свойстве payload которого храняться данные, 
        //которые мы можем передать из компонента в slice)
        like: create.reducer((state: FeedbackStateSlice, action: PayloadAction<number>) => {
            state.like = state.like + action.payload
        }),
        dislike: create.reducer((state: FeedbackStateSlice) => {
            state.dislike = state.dislike + 1
        }),
        // способ очистки состяния (возвращение к initialState)
        reset: create.reducer(() => feedbackInitialState),
        // reset: create.reducer((state: FeedbackStateSlice) => {
        //     state.like = state.like * 0
        //     state.dislike = state.dislike * 0
        // }),
    }),
    selectors: {
        like: (state: FeedbackStateSlice) => state.like,
        dislike: (state: FeedbackStateSlice) => state.dislike,
    },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
