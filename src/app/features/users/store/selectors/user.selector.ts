export const selectUser = (state, props) => {
    return state.state.users.find((user) => user.id == props);
};
export const selectUsers = (state) => state.state.users;
