export const sortReducerFunc = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "FICTION":
      return {
        ...state,
        categories: {
          ...state["categories"],
          fiction: !state.categories.fiction,
        },
      };
    case "NONFICTION":
      return {
        ...state,
        categories: {
          ...state["categories"],
          nonfiction: !state.categories.nonfiction,
        },
      };

    case "SELFHELP":
      return {
        ...state,
        categories: {
          ...state["categories"],
          selfhelp: !state.categories.selfhelp,
        },
      };
    case "RECOMMENDED":
      return {
        ...state,
        categories: {
          ...state["categories"],
          recommended: !state.categories.recommended,
        },
      };

    // case "ALL":
    //   return {
    //     categories: {
    //       bestseller: false,
    //       fiction: false,
    //       nonfiction: false,
    //       selfhelp: false,
    //       recommended: false,
    //     },
    //   };
  }
};
