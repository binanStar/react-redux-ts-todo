import { Dispatch } from "redux";
import { UserDispatchType, LOGIN_SUCCESS, LOGIN_START } from "./userActionTypes";
import { toast } from "react-toastify";
const VALID_USERNAME_LIST = [
    "username_1",
    "username_2",
    "username_3",
    "username_4",
    "username_5",
    "username_6",
    "username_7",
    "username_8",
    "username_9",
    "username_10",
];

export const login =
    (username: string, password: string) =>
    (dispatch: Dispatch<UserDispatchType>) => {
        dispatch({ type: LOGIN_START })
        const id = toast.loading("Logging you in...");

        // Intentional delay for nicer transition
        setTimeout(async () => {
            if (
                VALID_USERNAME_LIST.includes(username) &&
                password === "admin"
            ) {
                const userId = username.split("_")[1];
                toast.update(id, {
                    render: `Welcome username_${userId}`,
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                });
                dispatch({
                    type: LOGIN_SUCCESS,
                    userId: parseInt(userId),
                });

                return true;
            } else {
                toast.update(id, {
                    render: "Credentials mismatch. Try again.",
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                });
            }

            return false;
        }, 1500);
    };
