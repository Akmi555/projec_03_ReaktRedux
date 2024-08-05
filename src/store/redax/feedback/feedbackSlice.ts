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
        like: create.reducer((state: FeedbackStateSlice) => {
            state.like = state.like + 1
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
