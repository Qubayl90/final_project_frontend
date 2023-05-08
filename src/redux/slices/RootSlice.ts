import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root", 
    initialState: {
        image_title: "Image Title",
        creator_name: "Creator Name",
        no_of_downloads: "No of Downloads",
        image_url: "Image URL",
        image_type: "Image Type",
    },
    reducers:{
        //action is submitted eleswhere - written to state.name
        chooseImageTitle: (state, action) => {state.image_title = action.payload}, //We are setting the input to the state.name
        chooseCreatorName: (state, action) => {state.creator_name = action.payload},
        chooseNoOfDownloads: (state, action) => {state.no_of_downloads = action.payload},
        chooseImageUrl: (state, action) => {state.image_url = action.payload},
        chooseImageType: (state, action) => {state.image_type = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {chooseImageTitle, chooseCreatorName, chooseNoOfDownloads, chooseImageUrl, chooseImageType} = rootSlice.actions