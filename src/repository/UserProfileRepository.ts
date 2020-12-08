import { UserProfileDto } from "./UserProfileDto";
import { reflection } from "first-di";

@reflection
export class UserProfilRepository {
    public async getUserProfile(): Promise<UserProfileDto> {
        const response = await fetch("./api/user-profile");
        const object = await response.json();
        return new UserProfileDto().fromJSON(object);
    }

    /**
     * ... множество других методов для рабоыт с профилем пользователя
     */
}