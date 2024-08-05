import { createAppSlice } from "../../createAppSlice"
import { FeedbackStateSlice} from "./types"

const feedbackInitialSlice: FeedbackStateSlice = {
    count: 0,
}

export const feedbackSlice = createAppSlice ({
    name: "FEEDBACK",
    initialState: feedbackInitialSlice,
    reducers: create => ({
        like: create.reducer((state: FeedbackStateSlice) => {
            state.count = state.count + 1
        }),
        dislike: create.reducer((state: FeedbackStateSlice) => {
            state.count = state.count + 1
        }),
    }),
    selectors: {
        count: (state: FeedbackStateSlice) => state.count,
    },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
