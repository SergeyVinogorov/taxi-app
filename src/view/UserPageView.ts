import { UserPageOptions, UserPageController } from "./UserPageController";
import React from "react";

export const userPageView = <P extends UserPageOptions, S>(
    ctrl: UserPageController<P, S>,
    props: P
): JSX.Element => (
    <>
        <div className="user">
            <div className="user-name">
                Имя пользователя: {ctrl.userProfile.getFullname()}
            </div>
            <div className="user-age">
                Возраст: {ctrl.userProfile.getAge()}
            </div>
        </div>
        <div className="tarifаs">
            {/* остальная часть вьюхи */}
        </div>
    </>
);