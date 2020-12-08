import { override } from "first-di";
import { UserProfilRepository } from "./UserProfilRepository";
import { MockUserProfilRepository } from "./MockUserProfilRepository";
import { UserPageController } from "./UserPageController";
import React from "react";
import { render } from "react-dom";

if (process.env.NODE_ENV === "test") {
    override(UserProfilRepository, MockUserProfilRepository);
}

render(React.createElement(UserPageController), document.body);