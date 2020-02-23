import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersDocs: [],
  docInfo: {
    comments: [
      {
        authors: ["Brett H Fene"],
        date: ["2020-01-08T00:09:00Z"],
        content:
          "Joe- Listen, are you gonna have those TPS reports for us this afternoon?"
      },
      {
        authors: ["Lovoi, Joseph W."],
        date: ["2020-01-18T17:43:00Z"],
        content: "Here is a comment!"
      }
    ],
    inserts: [
      {
        line:
          "Programming Languages:_______________Number of Error Messages:______________________",
        inserted: [
          { author: [], date: [], content: "Program" },
          {
            author: ["Lovoi, Joseph W."],
            date: ["2020-01-18T14:06:00Z"],
            content: "ming"
          },
          { author: [], date: [], content: " " },
          { author: [], date: [], content: "Language" },
          {
            author: ["Lovoi, Joseph W."],
            date: ["2020-01-18T14:06:00Z"],
            content: "s"
          },
          { author: [], date: [], content: ":_" },
          { author: [], date: [], content: "______________Number" },
          {
            author: [],
            date: [],
            content: " of Error Messages:______________________"
          }
        ]
      },
      {
        line:
          "Where\u2019s my red stapler? Did you take it? ___________________________________________________________________________",
        inserted: [
          {
            author: ["Brett H Fene"],
            date: ["2020-01-08T00:11:00Z"],
            content: "Where\u2019s my red stapler? Did you take it? "
          },
          {
            author: [],
            date: [],
            content:
              "___________________________________________________________________________"
          }
        ]
      }
    ],
    lines: [
      "T.P.S. REPORT",
      "COVER SHEET",
      "Prepared By:_______________________________________________Date:_____________",
      "Device/Program Type:_________________________________________________________",
      "Product Code:______________Customer:_________________________________________",
      "Vendor:_____________________________________________________________________",
      "Due Date:_______________________Data Loss:___________________________________",
      "Test Date:_______________________Target Run Date:______________________________",
      "Program Run Time:_______________Reference Guide:______________________________",
      "Programming Languages:_______________Number of Error Messages:______________________",
      "Comments:__________________________________________________________________",
      "Where\u2019s my red stapler? Did you take it? ___________________________________________________________________________",
      "___________________________________________________________________________",
      "___________________________________________________________________________",
      "CONFIDENTIAL"
    ]
  }
};

const doc = createSlice({
  name: "doc",
  initialState,
  reducers: {
    downloadFile: () => {
      // saga
    },
    fetchUsersDocsInit: () => {
      // saga
    },
    fetchUsersDocsSuccess: (state, { payload }) => {
      state.usersDocs = payload;
    },
    fetchDoc: () => {
      // saga
    },
    setDoc: (state, action) => {
      state.document = action.payload;
    },
    submitDocInit: () => {
      // saga
    },
    submitDocSuccess: (state, { payload }) => {
      state.document = payload;
    }
  }
});

const reducer = doc.reducer;
const actions = doc.actions;

export { reducer, actions };
