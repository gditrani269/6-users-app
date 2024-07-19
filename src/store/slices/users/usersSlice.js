import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice ({
    name: 'users', 
    initialState: {
        users: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [
                ...state.users,
                {
                    ...action.payload,
                }
            ]
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        updateUser:  (state, action) => {
            state.users = state.users.map ( u => {
                if (u.id === action.payload.id) {
                    return {
                        //en el caso de update modificamos todos los datos del usuario salvo el password.
                        //ese dato lo mantenemos
                        ...action.payload,
                    };
                }
                return u;
            });
        },
        loadingUsers: (state, action) => {
            state.users = action.payload
        }
    }
});

export const {
    addUser,
    removeUser,
    updateUser,
    loadingUsers,
} = usersSlice.actions;